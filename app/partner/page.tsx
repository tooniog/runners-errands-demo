import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { partnerProducts } from "@/lib/mockData";

export default function PartnerPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <p className="eyebrow">Founding Vendor + Electric Fleet Partner</p>
      <h1 className="mt-3 max-w-5xl text-5xl font-black tracking-tight text-slate-950">
        Premium imported fruits, vegetables and electric bike delivery for VI, Ikoyi and Lekki.
      </h1>
      <p className="mt-5 max-w-3xl text-slate-600 leading-8">
        Runners Errands can onboard premium imported fruits and vegetables as a launch category.
        The partner has existing supply in VI/Ikoyi/Lekki and electric bikes that reduce fuel dependence,
        operating cost and delivery volatility.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <h3 className="text-2xl font-black">Sustainability advantage</h3>
          <p className="mt-3 text-slate-300">Electric fleet ready for cleaner, lower-cost deliveries.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Margin story</h3>
          <p className="mt-3 text-slate-600">Premium produce supports higher basket sizes and better delivery economics.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Reliability wedge</h3>
          <p className="mt-3 text-slate-600">Dense Island routes give the demo a credible first operating zone.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Demo catalogue</p>
            <h2 className="text-4xl font-black text-slate-950">Premium produce marketplace preview.</h2>
          </div>
          <Link href="/book" className="rounded-2xl bg-lime-300 px-5 py-3 font-black text-slate-950">
            Create produce request
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {partnerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
