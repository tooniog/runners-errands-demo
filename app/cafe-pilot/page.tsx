import Link from "next/link";
import CafeCompetitorComparison from "../../components/cafe/CafeCompetitorComparison";
import { sampleCafeItems } from "../../lib/cafeData";

const problemCards = [
  "Orders arrive through calls, WhatsApp and staff messages",
  "Non-member delivery is hard to coordinate",
  "Customers keep asking for updates",
  "Payments need confirmation",
  "Staff lose time repeating the same answers",
  "Missed orders reduce revenue",
];

const solution = [
  "Order intake",
  "Menu clarification",
  "Member vs non-member logic",
  "Dine-in, collection and delivery",
  "Payment confirmation status",
  "Staff approval queue",
  "Delivery fee calculation",
  "Rider/e-bike assignment",
  "ETA updates",
  "Proof-of-delivery",
  "Customer support answers",
  "Daily sales reports",
  "Repeat customer tracking",
];

const targets = [
  "Private club cafes",
  "Cafes",
  "Restaurants",
  "Bakeries",
  "Estate supermarkets",
  "Pharmacies",
  "Clinics",
  "School canteens",
  "Gyms and wellness cafes",
  "Hotels and serviced apartments",
  "Office canteens",
  "Laundries",
  "Florists",
  "Corporate lunch providers",
];

export default function CafePilotPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-black">
      <section className="px-5 py-6 md:px-10">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm">
          <Link href="/" className="font-black text-green-700">Runners Errands</Link>
          <div className="flex flex-wrap gap-2 text-sm font-bold">
            <Link href="/cafe-pilot/order" className="rounded-full bg-black px-4 py-2 text-white">Order</Link>
            <Link href="/cafe-pilot/admin" className="rounded-full bg-lime-300 px-4 py-2 text-black">Admin</Link>
            <Link href="/cafe-pilot/economics" className="rounded-full border px-4 py-2">Economics</Link>
            <Link href="/cafe-pilot/chat" className="rounded-full border px-4 py-2">Ask Runnerbot 2</Link>
          </div>
        </nav>
      </section>

      <section className="px-5 pb-10 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-6 text-white shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
            Runnerbot 2 Cafe OS
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
            Runnerbot 2 Cafe OS for Ikoyi Club Cafe
          </h1>
          <p className="mt-5 max-w-3xl text-xl text-white/75">
            Turn scattered cafe orders into a clean, trackable, revenue-generating fulfilment system.
          </p>
          <p className="mt-3 max-w-3xl text-white/60">
            Built for member orders, non-member delivery, collection, special requests and human-in-the-loop approval.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cafe-pilot/order" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">
              Start Cafe Order
            </Link>
            <Link href="/cafe-pilot/admin" className="rounded-full bg-white px-6 py-4 font-black text-black">
              View Cafe Admin
            </Link>
            <Link href="/cafe-pilot/economics" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">
              View Pilot Economics
            </Link>
            <Link href="/cafe-pilot/chat" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">
              Ask Runnerbot 2
            </Link>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Member + non-member workflows",
              "Human approval before fulfilment",
              "Delivery + collection support",
              "E-bike dispatch ready",
              "Proof-of-delivery",
              "Daily sales intelligence",
            ].map((badge) => (
              <div key={badge} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/85">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">The problem</p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">Cafe orders are valuable, but messy.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((item) => (
              <div key={item} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">The solution</p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Order clarity. Fulfilment control. Delivery intelligence.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {solution.map((item) => (
              <div key={item} className="rounded-2xl bg-zinc-50 p-4 text-sm font-bold text-zinc-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <CafeCompetitorComparison />
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Replicable across Lagos</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-black md:text-5xl">
            If a business receives orders but struggles with fulfilment, Runnerbot 2 can become its operating layer.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {targets.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 text-sm font-black shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-black p-6 text-white md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Sample cafe menu logic</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sampleCafeItems.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
