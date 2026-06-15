
"use client";

import { useMemo, useState } from "react";

type Inputs = {
  ordersDay: number;
  daysMonth: number;
  deliveryFee: number;
  deliveryCost: number;
  multiStorePct: number;
  conciergeFee: number;
  priorityPct: number;
  priorityFee: number;
  specialPct: number;
  specialFee: number;
  bikes: number;
  fundingAmount: number;
};

type Scenario = {
  label: string;
  ordersDay: number;
};

const scenarios: Scenario[] = [
  { label: "Conservative", ordersDay: 25 },
  { label: "Base", ordersDay: 50 },
  { label: "Upside", ordersDay: 100 },
];

function ngn(value: number): string {
  return `₦${Math.round(value).toLocaleString()}`;
}

function pct(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export default function FundingSimulator() {
  const [inputs, setInputs] = useState<Inputs>({
    ordersDay: 50,
    daysMonth: 30,
    deliveryFee: 2500,
    deliveryCost: 1200,
    multiStorePct: 30,
    conciergeFee: 1000,
    priorityPct: 20,
    priorityFee: 1000,
    specialPct: 10,
    specialFee: 2000,
    bikes: 4,
    fundingAmount: 18000000,
  });

  function update(key: keyof Inputs, value: number) {
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function calc(ordersDay: number) {
    const monthlyOrders = ordersDay * inputs.daysMonth;
    const deliveryRevenue = monthlyOrders * inputs.deliveryFee;
    const deliveryCost = monthlyOrders * inputs.deliveryCost;
    const deliveryGrossProfit = deliveryRevenue - deliveryCost;
    const conciergeRevenue = monthlyOrders * (inputs.multiStorePct / 100) * inputs.conciergeFee;
    const priorityRevenue = monthlyOrders * (inputs.priorityPct / 100) * inputs.priorityFee;
    const specialRevenue = monthlyOrders * (inputs.specialPct / 100) * inputs.specialFee;
    const totalGrossProfit = deliveryGrossProfit + conciergeRevenue + priorityRevenue + specialRevenue;
    const totalGrossRevenue = deliveryRevenue + conciergeRevenue + priorityRevenue + specialRevenue;
    const grossMargin = totalGrossRevenue > 0 ? totalGrossProfit / totalGrossRevenue : 0;
    const contributionPerOrder = totalGrossProfit / Math.max(monthlyOrders, 1);
    const bikeUtilisationOrdersPerBikeDay = ordersDay / Math.max(inputs.bikes, 1);
    const breakEvenOrdersDayFor12MonthFundingRecovery = Math.ceil((inputs.fundingAmount / 12 / inputs.daysMonth) / Math.max(contributionPerOrder, 1));
    const paybackMonths = inputs.fundingAmount / Math.max(totalGrossProfit, 1);

    return {
      monthlyOrders,
      deliveryRevenue,
      deliveryCost,
      deliveryGrossProfit,
      conciergeRevenue,
      priorityRevenue,
      specialRevenue,
      totalGrossProfit,
      totalGrossRevenue,
      grossMargin,
      contributionPerOrder,
      bikeUtilisationOrdersPerBikeDay,
      breakEvenOrdersDayFor12MonthFundingRecovery,
      paybackMonths,
    };
  }

  const output = useMemo(() => calc(inputs.ordersDay), [inputs]);

  const inputRows: { label: string; key: keyof Inputs; suffix?: string }[] = [
    { label: "Orders/day", key: "ordersDay" },
    { label: "Days/month", key: "daysMonth" },
    { label: "Average delivery fee", key: "deliveryFee" },
    { label: "Delivery cost/order", key: "deliveryCost" },
    { label: "Multi-store order %", key: "multiStorePct", suffix: "%" },
    { label: "Multi-store concierge fee", key: "conciergeFee" },
    { label: "Priority order %", key: "priorityPct", suffix: "%" },
    { label: "Priority fee", key: "priorityFee" },
    { label: "Large/special order %", key: "specialPct", suffix: "%" },
    { label: "Special handling fee", key: "specialFee" },
    { label: "Bikes", key: "bikes" },
    { label: "Funding amount", key: "fundingAmount" },
  ];

  const outputs = [
    ["Monthly orders", output.monthlyOrders.toLocaleString()],
    ["Delivery revenue", ngn(output.deliveryRevenue)],
    ["Delivery cost", ngn(output.deliveryCost)],
    ["Delivery gross profit", ngn(output.deliveryGrossProfit)],
    ["Concierge revenue", ngn(output.conciergeRevenue)],
    ["Priority revenue", ngn(output.priorityRevenue)],
    ["Large/special revenue", ngn(output.specialRevenue)],
    ["Estimated monthly gross profit before overhead", ngn(output.totalGrossProfit)],
    ["Gross margin before central overhead", pct(output.grossMargin)],
    ["Contribution per order", ngn(output.contributionPerOrder)],
    ["Orders per bike/day", output.bikeUtilisationOrdersPerBikeDay.toFixed(1)],
    ["12-month funding recovery break-even", `${output.breakEvenOrdersDayFor12MonthFundingRecovery} orders/day`],
    ["Indicative payback before overhead", `${output.paybackMonths.toFixed(1)} months`],
  ];

  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl md:p-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Financial model / simulator</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Investor pilot economics</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Editable assumptions. Outputs are estimates before central overhead and should be validated during the pilot.
          </p>
        </div>
        <div className="rounded-2xl bg-black p-4 text-white">
          <p className="text-xs uppercase tracking-wide text-white/50">Base monthly gross profit</p>
          <p className="text-3xl font-black text-lime-300">{ngn(output.totalGrossProfit)}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {inputRows.map((row) => (
          <label key={row.key} className="grid gap-2 rounded-2xl bg-zinc-50 p-4 text-sm font-bold">
            {row.label}
            <input
              type="number"
              value={inputs[row.key]}
              onChange={(event) => update(row.key, Number(event.target.value))}
              className="rounded-xl border border-zinc-200 bg-white px-3 py-2 outline-none focus:border-green-600"
            />
          </label>
        ))}
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {outputs.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-zinc-200 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
            <p className="mt-2 text-xl font-black">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-black">Scenario ladder</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario) => {
            const s = calc(scenario.ordersDay);
            return (
              <div key={scenario.label} className="rounded-[1.5rem] bg-black p-5 text-white">
                <p className="text-sm font-black uppercase tracking-wide text-lime-300">{scenario.label}</p>
                <p className="mt-2 text-3xl font-black">{scenario.ordersDay} orders/day</p>
                <p className="mt-4 text-white/60">Monthly orders: {s.monthlyOrders.toLocaleString()}</p>
                <p className="mt-1 text-white/60">Monthly gross profit before overhead: {ngn(s.totalGrossProfit)}</p>
                <p className="mt-1 text-white/60">Indicative funding payback: {s.paybackMonths.toFixed(1)} months</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
