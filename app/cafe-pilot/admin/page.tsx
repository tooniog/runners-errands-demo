import Link from "next/link";
import CafeAdminDashboard from "../../../components/cafe/CafeAdminDashboard";

export default function CafeAdminPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-6 text-black md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/cafe-pilot" className="font-black text-green-700">← Cafe Pilot</Link>
          <div className="flex gap-2">
            <Link href="/cafe-pilot/order" className="rounded-full border bg-white px-4 py-2 text-sm font-black">
              New order
            </Link>
            <Link href="/cafe-pilot/demo" className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
              Demo flow
            </Link>
          </div>
        </div>

        <section className="mb-6 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Runnerbot 2 Cafe OS</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Cafe Operations Command Centre</h1>
          <p className="mt-4 max-w-4xl text-white/70">
            Human approval, order clarity, delivery coordination and daily intelligence.
          </p>
        </section>

        <CafeAdminDashboard />
      </div>
    </main>
  );
}
