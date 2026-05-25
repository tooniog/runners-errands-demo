import { OrderStatus } from "@/types";

const styles: Record<OrderStatus, string> = {
  "Request received": "bg-slate-100 text-slate-700 ring-slate-200",
  "Runner assigned": "bg-blue-50 text-blue-800 ring-blue-100",
  "Pickup in progress": "bg-amber-50 text-amber-800 ring-amber-100",
  "Out for delivery": "bg-lime-50 text-lime-800 ring-lime-100",
  Delivered: "bg-emerald-50 text-emerald-800 ring-emerald-100",
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ring-1 ${styles[status]}`}>
      {status}
    </span>
  );
}
