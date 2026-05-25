"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, Copy, Headphones, MapPin, ShieldCheck, Star } from "lucide-react";
import { getOrderById, updateOrderStatus } from "@/lib/storage";
import { Order, OrderStatus } from "@/types";
import StatusBadge from "@/components/StatusBadge";

const statuses: OrderStatus[] = [
  "Request received",
  "Runner assigned",
  "Pickup in progress",
  "Out for delivery",
  "Delivered",
];

export default function TrackPage() {
  const params = useParams();
  const orderId = String(params.orderId);
  const [order, setOrder] = useState<Order | undefined>();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const found = getOrderById(orderId);
    setOrder(found);
    if (found) {
      const current = statuses.indexOf(found.status);
      setStep(current >= 0 ? current : 1);
    }
  }, [orderId]);

  useEffect(() => {
    if (!order) return;

    const timer = setInterval(() => {
      setStep((current) => {
        const next = Math.min(current + 1, statuses.length - 1);
        const nextStatus = statuses[next];
        updateOrderStatus(order.id, nextStatus);
        setOrder({ ...order, status: nextStatus });
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [order]);

  if (!order) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-10">
        <h1 className="text-4xl font-black text-slate-950">Order not found.</h1>
        <p className="mt-3 text-slate-600">Try the demo tracking link instead.</p>
        <Link href="/track/demo" className="mt-5 inline-flex rounded-2xl bg-slate-950 px-5 py-3 font-black text-white">
          Open demo tracking
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <p className="eyebrow">Live tracking</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        Track your Runners Errands request.
      </h1>
      <p className="mt-4 text-slate-600">
        Every Runners Errands delivery is trackable, verified and completed with proof-of-delivery.
      </p>

      <section className="mt-8 rounded-[32px] bg-slate-950 p-6 text-white shadow-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">
              {order.id}
            </p>
            <h2 className="mt-2 text-3xl font-black">{order.category}</h2>
            <p className="mt-3 max-w-2xl text-slate-300">{order.details}</p>
          </div>
          <StatusBadge status={statuses[step]} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <InfoCard label="ETA range" value={order.etaRange} icon={Clock} />
          <InfoCard label="Rider" value={order.riderName} icon={ShieldCheck} />
          <InfoCard label="Vehicle" value={order.vehicleType} icon={MapPin} />
          <InfoCard label="OTP" value={order.otp} icon={CheckCircle2} />
        </div>
      </section>

      <section className="mt-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-black text-slate-950">Status progress</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {statuses.map((status, index) => (
            <div
              key={status}
              className={
                index <= step
                  ? "rounded-2xl bg-lime-50 p-4 ring-1 ring-lime-200"
                  : "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
              }
            >
              <p className={index <= step ? "font-black text-lime-800" : "font-black text-slate-400"}>
                {status}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-black text-slate-800">Pickup</p>
            <p className="mt-1 text-slate-600">{order.pickupAddress}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-black text-slate-800">Drop-off</p>
            <p className="mt-1 text-slate-600">{order.dropoffAddress}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white">
            <Copy size={18} /> Share tracking link
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 font-black text-slate-950">
            <Headphones size={18} /> Contact support
          </button>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Star;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <Icon className="text-lime-300" size={22} />
      <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xl font-black text-white">{value}</p>
    </div>
  );
}
