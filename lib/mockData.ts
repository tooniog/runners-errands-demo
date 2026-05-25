import { Order, PartnerProduct, Rider, WaitlistSignup } from "@/types";

export const launchZones = [
  "Victoria Island",
  "Ikoyi",
  "Lekki",
  "Ikeja",
  "Maryland",
  "Surulere",
  "Yaba",
];

export const riders: Rider[] = [
  { id: "rider-001", name: "Femi Adeyemi", vehicleType: "E-bike", rating: 4.9, completedTrips: 1280, status: "Online", performanceScore: 96, zone: "Victoria Island" },
  { id: "rider-002", name: "Tunde Balogun", vehicleType: "Bike", rating: 4.8, completedTrips: 970, status: "Online", performanceScore: 92, zone: "Lekki" },
  { id: "rider-003", name: "David Okafor", vehicleType: "Car", rating: 4.7, completedTrips: 710, status: "Online", performanceScore: 88, zone: "Ikeja" },
  { id: "rider-004", name: "Kola Martins", vehicleType: "E-bike", rating: 4.95, completedTrips: 1550, status: "Online", performanceScore: 98, zone: "Ikoyi" },
];

export const demoOrders: Order[] = [
  {
    id: "RE-LAG-2026-001",
    customerName: "Ada Nwosu",
    phone: "08030010001",
    category: "Premium Produce",
    pickupAddress: "Premium Produce Partner, Victoria Island",
    dropoffAddress: "Bourdillon Road, Ikoyi",
    details: "Strawberries, blueberries, avocado and asparagus",
    status: "Out for delivery",
    etaRange: "25–40 mins",
    riderId: "rider-001",
    riderName: "Femi Adeyemi",
    riderRating: 4.9,
    vehicleType: "E-bike",
    paymentMethod: "Bank transfer",
    createdAt: new Date().toISOString(),
    otp: "4821",
    preferredTime: "Now",
    demoPrice: 18500,
  },
];

export const demoWaitlist: WaitlistSignup[] = [
  { id: "wl-001", name: "Grace Udo", contact: "grace@example.com", area: "Victoria Island", useCase: "Premium produce", frequency: "Weekly", createdAt: new Date().toISOString() },
];

export const partnerProducts: PartnerProduct[] = [
  { id: "prod-001", name: "Asparagus", category: "Vegetable", unit: "bundle", price: 8500, originType: "Imported", available: true },
  { id: "prod-002", name: "Broccoli", category: "Vegetable", unit: "head", price: 6500, originType: "Imported", available: true },
  { id: "prod-003", name: "Carrot", category: "Vegetable", unit: "kg", price: 3000, originType: "Premium", available: true },
  { id: "prod-004", name: "Lettuce", category: "Vegetable", unit: "head", price: 3500, originType: "Premium", available: true },
  { id: "prod-005", name: "Capsicum", category: "Vegetable", unit: "pack", price: 7500, originType: "Imported", available: true },
  { id: "prod-006", name: "Habanero", category: "Pepper", unit: "pack", price: 2500, originType: "Local premium", available: true },
  { id: "prod-007", name: "Cherry tomatoes", category: "Vegetable", unit: "pack", price: 6000, originType: "Imported", available: true },
  { id: "prod-008", name: "Portobello mushrooms", category: "Mushroom", unit: "pack", price: 9500, originType: "Imported", available: true },
  { id: "prod-009", name: "Avocado", category: "Fruit", unit: "piece", price: 2500, originType: "Premium", available: true },
  { id: "prod-010", name: "Blueberries", category: "Berry", unit: "punnet", price: 12000, originType: "Imported", available: true },
  { id: "prod-011", name: "Grapes", category: "Fruit", unit: "pack", price: 11000, originType: "Imported", available: true },
  { id: "prod-012", name: "Strawberries", category: "Berry", unit: "punnet", price: 13000, originType: "Imported", available: true },
];
