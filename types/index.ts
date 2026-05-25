export type ServiceCategory =
  | "Food"
  | "Groceries"
  | "Pharmacy"
  | "Parcel"
  | "Premium Produce"
  | "Special Request"
  | "Corporate";

export type OrderStatus =
  | "Request received"
  | "Runner assigned"
  | "Pickup in progress"
  | "Out for delivery"
  | "Delivered";

export type PaymentMethod =
  | "Pay on delivery"
  | "Bank transfer"
  | "Corporate account";

export type VehicleType = "E-bike" | "Bike" | "Car";

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  category: ServiceCategory;
  pickupAddress: string;
  dropoffAddress: string;
  details: string;
  status: OrderStatus;
  etaRange: string;
  riderId: string;
  riderName: string;
  riderRating: number;
  vehicleType: VehicleType;
  paymentMethod: PaymentMethod;
  createdAt: string;
  otp: string;
  notes?: string;
  preferredTime: "Now" | "Schedule later";
  demoPrice: number;
}

export interface Rider {
  id: string;
  name: string;
  vehicleType: VehicleType;
  rating: number;
  completedTrips: number;
  status: "Online" | "Offline" | "Busy";
  performanceScore: number;
  zone: string;
}

export interface WaitlistSignup {
  id: string;
  name: string;
  contact: string;
  area: string;
  useCase: string;
  frequency: string;
  createdAt: string;
}

export interface PartnerProduct {
  id: string;
  name: string;
  category: string;
  unit: string;
  price: number;
  originType: string;
  available: boolean;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
