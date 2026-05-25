"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addOrder } from "@/lib/storage";
import {
  assignBestRider,
  calculateDemoPrice,
  generateEtaRange,
  generateOrderId,
  generateOtp,
} from "@/lib/runnerbot";
import { Order, PaymentMethod, ServiceCategory } from "@/types";

const categories: ServiceCategory[] = [
  "Food",
  "Groceries",
  "Pharmacy",
  "Parcel",
  "Premium Produce",
  "Special Request",
];

const payments: PaymentMethod[] = [
  "Pay on delivery",
  "Bank transfer",
  "Corporate account",
];

export default function BookPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    pickupAddress: "",
    dropoffAddress: "",
    category: "Food" as ServiceCategory,
    details: "",
    preferredTime: "Now" as "Now" | "Schedule later",
    paymentMethod: "Pay on delivery" as PaymentMethod,
    notes: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();

    const rider = assignBestRider(form);

    const order: Order = {
      id: generateOrderId(),
      customerName: form.customerName || "Demo Customer",
      phone: form.phone || "08000000000",
      category: form.category,
      pickupAddress: form.pickupAddress || "Victoria Island",
      dropoffAddress: form.dropoffAddress || "Lekki Phase 1",
      details: form.details || "Demo errand request",
      status: "Runner assigned",
      etaRange: generateEtaRange(
        form.pickupAddress,
        form.dropoffAddress,
        form.category
      ),
      riderId: rider.id,
      riderName: rider.name,
      riderRating: rider.rating,
      vehicleType: rider.vehicleType,
      paymentMethod: form.paymentMethod,
      createdAt: new Date().toISOString(),
      otp: generateOtp(),
      notes: form.notes,
      preferredTime: form.preferredTime,
      demoPrice: calculateDemoPrice(
        form.category,
        form.pickupAddress,
        form.dropoffAddress
      ),
    };

    addOrder(order);
    router.push(`/track/${order.id}`);
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <p className="eyebrow">Book an Errand</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        Create a Lagos delivery request.
      </h1>
      <p className="mt-4 text-slate-600">
        Submit a real-looking request. Runnerbot 2 assigns a rider, generates an
        ETA range and creates tracking.
      </p>

      <form
        onSubmit={submit}
        className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="input"
            placeholder="Customer name"
            value={form.customerName}
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          />
          <input
            className="input"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            className="input"
            placeholder="Pickup address"
            value={form.pickupAddress}
            onChange={(e) => setForm({ ...form, pickupAddress: e.target.value })}
          />
          <input
            className="input"
            placeholder="Drop-off address"
            value={form.dropoffAddress}
            onChange={(e) => setForm({ ...form, dropoffAddress: e.target.value })}
          />

          <select
            className="input"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value as ServiceCategory })
            }
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <select
            className="input"
            value={form.preferredTime}
            onChange={(e) =>
              setForm({
                ...form,
                preferredTime: e.target.value as "Now" | "Schedule later",
              })
            }
          >
            <option>Now</option>
            <option>Schedule later</option>
          </select>

          <select
            className="input"
            value={form.paymentMethod}
            onChange={(e) =>
              setForm({ ...form, paymentMethod: e.target.value as PaymentMethod })
            }
          >
            {payments.map((payment) => (
              <option key={payment}>{payment}</option>
            ))}
          </select>

          <input
            className="input"
            placeholder="Notes / landmark"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        <textarea
          className="input mt-4 min-h-32"
          placeholder="Item/request details"
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
        />

        <button className="mt-5 rounded-2xl bg-lime-300 px-6 py-3 font-black text-slate-950 hover:bg-lime-200">
          Submit request
        </button>
      </form>
    </main>
  );
}
