import { PartnerProduct } from "@/types";

export default function ProductCard({ product }: { product: PartnerProduct }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-700">
            {product.originType}
          </p>
          <h3 className="mt-1 text-xl font-black text-slate-950">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {product.category} • {product.unit}
          </p>
        </div>
        <p className="rounded-full bg-slate-950 px-3 py-1 text-sm font-black text-lime-300">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
      <button className="mt-5 w-full rounded-full bg-lime-300 px-4 py-3 text-sm font-black text-slate-950 hover:bg-lime-200">
        Add to produce request
      </button>
    </div>
  );
}
