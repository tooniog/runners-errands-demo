"use client";

import { demoOrders, demoWaitlist } from "@/lib/mockData";
import { Order, WaitlistSignup } from "@/types";

const ORDERS_KEY = "runners_errands_orders";
const WAITLIST_KEY = "runners_errands_waitlist";

function canUseStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getOrders(): Order[] {
  if (!canUseStorage()) return demoOrders;

  const raw = localStorage.getItem(ORDERS_KEY);

  if (!raw) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(demoOrders));
    return demoOrders;
  }

  return JSON.parse(raw);
}

export function saveOrders(orders: Order[]) {
  if (!canUseStorage()) return;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function addOrder(order: Order) {
  const updated = [order, ...getOrders()];
  saveOrders(updated);
  return order;
}

export function getOrderById(id: string): Order | undefined {
  if (id === "demo") return demoOrders[0];
  return getOrders().find((order) => order.id === id);
}

export function updateOrderStatus(id: string, status: Order["status"]) {
  const updated = getOrders().map((order) =>
    order.id === id ? { ...order, status } : order
  );

  saveOrders(updated);
  return updated;
}

export function getWaitlist(): WaitlistSignup[] {
  if (!canUseStorage()) return demoWaitlist;

  const raw = localStorage.getItem(WAITLIST_KEY);

  if (!raw) {
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(demoWaitlist));
    return demoWaitlist;
  }

  return JSON.parse(raw);
}

export function addWaitlistSignup(signup: WaitlistSignup) {
  const updated = [signup, ...getWaitlist()];

  if (canUseStorage()) {
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(updated));
  }

  return signup;
}
