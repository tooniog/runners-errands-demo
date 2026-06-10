import Link from "next/link";
import MetricCard from "@/components/MetricCard";

const cards = [
  ["Problem", "Lagos commerce loses time, trust and money because errands, dispatch and last-mile delivery are fragmented."],
  ["Solution", "Runners Errands unifies food, groceries, pharmacy, parcels and premium produce in one AI-powered Lagos platform."],
  ["Why now", "Customers already expect delivery convenience, but Lagos still needs stronger trust, proof and localised operations."],
  ["Why Runners wins", "Runnerbot 2, proof-of-delivery, launch-zone focus, premium produce wedge and electric fleet advantage."],
  ["Business model", "Delivery fees, merchant commissions, corporate accounts, premium produce margin and subscription plans."],
  ["90-day traction plan", "Concierge MVP, 300–1,000 deliveries, 5,000 waitlist target, 60–80 riders and launch partner onboarding."],
];

export default function InvestorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <section className="rounded-[36px] bg-slate-950 p-7 text-white shadow-xl md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">Investor mode</p>
        <h1 className="mt-3 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
          Runners Errands can become the trusted logistics layer for daily Lagos life.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-300 leading-8">
          Tap. Track. Delivered. Food, groceries, pharmacy and parcels — all in one Lagos errands platform.
          Powered by Runnerbot 2.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/book" className="rounded-2xl bg-lime-300 px-6 py-3 font-black text-slate-950">
            Book demo order
          </Link>
          <Link href="/admin" className="rounded-2xl bg-white px-6 py-3 font-black text-slate-950">
            Open admin dashboard
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <MetricCard label="Year 1 orders" value="500,000" />
        <MetricCard label="Year 1 revenue" value="US$2.0M" />
        <MetricCard label="Year 2 orders" value="1.5M" />
        <MetricCard label="Year 2 revenue" value="US$7.5M" />
        <MetricCard label="Year 3 orders" value="3M" />
        <MetricCard label="Year 3 revenue" value="US$17M" />
        <MetricCard label="Break-even target" value="Q3 2027" />
        <MetricCard label="Seed ask" value="US$1.5M" />
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
        <p className="eyebrow">Runnerbot 2 advantage</p>
        <h2 className="text-4xl font-black tracking-tight text-slate-950">
          AI operations from day one.
        </h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-600">
          Runnerbot 2 supports rider assignment, ETA range generation, batching opportunities,
          customer support, order intelligence, category prioritisation and admin insights.
          Premium Produce and Pharmacy get higher trust priority. VI/Ikoyi/Lekki routes prefer e-bikes.
          Corporate orders require proof-of-delivery.
        </p>
      </section>

      <section className="mt-10 rounded-[32px] bg-slate-950 p-7 text-white">
        <h2 className="text-4xl font-black">Request investor pack</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Runners Errands is seeking strategic seed funding, operational partners, vendor relationships and Lagos pilot support.
        </p>
        <a href="mailto:runnersfuturum@gmail.com?subject=Runners Errands Investor Pack" className="mt-6 inline-flex rounded-2xl bg-lime-300 px-6 py-3 font-black text-slate-950">
          Request investor pack
        </a>
      </section>
    
<section className="my-10 rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
  <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">First B2B pilot module</p>
  <h2 className="mt-2 text-3xl font-black text-black">Runnerbot 2 Cafe OS</h2>
  <p className="mt-3 max-w-3xl text-zinc-700">
    Cafe OS turns scattered cafe orders into a clean fulfilment, delivery and reporting system.
    It is designed as the first repeatable B2B pilot vertical for Runners Errands across cafes,
    restaurants, pharmacies, schools, offices, private clubs, estates and hotels in Lagos.
  </p>
  <div className="mt-5 flex flex-wrap gap-3">
    <a href="/cafe-pilot" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Open Cafe OS</a>
    <a href="/cafe-pilot/economics" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">View Economics</a>
  </div>
</section>


<section className="my-10 rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
  <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Market capture journey</p>
  <h2 className="mt-2 text-3xl font-black text-black">
    First B2B pilot vertical: Cafe OS + Lunch Preorder OS + Bites AI
  </h2>
  <p className="mt-3 max-w-4xl text-zinc-700">
    Runners Errands can start with one cafe pilot, prove value, then scale across Ikoyi, VI and Lekki businesses with order + fulfilment confusion.
  </p>
  <div className="mt-5 flex flex-wrap gap-3">
    <a href="/commercial-pilots" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Commercial Pilots</a>
    <a href="/business-targets" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">Business Targets</a>
    <a href="/pilot-crm" className="rounded-full border border-green-600 px-5 py-3 font-black text-green-700">Pilot CRM</a>
  </div>
</section>
\n</main>
  );
}
