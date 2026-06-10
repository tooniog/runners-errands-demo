import type { CafeArea, CafeInsight, CafeOrder, CafeRider } from "../types/cafe";

export const CAFE_STORAGE_KEY = "runners_cafe_orders_v1";

export const cafeAreas: CafeArea[] = [
  "Ikoyi Club pickup point",
  "Ikoyi",
  "Victoria Island",
  "Lekki Phase 1",
  "Banana Island",
  "Parkview",
  "Osborne",
  "Other",
];

export const sampleMenuCategories = [
  "Breakfast",
  "Coffee & drinks",
  "Pastries",
  "Lunch",
  "Salads",
  "Specials",
  "Premium produce add-ons",
  "Corporate lunch bundles",
];

export const sampleCafeItems = [
  "Coffee + pastry bundle",
  "Chicken salad",
  "Club sandwich",
  "Jollof bowl",
  "Fresh juice",
  "Fruit bowl",
  "Premium strawberry box",
  "Blueberry add-on",
  "Avocado salad",
  "Corporate lunch tray",
];

export const cafePricingBands: Record<string, string> = {
  Ikoyi: "₦1,500",
  "Victoria Island": "₦2,000–₦2,800",
  "Lekki Phase 1": "₦2,800–₦3,500",
  "Banana Island": "₦2,000–₦3,000",
  Parkview: "₦1,500–₦2,300",
  Osborne: "₦1,500–₦2,300",
  Priority: "+₦500–₦1,000",
  "Large order": "+₦500–₦1,500",
};

export const mockCafeRiders: CafeRider[] = [
  {
    id: "RDR-001",
    name: "Tunde",
    vehicleType: "E-bike",
    status: "Available",
    currentArea: "Ikoyi",
    rating: 4.9,
    completedDeliveries: 184,
  },
  {
    id: "RDR-002",
    name: "Ayo",
    vehicleType: "Motorcycle",
    status: "Available",
    currentArea: "Victoria Island",
    rating: 4.8,
    completedDeliveries: 231,
  },
  {
    id: "RDR-003",
    name: "Kunle",
    vehicleType: "Motorcycle",
    status: "Busy",
    currentArea: "Lekki Phase 1",
    rating: 4.7,
    completedDeliveries: 142,
  },
  {
    id: "RDR-004",
    name: "Musa",
    vehicleType: "Car",
    status: "Available",
    currentArea: "Ikoyi",
    rating: 4.9,
    completedDeliveries: 97,
  },
];

export const mockCafeOrders: CafeOrder[] = [
  {
    id: "CAFE-IKY-2026-001",
    customerName: "Demo Member",
    phone: "+2348010000001",
    customerType: "Ikoyi Club Member",
    orderType: "Collection",
    area: "Ikoyi Club pickup point",
    requestDetails: "Coffee + pastry bundle and fruit bowl.",
    preferredTime: "ASAP",
    paymentMethod: "Member account",
    paymentStatus: "Requires staff approval",
    fulfilmentStatus: "Awaiting cafe approval",
    etaRange: "Ready in 20–30 mins",
    deliveryFee: 0,
    serviceFee: 300,
    otp: "4821",
    createdAt: new Date().toISOString(),
    notes: "Member collection from cafe counter.",
  },
  {
    id: "CAFE-IKY-2026-002",
    customerName: "Demo Non-member",
    phone: "+2348010000002",
    customerType: "Non-member",
    orderType: "Delivery",
    area: "Lekki Phase 1",
    requestDetails: "Club sandwich, fresh juice and premium strawberry box.",
    preferredTime: "ASAP",
    paymentMethod: "Bank transfer",
    paymentStatus: "Pending confirmation",
    fulfilmentStatus: "Awaiting cafe approval",
    assignedRiderId: "RDR-002",
    etaRange: "55–75 mins",
    deliveryFee: 3200,
    serviceFee: 400,
    otp: "7394",
    createdAt: new Date().toISOString(),
    notes: "Non-member delivery. No unauthorised club access required.",
  },
];

export const mockCafeInsights: CafeInsight[] = [
  {
    id: "INS-001",
    title: "Lekki evening demand",
    description:
      "Lekki requests rise after 5pm. Recommend pre-assigning one rider between 5pm–8pm.",
    priority: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "INS-002",
    title: "Non-member confirmation friction",
    description:
      "Non-member delivery requests need clearer pickup confirmation messages before dispatch.",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "INS-003",
    title: "Morning bundle opportunity",
    description:
      "Bundle coffee + pastry for morning members to increase basket value before 11am.",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "INS-004",
    title: "Corporate lunch preorder window",
    description:
      "Offer corporate lunch preorders by 10am for offices around Ikoyi, VI and Banana Island.",
    priority: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "INS-005",
    title: "Lekki fee protection",
    description:
      "Delivery fee for Ikoyi to Lekki should stay between ₦2,800 and ₦3,500 to protect margin.",
    priority: "High",
    createdAt: new Date().toISOString(),
  },
  {
    id: "INS-006",
    title: "Short-route e-bike advantage",
    description:
      "E-bike is preferred for Ikoyi/VI short routes to reduce fuel exposure and improve margin.",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  },
];
