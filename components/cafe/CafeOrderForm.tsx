"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CAFE_STORAGE_KEY, cafeAreas } from "../../lib/cafeData";
import {
  assignCafeRider,
  calculateCafeDeliveryFee,
  generateCafeEta,
  generateCafeOrderId,
  generateCafePaymentStatus,
} from "../../lib/cafeRunnerbot";
import type {
  CafeArea,
  CafeCustomerType,
  CafeOrder,
  CafeOrderType,
  CafePaymentMethod,
} from "../../types/cafe";

const customerTypes: CafeCustomerType[] = [
  "Ikoyi Club Member",
  "Non-member",
  "Staff / Office order",
];

const orderTypes: CafeOrderType[] = ["Dine-in", "Collection", "Delivery"];

const paymentMethods: CafePaymentMethod[] = [
  "Bank transfer",
  "Pay on delivery",
  "Member account",
  "Cash on pickup",
];

function getOrders(): CafeOrder[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CAFE_STORAGE_KEY) || "[]") as CafeOrder[];
  } catch {
    return [];
  }
}

export default function CafeOrderForm() {
  const router = useRouter();
  const [success, setSuccess] = useState<CafeOrder | null>(null);
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    customerType: "Non-member" as CafeCustomerType,
    orderType: "Delivery" as CafeOrderType,
    area: "Ikoyi" as CafeArea,
    requestDetails: "",
    preferredTime: "ASAP" as "ASAP" | "Schedule later",
    paymentMethod: "Bank transfer" as CafePaymentMethod,
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    const largeOrder =
      form.requestDetails.toLowerCase().includes("tray") ||
      form.requestDetails.toLowerCase().includes("corporate") ||
      form.requestDetails.length > 140;

    const deliveryFee =
      form.orderType === "Delivery"
        ? calculateCafeDeliveryFee(form.area, false, largeOrder)
        : 0;

    const draft: Partial<CafeOrder> = {
      orderType: form.orderType,
      area: form.area,
      requestDetails: form.requestDetails,
      notes: form.notes,
    };

    const rider = assignCafeRider(draft);

    const order: CafeOrder = {
      id: generateCafeOrderId(),
      customerName: form.customerName.trim() || "Cafe Demo Customer",
      phone: form.phone.trim() || "+2348000000000",
      customerType: form.customerType,
      orderType: form.orderType,
      area: form.area,
      requestDetails: form.requestDetails.trim(),
      preferredTime: form.preferredTime,
      paymentMethod: form.paymentMethod,
      paymentStatus: generateCafePaymentStatus(form.paymentMethod),
      fulfilmentStatus: "Awaiting cafe approval",
      assignedRiderId: form.orderType === "Delivery" ? rider?.id : undefined,
      etaRange: generateCafeEta(form.area, form.orderType),
      deliveryFee,
      serviceFee: 400,
      otp: Math.floor(1000 + Math.random() * 9000).toString(),
      createdAt: new Date().toISOString(),
      notes: form.notes,
    };

    const orders = getOrders();
    localStorage.setItem(CAFE_STORAGE_KEY, JSON.stringify([order, ...orders]));
    setSuccess(order);

    setTimeout(() => {
      router.push(`/cafe-pilot/demo?orderId=${order.id}`);
    }, 900);
  }

  return (
    <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-xl md:p-8">
      {success && (
        <div className="mb-5 rounded-3xl border border-lime-200 bg-lime-50 p-4 text-green-900">
          <p className="font-black">Cafe request received. Awaiting staff approval.</p>
          <p className="mt-1 text-sm">
            {success.id} created. The cafe team will confirm availability, price, preparation time,
            payment confirmation and dispatch readiness.
          </p>
        </div>
      )}

      <form onSubmit={submit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Customer name
            <input
              required
              value={form.customerName}
              onChange={(e) => update("customerName", e.target.value)}
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
              placeholder="Customer name"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Phone number
            <input
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
              placeholder="+234..."
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Customer type
            <select
              value={form.customerType}
              onChange={(e) => update("customerType", e.target.value as CafeCustomerType)}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
            >
              {customerTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Order type
            <select
              value={form.orderType}
              onChange={(e) => update("orderType", e.target.value as CafeOrderType)}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
            >
              {orderTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Delivery / collection area
            <select
              value={form.area}
              onChange={(e) => update("area", e.target.value as CafeArea)}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
            >
              {cafeAreas.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold text-zinc-700">
          Menu / order request
          <textarea
            required
            value={form.requestDetails}
            onChange={(e) => update("requestDetails", e.target.value)}
            className="min-h-32 rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Example: Club sandwich, fresh juice, coffee + pastry bundle, premium strawberry box..."
          />
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Preferred time
            <select
              value={form.preferredTime}
              onChange={(e) => update("preferredTime", e.target.value as "ASAP" | "Schedule later")}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
            >
              <option>ASAP</option>
              <option>Schedule later</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Payment method
            <select
              value={form.paymentMethod}
              onChange={(e) => update("paymentMethod", e.target.value as CafePaymentMethod)}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
            >
              {paymentMethods.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-bold text-zinc-700">
            Notes / allergies / landmark
            <input
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
              placeholder="Allergies, landmark, special instructions..."
            />
          </label>
        </div>

        <div className="rounded-3xl bg-zinc-50 p-4 text-sm text-zinc-700">
          <strong className="text-black">Human-in-the-loop:</strong> Runnerbot 2 does not pretend
          to fully automate the cafe. Staff must approve availability, price, prep time, payment
          confirmation and final dispatch.
        </div>

        <button className="rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700">
          Submit cafe request
        </button>
      </form>
    </div>
  );
}
