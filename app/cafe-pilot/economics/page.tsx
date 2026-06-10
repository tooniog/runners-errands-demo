import Link from "next/link";
import CafeFinancialSimulator from "../../../components/cafe/CafeFinancialSimulator";

export default function CafeEconomicsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-6 text-black md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/cafe-pilot" className="font-black text-green-700">← Cafe Pilot</Link>
          <Link href="/cafe-pilot/demo" className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
            Run demo
          </Link>
        </div>

        <section className="mb-6 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Pilot economics</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Cafe Pilot Economics</h1>
          <p className="mt-4 max-w-4xl text-white/70">
            Estimate the value of Runnerbot 2 Cafe OS for the cafe and for Runners Errands.
          </p>
        </section>

        <CafeFinancialSimulator />
      </div>
    </main>
  );
}
