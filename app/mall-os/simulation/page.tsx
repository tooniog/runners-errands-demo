
"use client";

import { useMemo, useState } from "react";

function n(x){return `₦${Math.round(x).toLocaleString()}`}

export default function SimulationPage() {
  const [v, setV] = useState({
    ordersDay: 50,
    deliveryFee: 2500,
    deliveryCost: 1200,
    multiStorePct: 30,
    conciergeFee: 1000,
    priorityPct: 20,
    priorityFee: 1000,
    largePct: 10,
    specialFee: 2000,
    days: 30,
    bikeCapacity: 22,
    fundingNeed: 3500000,
  });

  const o = useMemo(() => {
    const monthlyOrders = v.ordersDay * v.days;
    const deliveryRevenue = monthlyOrders * v.deliveryFee;
    const deliveryCost = monthlyOrders * v.deliveryCost;
    const deliveryGrossProfit = deliveryRevenue - deliveryCost;
    const conciergeRevenue = monthlyOrders * (v.multiStorePct/100) * v.conciergeFee;
    const priorityRevenue = monthlyOrders * (v.priorityPct/100) * v.priorityFee;
    const specialRevenue = monthlyOrders * (v.largePct/100) * v.specialFee;
    const totalProfit = deliveryGrossProfit + conciergeRevenue + priorityRevenue + specialRevenue;
    const totalRevenue = deliveryRevenue + conciergeRevenue + priorityRevenue + specialRevenue;
    const margin = totalRevenue ? totalProfit / totalRevenue : 0;
    const bikes = Math.ceil(v.ordersDay / v.bikeCapacity);
    const utilisation = Math.round((v.ordersDay / (bikes * v.bikeCapacity)) * 100);
    const breakEven = Math.ceil(v.fundingNeed / (totalProfit / monthlyOrders || 1));
    const payback = v.fundingNeed / totalProfit;
    return { monthlyOrders, deliveryRevenue, deliveryCost, deliveryGrossProfit, conciergeRevenue, priorityRevenue, specialRevenue, totalProfit, margin, bikes, utilisation, breakEven, payback };
  }, [v]);

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Mall OS simulation</p>
        <h1 className="mt-4 text-4xl font-black md:text-7xl">Pitch economics, fleet capacity and payback model.</h1>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {Object.entries(v).map(([k,val]) => (
          <label key={k} className="grid gap-2 rounded-2xl bg-white p-4 text-sm font-bold shadow-sm">
            {k}
            <input type="number" value={val} onChange={(e) => setV({...v, [k]: Number(e.target.value)})} className="rounded-xl border px-3 py-2" />
          </label>
        ))}
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {[
          ["Monthly orders", o.monthlyOrders.toLocaleString()],
          ["Delivery revenue", n(o.deliveryRevenue)],
          ["Delivery cost", n(o.deliveryCost)],
          ["Delivery gross profit", n(o.deliveryGrossProfit)],
          ["Concierge revenue", n(o.conciergeRevenue)],
          ["Priority revenue", n(o.priorityRevenue)],
          ["Large/special revenue", n(o.specialRevenue)],
          ["Total gross profit", n(o.totalProfit)],
          ["Gross margin", `${Math.round(o.margin*100)}%`],
          ["Required e-bikes", `${o.bikes}`],
          ["Utilisation rate", `${o.utilisation}%`],
          ["Break-even order volume", `${o.breakEven} orders`],
          ["Funding need", n(v.fundingNeed)],
          ["Payback period", `${o.payback.toFixed(1)} months`],
        ].map(([label,value]) => (
          <div key={label} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
