import Link from "next/link";
import CafeOrderForm from "../../../components/cafe/CafeOrderForm";
import DeliveryFeeCalculator from "../../../components/cafe/DeliveryFeeCalculator";

export default function CafeOrderPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-6 text-black md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/cafe-pilot" className="font-black text-green-700">← Cafe Pilot</Link>
          <Link href="/cafe-pilot/admin" className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
            View admin
          </Link>
        </div>

        <section className="mb-6 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Cafe request flow</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Place a Cafe Request</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            For dine-in, collection, delivery and special requests.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <CafeOrderForm />
          <DeliveryFeeCalculator />
        </div>
      </div>
    </main>
  );
}
