import { Order } from "@/types";
import StatusBadge from "./StatusBadge";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            {order.id}
          </p>
          <h3 className="mt-1 text-xl font-black text-slate-950">
            {order.category}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{order.details}</p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="font-black text-slate-700">Pickup</p>
          <p className="mt-1 text-slate-600">{order.pickupAddress}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="font-black text-slate-700">Drop-off</p>
          <p className="mt-1 text-slate-600">{order.dropoffAddress}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
        <span className="rounded-full bg-lime-50 px-3 py-1">ETA {order.etaRange}</span>
        <span className="rounded-full bg-blue-50 px-3 py-1">{order.riderName}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{order.vehicleType}</span>
      </div>
    </div>
  );
}
