
import Link from "next/link";

const thesis = [
  ["One mall unlocks many merchants", "Mall approval compresses sales. Instead of chasing scattered merchants, Runners starts with a dense retail hub."],
  ["Delivery density improves economics", "E-bikes work best when pickups are clustered and routes are predictable."],
  ["Mall approval supports fleet funding", "A defined hub, tenant set and order target makes e-bike funding more rational."],
  ["Lunch Preorder OS creates habit", "Lunch windows, same-time-tomorrow and office batch ordering create repeat behaviour."],
  ["Bites AI increases conversion", "Food choice support reduces decision fatigue and pushes customers toward ready, available and value-matched meals."],
  ["Runnerbot 2 handles fulfilment intelligence", "Approval queues, ETA logic, fee calculation, rider assignment and reporting become the operating layer."],
];

const revenue = [
  "Customer-paid delivery fees",
  "Multi-store concierge fees",
  "Priority order fees",
  "Large/special handling fees",
  "Later tenant featured placements",
  "Later mall analytics / premium upgrades",
  "Fleet utilisation data for e-bike funding",
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Investor view</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Runners Mall OS is the entry point for Lagos fulfilment density.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          The platform starts with a mall-wide AI concierge, lunch preorder, multi-store errand and e-bike delivery pilot,
          then scales across Lagos malls and retail clusters.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Open Mall OS</Link>
          <Link href="/mall-os/simulation" className="rounded-full bg-white px-6 py-4 font-black text-black">Simulation</Link>
          <Link href="/pilot-crm" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Pilot CRM</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2">
        {thesis.map(([title, copy]) => (
          <div key={title} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 text-zinc-700">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <h2 className="text-3xl font-black">Revenue layers</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {revenue.map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/80">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Pilot target</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          Proposed first pilot: The Palms, Lekki. 14–30 days, 2–3 e-bikes, 7–10 tenants, one approved handoff point,
          QR/web ordering, 30–50 orders/day target, 20% multi-store target and daily reporting.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/mall-os/palms" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">The Palms pilot page</Link>
          <Link href="/mall-os/proposal" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">Proposal</Link>
        </div>
      </section>
    </main>
  );
}
