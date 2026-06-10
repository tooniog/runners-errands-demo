"use client";

import { useEffect, useMemo, useState } from "react";
import { CAFE_STORAGE_KEY, mockCafeOrders, mockCafeRiders } from "../../lib/cafeData";
import { formatNaira } from "../../lib/cafeRunnerbot";
import type { CafeOrder } from "../../types/cafe";

const steps = [
  "Customer submits order",
  "Cafe approves",
  "Runner assigned",
  "Out for delivery",
  "Delivered with OTP",
  "Runnerbot generates report",
];

function loadOrder(): CafeOrder {
  if (typeof window === "undefined") return mockCafeOrders[0];

  try {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("orderId");
    const orders = JSON.parse(localStorage.getItem(CAFE_STORAGE_KEY) || "[]") as CafeOrder[];
    return orders.find((o) => o.id === orderId) || orders[0] || mockCafeOrders[0];
  } catch {
    return mockCafeOrders[0];
  }
}

export default function CafeDemoFlow() {
  const [step, setStep] = useState(0);
  const [order, setOrder] = useState<CafeOrder>(mockCafeOrders[0]);

  useEffect(() => {
    setOrder(loadOrder());
  }, []);

  const rider = useMemo(
    () => mockCafeRiders.find((r) => r.id === order.assignedRiderId) || mockCafeRiders[0],
    [order.assignedRiderId]
  );

  const visualStatus = [
    "Awaiting cafe approval",
    "Approved by cafe staff",
    "Runner assigned",
    "Out for delivery",
    "Delivered with OTP",
    "Daily report generated",
  ][step];

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">
          Live demo control
        </p>
        <h2 className="mt-2 text-3xl font-black md:text-5xl">
          Cafe order lifecycle
        </h2>
        <p className="mt-3 max-w-3xl text-white/70">
          This is the screen to use during a cafe owner meeting. Walk from request intake to staff approval,
          rider assignment, customer update, proof-of-delivery and daily reporting.
        </p>

        <div className="mt-6 grid gap-2 md:grid-cols-3">
          {steps.map((label, index) => (
            <button
              key={label}
              onClick={() => setStep(index)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-black ${
                step === index
                  ? "bg-lime-300 text-black"
                  : "bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              Step {index + 1}: {label}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-xl md:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
            Active cafe order
          </p>
          <h3 className="mt-2 text-2xl font-black text-black">{order.id}</h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              ["Customer", order.customerName],
              ["Phone", order.phone],
              ["Customer type", order.customerType],
              ["Order type", order.orderType],
              ["Area", order.area],
              ["Payment", order.paymentStatus],
              ["Current status", visualStatus],
              ["ETA", order.etaRange],
              ["Delivery fee", formatNaira(order.deliveryFee)],
              ["Runnerbot fee", formatNaira(order.serviceFee)],
              ["OTP", step >= 4 ? order.otp : "Hidden until delivery"],
              ["Rider", step >= 2 ? `${rider.name} • ${rider.vehicleType}` : "Not assigned yet"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
                <p className="mt-1 font-black text-black">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl bg-lime-50 p-4 text-green-900">
            <p className="font-black">Request details</p>
            <p className="mt-1 text-sm">{order.requestDetails}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-xl md:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
            Demo narrative
          </p>
          <h3 className="mt-2 text-2xl font-black text-black">{steps[step]}</h3>

          <div className="mt-5 space-y-4 text-sm text-zinc-700">
            {step === 0 && (
              <p>
                A member or non-member submits a clean request. Runnerbot 2 captures customer type,
                order details, payment method, area and preferred time.
              </p>
            )}
            {step === 1 && (
              <p>
                Cafe staff approve menu availability, price, preparation time, payment status and whether
                delivery or collection is allowed.
              </p>
            )}
            {step === 2 && (
              <p>
                Runnerbot 2 suggests a rider based on route, order size and vehicle type. Short Ikoyi/VI
                routes prefer e-bike; large orders prefer motorcycle or car.
              </p>
            )}
            {step === 3 && (
              <p>
                Customer gets ETA updates instead of calling repeatedly. Non-member delivery never requires
                unauthorised club access.
              </p>
            )}
            {step === 4 && (
              <p>
                Delivery is completed with OTP/proof. Payment is marked settled after confirmation or cash
                reconciliation.
              </p>
            )}
            {step === 5 && (
              <p>
                Runnerbot 2 generates the daily report: orders, revenue, delivery margin, repeat customers,
                delays, high-demand areas and recommended next actions.
              </p>
            )}
          </div>

          <div className="mt-6 rounded-3xl bg-black p-5 text-white">
            <p className="text-sm text-white/60">Cafe owner close</p>
            <p className="mt-2 text-xl font-black text-lime-300">
              “We can pilot this for 14 days without disrupting your current operations.”
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-lime-200 bg-lime-50 p-5 md:p-6">
        <h3 className="text-2xl font-black text-black">Daily report preview</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {[
            ["Orders", "18"],
            ["Estimated cafe sales", "₦144,000"],
            ["Runners fees", "₦7,200"],
            ["Delivery revenue", "₦45,000"],
            ["Delivery cost", "₦21,600"],
            ["Top area", "Ikoyi / VI"],
            ["Risk", "Payment confirmation delays"],
            ["Recommendation", "Corporate lunch preorders by 10am"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
              <p className="mt-1 font-black text-black">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
