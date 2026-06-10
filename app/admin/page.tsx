"use client";

import { useEffect, useMemo, useState } from "react";
import MetricCard from "@/components/MetricCard";
import StatusBadge from "@/components/StatusBadge";
import { getOrders, getWaitlist, updateOrderStatus } from "@/lib/storage";
import { generateOpsInsights } from "@/lib/runnerbot";
import { Order, OrderStatus } from "@/types";

const statuses: OrderStatus[] = [
  "Request received",
  "Runner assigned",
  "Pickup in progress",
  "Out for delivery",
  "Delivered",
];

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const waitlist = typeof window !== "undefined" ? getWaitlist() : [];

  const active = orders.filter((order) => order.status !== "Delivered");
  const completed = orders.filter((order) => order.status === "Delivered");
  const revenue = orders.reduce((sum, order) => sum + order.demoPrice, 0);

  const categoryBreakdown = useMemo(() => {
    return orders.reduce<Record<string, number>>((acc, order) => {
      acc[order.category] = (acc[order.category] || 0) + 1;
      return acc;
    }, {});
  }, [orders]);

  function changeStatus(orderId: string, status: OrderStatus) {
    const updated = updateOrderStatus(orderId, status);
    setOrders(updated);
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <p className="eyebrow">Admin dashboard</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        Runners Errands operations command centre.
      </h1>
      <p className="mt-4 text-slate-600">
        Investor-ready view of orders, queue, waitlist, ETA, rider utilisation and Runnerbot 2 insights.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <MetricCard label="Total demo orders" value={String(orders.length)} />
        <MetricCard label="Active orders" value={String(active.length)} />
        <MetricCard label="Completed" value={String(completed.length)} />
        <MetricCard label="Waitlist signups" value={String(waitlist.length + 5000)} />
        <MetricCard label="Average ETA" value="35–50 mins" />
        <MetricCard label="On-time rate" value="94%" />
        <MetricCard label="Rider utilisation" value="78%" />
        <MetricCard label="Revenue simulation" value={`₦${revenue.toLocaleString()}`} />
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Order table</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b text-slate-500">
                  <th className="py-3">Order ID</th>
                  <th>Category</th>
                  <th>Route</th>
                  <th>Rider</th>
                  <th>Status</th>
                  <th>ETA</th>
                  <th>Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-4 font-black">{order.id}</td>
                    <td>{order.category}</td>
                    <td>{order.pickupAddress} → {order.dropoffAddress}</td>
                    <td>{order.riderName}</td>
                    <td><StatusBadge status={order.status} /></td>
                    <td>{order.etaRange}</td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      <select
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                        value={order.status}
                        onChange={(e) => changeStatus(order.id, e.target.value as OrderStatus)}
                      >
                        {statuses.map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[32px] bg-slate-950 p-5 text-white shadow-xl">
          <h2 className="text-2xl font-black">Runnerbot 2 insights</h2>
          <div className="mt-5 grid gap-3">
            {generateOpsInsights(orders).map((insight) => (
              <div key={insight} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-slate-200">
                {insight}
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-black">Service breakdown</h3>
          <div className="mt-3 grid gap-2">
            {Object.entries(categoryBreakdown).map(([category, count]) => (
              <div key={category} className="flex justify-between rounded-xl bg-white/10 px-3 py-2 text-sm">
                <span>{category}</span>
                <strong>{count}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    
<section className="mx-auto my-8 max-w-6xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm">
  <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">B2B engines</p>
  <h2 className="mt-2 text-3xl font-black text-black">Runnerbot 2 operating layer</h2>
  <div className="mt-5 grid gap-3 md:grid-cols-4">
    {["Today’s orders", "Today’s preorders", "Active B2B pilots", "Pipeline value", "Delivery margin today", "SaaS MRR estimate", "Orders awaiting approval", "Top target category"].map((item) => (
      <div key={item} className="rounded-2xl bg-white p-4 font-black shadow-sm">{item}</div>
    ))}
  </div>
  <div className="mt-5 flex flex-wrap gap-3">
    <a href="/cafe-pilot/admin" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Cafe Admin</a>
    <a href="/pilot-crm" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">Pilot CRM</a>
    <a href="/preorder" className="rounded-full border border-green-600 px-5 py-3 font-black text-green-700">Preorders</a>
  </div>
</section>
\n</main>
  );
}
