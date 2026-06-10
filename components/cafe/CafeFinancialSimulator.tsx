"use client";

import { useMemo, useState } from "react";
import {
  calculateCafeEconomics,
  formatNaira,
} from "../../lib/cafeRunnerbot";
import type { CafeEconomicsInput } from "../../types/cafe";

export default function CafeFinancialSimulator() {
  const [inputs, setInputs] = useState<CafeEconomicsInput>({
    ordersPerDay: 20,
    averageBasket: 8000,
    deliveryFee: 2500,
    serviceFee: 400,
    deliveryCost: 1200,
    monthlySaasFee: 200000,
    daysPerMonth: 30,
  });

  const output = useMemo(() => calculateCafeEconomics(inputs), [inputs]);

  function update(key: keyof CafeEconomicsInput, value: number) {
    setInputs((current) => ({ ...current, [key]: Number.isFinite(value) ? value : 0 }));
  }

  const inputFields: [keyof CafeEconomicsInput, string][] = [
    ["ordersPerDay", "Orders per day"],
    ["averageBasket", "Average basket value"],
    ["deliveryFee", "Average delivery fee"],
    ["serviceFee", "Runnerbot service fee/order"],
    ["deliveryCost", "Delivery cost"],
    ["monthlySaasFee", "Monthly SaaS / pilot fee"],
    ["daysPerMonth", "Days per month"],
  ];

  const outputCards = [
    ["Monthly order volume", output.monthlyOrders.toLocaleString()],
    ["Cafe gross sales", formatNaira(output.cafeGrossSales)],
    ["Cafe retained revenue", formatNaira(output.cafeRetainedRevenue)],
    ["Runners service fee revenue", formatNaira(output.runnersServiceRevenue)],
    ["Runners delivery revenue", formatNaira(output.runnersDeliveryRevenue)],
    ["Delivery cost", formatNaira(output.deliveryCostTotal)],
    ["Runners gross profit", formatNaira(output.runnersGrossProfit)],
    ["Estimated gross margin", `${Math.round(output.grossMargin * 100)}%`],
    ["Break-even order volume", `${output.breakEvenOrderVolume} orders/month`],
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-xl md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {inputFields.map(([key, label]) => (
            <label key={key} className="grid gap-2 text-sm font-bold text-zinc-700">
              {label}
              <input
                type="number"
                value={inputs[key]}
                onChange={(e) => update(key, Number(e.target.value))}
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
              />
            </label>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {outputCards.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-black text-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">
          Strong base case
        </p>
        <h2 className="mt-2 text-3xl font-black">20 orders/day pilot scenario</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            "600 monthly orders",
            "₦4,800,000 cafe gross sales at ₦8,000 average basket",
            "₦240,000 Runnerbot service fee revenue",
            "₦1,500,000 delivery revenue",
            "₦720,000 delivery cost",
            "₦1,220,000 estimated Runners gross profit including ₦200,000 SaaS/pilot fee",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/85">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-lime-200 bg-lime-50 p-6 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">
          Pricing recommendation
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-black text-black">14-day pilot</h3>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li>Setup: <strong>₦150,000</strong></li>
              <li>Pilot management: <strong>₦100,000 for 14 days</strong></li>
              <li>Per-order Runnerbot fee: <strong>₦300–₦500</strong></li>
              <li>Delivery fee paid by customer</li>
              <li>Cafe keeps food/product revenue</li>
              <li>Runners earns software/service fee + delivery margin</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-black text-black">Monthly plan after pilot</h3>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li>Starter: <strong>₦200,000/month + ₦300/order</strong></li>
              <li>Growth: <strong>₦350,000/month + ₦250/order</strong></li>
              <li>Managed Ops: <strong>₦500,000/month + delivery margin + priority support</strong></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
