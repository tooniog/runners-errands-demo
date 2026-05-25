"use client";

import { useEffect, useState } from "react";
import MetricCard from "@/components/MetricCard";
import OrderCard from "@/components/OrderCard";
import { riders } from "@/lib/mockData";
import { getOrders, updateOrderStatus } from "@/lib/storage";
import { Order } from "@/types";

export default function RiderPage() {
  const rider = riders[0];
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders().filter((order) => order.riderId === rider.id || order.id.includes("RE-LAG")));
  }, []);

  function markPickedUp(orderId: string) {
    setOrders(updateOrderStatus(orderId, "Pickup in progress"));
  }

  function markDelivered(orderId: string) {
    setOrders(updateOrderStatus(orderId, "Delivered"));
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <p className="eyebrow">Rider dashboard</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        Rider app mock interface.
      </h1>
      <p className="mt-4 text-slate-600">
        Accept jobs, view instructions, mark pickup, mark delivered and track performance.
      </p>

      <section className="mt-8 rounded-[32px] bg-slate-950 p-6 text-white">
        <p className="text-lime-300 font-black">Online</p>
        <h2 className="mt-2 text-3xl font-black">{rider.name}</h2>
        <p className="mt-2 text-slate-300">{rider.vehicleType} • Rating {rider.rating} • {rider.zone}</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-5">
        <MetricCard label="Earnings today" value="₦28,500" />
        <MetricCard label="Performance score" value={`${rider.performanceScore}%`} />
        <MetricCard label="On-time rate" value="96%" />
        <MetricCard label="Acceptance rate" value="91%" />
        <MetricCard label="Cash accuracy" value="100%" />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {orders.map((order) => (
          <div key={order.id}>
            <OrderCard order={order} />
            <div className="mt-3 flex gap-2">
              <button onClick={() => markPickedUp(order.id)} className="rounded-2xl bg-lime-300 px-4 py-3 font-black text-slate-950">
                Mark picked up
              </button>
              <button onClick={() => markDelivered(order.id)} className="rounded-2xl bg-slate-950 px-4 py-3 font-black text-white">
                Mark delivered
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
