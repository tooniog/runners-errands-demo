export type CafeCustomerType =
  | "Ikoyi Club Member"
  | "Non-member"
  | "Staff / Office order";

export type CafeOrderType = "Dine-in" | "Collection" | "Delivery";

export type CafeArea =
  | "Ikoyi Club pickup point"
  | "Ikoyi"
  | "Victoria Island"
  | "Lekki Phase 1"
  | "Banana Island"
  | "Parkview"
  | "Osborne"
  | "Other";

export type CafePaymentMethod =
  | "Bank transfer"
  | "Pay on delivery"
  | "Member account"
  | "Cash on pickup";

export type CafePaymentStatus =
  | "Pending confirmation"
  | "Requires staff approval"
  | "Pay on delivery"
  | "Cash on pickup"
  | "Paid / confirmed"
  | "Refund required"
  | "Not required";

export type CafeFulfilmentStatus =
  | "Awaiting cafe approval"
  | "Approved"
  | "In preparation"
  | "Ready for pickup"
  | "Rider assigned"
  | "Out for delivery"
  | "Delivered"
  | "Cancelled / refund";

export interface CafeOrder {
  id: string;
  customerName: string;
  phone: string;
  customerType: CafeCustomerType;
  orderType: CafeOrderType;
  area: CafeArea;
  requestDetails: string;
  preferredTime: "ASAP" | "Schedule later";
  paymentMethod: CafePaymentMethod;
  paymentStatus: CafePaymentStatus;
  fulfilmentStatus: CafeFulfilmentStatus;
  assignedRiderId?: string;
  etaRange: string;
  deliveryFee: number;
  serviceFee: number;
  otp: string;
  createdAt: string;
  notes?: string;
}

export interface CafeRider {
  id: string;
  name: string;
  vehicleType: "E-bike" | "Motorcycle" | "Car";
  status: "Available" | "Busy" | "Offline";
  currentArea: CafeArea;
  rating: number;
  completedDeliveries: number;
}

export interface CafeInsight {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  createdAt: string;
}

export interface CafeEconomicsInput {
  ordersPerDay: number;
  averageBasket: number;
  deliveryFee: number;
  serviceFee: number;
  deliveryCost: number;
  monthlySaasFee: number;
  daysPerMonth: number;
}

export interface CafeEconomicsOutput {
  monthlyOrders: number;
  cafeGrossSales: number;
  cafeRetainedRevenue: number;
  runnersServiceRevenue: number;
  runnersDeliveryRevenue: number;
  deliveryCostTotal: number;
  runnersGrossProfit: number;
  grossMargin: number;
  breakEvenOrderVolume: number;
}
