import { Order, Rider, ServiceCategory } from "@/types";
import { riders } from "./mockData";

const premiumZones = ["Victoria Island", "VI", "Ikoyi", "Lekki"];

export function assignBestRider(order: Partial<Order>): Rider {
  const route = `${order.pickupAddress || ""} ${order.dropoffAddress || ""}`.toLowerCase();
  const isPremiumRoute = premiumZones.some((zone) => route.includes(zone.toLowerCase()));
  let preferred = riders.filter((rider) => rider.status === "Online");

  if (isPremiumRoute && (order.category === "Premium Produce" || order.category === "Pharmacy")) {
    preferred = preferred.filter((rider) => rider.vehicleType === "E-bike");
  }

  if (!preferred.length) preferred = riders;

  return [...preferred].sort((a, b) => {
    const scoreA = a.performanceScore + a.rating * 5;
    const scoreB = b.performanceScore + b.rating * 5;
    return scoreB - scoreA;
  })[0];
}

export function generateEtaRange(pickup: string, dropoff: string, category: ServiceCategory): string {
  const route = `${pickup} ${dropoff}`.toLowerCase();
  const islandRoute =
    route.includes("vi") ||
    route.includes("victoria island") ||
    route.includes("ikoyi") ||
    route.includes("lekki");

  let min = islandRoute ? 25 : 40;
  let max = islandRoute ? 45 : 70;

  if (category === "Pharmacy") {
    min -= 5;
    max -= 5;
  }

  if (category === "Premium Produce") {
    min += 5;
    max += 5;
  }

  return `${Math.max(min, 15)}–${Math.max(max, 25)} mins`;
}

export function calculateDemoPrice(category: ServiceCategory, pickup: string, dropoff: string): number {
  const route = `${pickup} ${dropoff}`.toLowerCase();
  const mainland =
    route.includes("ikeja") ||
    route.includes("yaba") ||
    route.includes("surulere") ||
    route.includes("maryland");

  const base: Record<ServiceCategory, number> = {
    Food: 2500,
    Groceries: 3500,
    Pharmacy: 3000,
    Parcel: 2800,
    "Premium Produce": 5000,
    "Special Request": 4500,
    Corporate: 6000,
  };

  return base[category] + (mainland ? 1200 : 0);
}

export function generateOtp(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export function generateOrderId(): string {
  return `RE-LAG-2026-${Math.floor(100 + Math.random() * 900)}`;
}

export function generateOpsInsights(orders: Order[]): string[] {
  return [
    "High demand likely in Lekki between 6pm–9pm.",
    "Premium produce requests should be grouped for e-bike efficiency.",
    "3 pharmacy runs detected in Ikoyi — recommend batching.",
    "Cash-on-delivery risk low for current queue.",
    "Increase rider supply in VI by 2 riders.",
  ];
}

export function generateChatbotReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("vi") && text.includes("lekki")) {
    return "Yes. Runners Errands supports VI to Lekki routes. I can create the request, assign a runner and show an ETA range.";
  }

  if (text.includes("groceries") && text.includes("pharmacy")) {
    return "Yes. Groceries and pharmacy can be combined into one Special Request with clear pickup notes and proof-of-delivery.";
  }

  if (text.includes("late")) {
    return "If an order is late, Runnerbot 2 updates the ETA range, flags support and keeps the customer informed.";
  }

  if (text.includes("tomorrow") || text.includes("schedule")) {
    return "Yes. Scheduled deliveries are supported. Use the booking page and choose Schedule later.";
  }

  if (text.includes("business") || text.includes("corporate")) {
    return "Yes. Runners Errands supports B2B and corporate runs, including recurring office deliveries, parcels and SME fulfilment.";
  }

  if (text.includes("fruit") || text.includes("strawberries") || text.includes("premium")) {
    return "Absolutely. Premium Produce is a launch wedge using imported fruits and vegetables with e-bike delivery across VI, Ikoyi and Lekki.";
  }

  if (text.includes("proof")) {
    return "Proof-of-delivery works through OTP confirmation, rider status updates and completion records.";
  }

  return "I can help with food, groceries, pharmacy, parcels, premium produce, scheduled deliveries, corporate runs and proof-of-delivery. What would you like delivered?";
}
