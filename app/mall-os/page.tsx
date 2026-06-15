
import Link from "next/link";

const customerActions = [
  "Ask Runnerbot 2 what to eat or buy",
  "Use Bites AI to choose lunch",
  "Preorder food before the rush",
  "Combine items from multiple stores",
  "Reserve collection windows",
  "Request delivery by e-bike",
];

const mallGets = [
  "Digital service layer without upfront software cost during pilot",
  "More tenant engagement",
  "More off-site sales",
  "Daily and weekly demand reports",
  "Modern AI + e-bike innovation positioning",
  "Controlled pickup/handoff process",
];

const tenantsGet = [
  "More completed orders",
  "Tenant approval before fulfilment",
  "Availability and price confirmation",
  "Ready-time control",
  "Off-site sales without building delivery ops",
  "Visibility inside mall-wide digital demand",
];

export default function MallOSPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Runners Mall OS</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          A mall-wide AI concierge, preorder, multi-store errand and e-bike delivery operating layer.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          Malls are the wedge because one approval can unlock many stores, categories, lunch habits and dense delivery routes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os/palms" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">The Palms proposed pilot</Link>
          <Link href="/mall-os/order" className="rounded-full bg-white px-6 py-4 font-black text-black">Create mall order</Link>
          <Link href="/mall-os/simulation" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Run economics</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">What customers can do</h2>
          <div className="mt-4 grid gap-3">
            {customerActions.map((x) => <div key={x} className="rounded-2xl bg-lime-50 p-4 font-bold">{x}</div>)}
          </div>
        </div>
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">What the mall gets</h2>
          <div className="mt-4 grid gap-3">
            {mallGets.map((x) => <div key={x} className="rounded-2xl bg-zinc-50 p-4 font-bold">{x}</div>)}
          </div>
        </div>
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">What tenants get</h2>
          <div className="mt-4 grid gap-3">
            {tenantsGet.map((x) => <div key={x} className="rounded-2xl bg-zinc-50 p-4 font-bold">{x}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <h2 className="text-3xl font-black">How Runners earns during the pilot</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {["Customer-paid delivery fees", "Multi-store concierge fees", "Priority fees", "Large/special handling fees", "Later tenant/mall premium upgrades"].map((x) => (
            <div key={x} className="rounded-2xl bg-white/10 p-4 font-bold text-white/80">{x}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
