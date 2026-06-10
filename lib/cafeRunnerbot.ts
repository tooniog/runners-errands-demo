import type {
  CafeArea,
  CafeEconomicsInput,
  CafeEconomicsOutput,
  CafeOrder,
  CafeOrderType,
  CafePaymentMethod,
  CafePaymentStatus,
  CafeRider,
} from "../types/cafe";
import { mockCafeRiders } from "./cafeData";

export function formatNaira(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

export function generateCafeOrderId(): string {
  const year = new Date().getFullYear();
  const seq = Math.floor(1 + Math.random() * 999).toString().padStart(3, "0");
  return `CAFE-IKY-${year}-${seq}`;
}

export function calculateCafeDeliveryFee(
  area: CafeArea,
  priority = false,
  largeOrder = false
): number {
  const areaFees: Record<CafeArea, number> = {
    "Ikoyi Club pickup point": 0,
    Ikoyi: 1500,
    "Victoria Island": 2500,
    "Lekki Phase 1": 3200,
    "Banana Island": 2700,
    Parkview: 2000,
    Osborne: 2000,
    Other: 3500,
  };

  const priorityFee = priority ? 700 : 0;
  const largeOrderFee = largeOrder ? 1000 : 0;
  return areaFees[area] + priorityFee + largeOrderFee;
}

export function generateCafeEta(area: CafeArea, orderType: CafeOrderType): string {
  if (orderType === "Dine-in") return "10–20 mins";
  if (orderType === "Collection") return "Ready in 20–35 mins";

  const eta: Record<CafeArea, string> = {
    "Ikoyi Club pickup point": "Ready in 20–35 mins",
    Ikoyi: "30–45 mins",
    "Victoria Island": "40–60 mins",
    "Lekki Phase 1": "55–75 mins",
    "Banana Island": "40–60 mins",
    Parkview: "30–45 mins",
    Osborne: "30–45 mins",
    Other: "60–90 mins",
  };

  return eta[area];
}

export function generateCafePaymentStatus(
  paymentMethod: CafePaymentMethod
): CafePaymentStatus {
  if (paymentMethod === "Bank transfer") return "Pending confirmation";
  if (paymentMethod === "Pay on delivery") return "Pay on delivery";
  if (paymentMethod === "Member account") return "Requires staff approval";
  if (paymentMethod === "Cash on pickup") return "Cash on pickup";
  return "Pending confirmation";
}

export function assignCafeRider(order: Partial<CafeOrder>): CafeRider | undefined {
  if (order.orderType !== "Delivery") return undefined;

  const request = `${order.requestDetails || ""} ${order.notes || ""}`.toLowerCase();
  const largeOrder =
    request.includes("tray") ||
    request.includes("corporate") ||
    request.includes("bulk") ||
    request.length > 140;

  if (largeOrder) {
    return (
      mockCafeRiders.find((r) => r.vehicleType === "Car" && r.status === "Available") ||
      mockCafeRiders.find((r) => r.status === "Available")
    );
  }

  const shortRouteAreas: CafeArea[] = [
    "Ikoyi",
    "Victoria Island",
    "Parkview",
    "Osborne",
    "Banana Island",
  ];

  if (order.area && shortRouteAreas.includes(order.area)) {
    return (
      mockCafeRiders.find((r) => r.vehicleType === "E-bike" && r.status === "Available") ||
      mockCafeRiders.find((r) => r.status === "Available")
    );
  }

  return (
    mockCafeRiders.find((r) => r.vehicleType === "Motorcycle" && r.status === "Available") ||
    mockCafeRiders.find((r) => r.status === "Available")
  );
}

export function generateCafeInsight(orders: CafeOrder[]): string {
  const deliveryCount = orders.filter((o) => o.orderType === "Delivery").length;
  const lekkiCount = orders.filter((o) => o.area === "Lekki Phase 1").length;
  const nonMemberCount = orders.filter((o) => o.customerType === "Non-member").length;

  if (lekkiCount >= 2) {
    return "Lekki demand is rising. Pre-assign one rider between 5pm–8pm and keep Lekki pricing above ₦2,800.";
  }

  if (nonMemberCount > deliveryCount / 2) {
    return "Non-member requests are driving complexity. Keep pickup points controlled and send clearer payment/ETA messages.";
  }

  if (deliveryCount > 0) {
    return "Delivery orders are active. Runnerbot 2 should prioritise ETA updates, OTP proof and payment confirmation.";
  }

  return "Collection and dine-in orders are clean today. Push coffee + pastry bundles to increase morning basket value.";
}

export function calculateCafeEconomics(
  inputs: CafeEconomicsInput
): CafeEconomicsOutput {
  const monthlyOrders = inputs.ordersPerDay * inputs.daysPerMonth;
  const cafeGrossSales = monthlyOrders * inputs.averageBasket;
  const cafeRetainedRevenue = cafeGrossSales;
  const runnersServiceRevenue = monthlyOrders * inputs.serviceFee;
  const runnersDeliveryRevenue = monthlyOrders * inputs.deliveryFee;
  const deliveryCostTotal = monthlyOrders * inputs.deliveryCost;
  const totalRevenue =
    runnersServiceRevenue + runnersDeliveryRevenue + inputs.monthlySaasFee;
  const runnersGrossProfit = totalRevenue - deliveryCostTotal;
  const grossMargin = totalRevenue > 0 ? runnersGrossProfit / totalRevenue : 0;

  const contributionPerOrder =
    inputs.serviceFee + inputs.deliveryFee - inputs.deliveryCost;
  const breakEvenOrderVolume =
    contributionPerOrder > 0
      ? Math.ceil(inputs.monthlySaasFee / contributionPerOrder)
      : 0;

  return {
    monthlyOrders,
    cafeGrossSales,
    cafeRetainedRevenue,
    runnersServiceRevenue,
    runnersDeliveryRevenue,
    deliveryCostTotal,
    runnersGrossProfit,
    grossMargin,
    breakEvenOrderVolume,
  };
}

export function generateCafeChatbotReply(message: string, context?: string): string {
  const text = `${message} ${context || ""}`.toLowerCase();

  if (text.includes("non-member") || text.includes("non member")) {
    return "Yes. Non-members can place delivery or controlled collection requests through the Runners Errands cafe flow. The cafe confirms availability first, then Runnerbot 2 provides the ETA and coordinates delivery or pickup without requiring unauthorised club access.";
  }

  if (text.includes("gate") || text.includes("collect")) {
    return "Yes. Collection can be handled through a controlled pickup point confirmed by cafe staff. The customer receives a pickup window and confirmation code, while staff approve availability, price and preparation time.";
  }

  if (text.includes("lekki")) {
    return "Yes, delivery to Lekki Phase 1 can be supported in the pilot. Suggested Ikoyi-to-Lekki delivery pricing is usually ₦2,800–₦3,500 depending on priority, order size and rider availability.";
  }

  if (text.includes("transfer") || text.includes("pay")) {
    return "Yes. Bank transfer can be selected, but the order remains in pending payment confirmation until cafe staff confirm receipt. Pay on delivery, member account and cash on pickup can also be simulated in the pilot.";
  }

  if (text.includes("schedule") || text.includes("later")) {
    return "Yes. Customers can request ASAP or scheduled orders. Scheduled requests are useful for corporate lunches, member preorders, clinic orders, office canteens and recurring cafe orders.";
  }

  if (text.includes("late")) {
    return "If an order is late, Runnerbot 2 can send a proactive ETA update, escalate to staff, notify the rider, and log the delay reason for the daily fulfilment report.";
  }

  if (text.includes("corporate") || text.includes("lunch")) {
    return "Yes. Corporate lunch orders can be captured as special requests. Runnerbot 2 should collect the company/contact name, order details, area, preferred time, payment method and delivery/collection preference.";
  }

  if (text.includes("produce") || text.includes("strawberry") || text.includes("blueberry")) {
    return "Yes. Premium produce add-ons such as strawberry boxes, blueberry add-ons, avocado salad items and fruit bowls can be included as upsell options, subject to cafe or partner availability.";
  }

  if (text.includes("order") || text.includes("special")) {
    return "I can help create a mock cafe request. Please send: name, phone number, order details, delivery or collection, area, preferred time and payment method. Cafe staff still approve price, availability and dispatch before fulfilment.";
  }

  return "Runnerbot 2 Cafe Concierge can help with member orders, non-member delivery, controlled collection, special requests, payment status, delivery ETA, rider assignment and daily fulfilment reporting. What would you like to simulate?";
}
