
import Link from "next/link";

const modules = [
  ["AI mall concierge", "Customers ask Runnerbot 2 what to buy, where to go, what to eat and how to combine errands."],
  ["Lunch Preorder OS", "Customers preorder before the rush for dine-in-ready, collection, delivery or office batch delivery."],
  ["Multi-store errands", "One customer request can cover food, grocery, pharmacy, beauty, fashion, electronics and gifts."],
  ["E-bike delivery hub", "A dense mall hub improves rider utilisation, delivery margin and customer convenience."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Runners Errands × Runnerbot 2 × Bites AI
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Runners Mall OS turns a physical mall into a digital commerce, preorder, AI concierge and e-bike delivery hub.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          Starting with a proposed pilot for The Palms, Lekki. One mall approval can unlock many tenants, dense order flow,
          lunch traffic, family traffic, staff traffic and e-bike delivery economics.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Open Mall OS</Link>
          <Link href="/mall-os/palms" className="rounded-full bg-white px-6 py-4 font-black text-black">The Palms Pilot</Link>
          <Link href="/mall-os/demo" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Run Demo</Link>
          <Link href="/mall-os/proposal" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Proposal</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">The new operating line</h2>
        <p className="mt-3 text-2xl font-black text-green-700">
          Bites AI decides. Runnerbot 2 fulfils. Runners Errands delivers.
        </p>
        <p className="mt-3 max-w-4xl text-zinc-700">
          Any Lagos mall or retail hub with food, pharmacy, grocery, beauty, fashion, electronics, gifts, cinema traffic,
          staff traffic and collection/delivery confusion is a Runnerbot 2 target.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2">
        {modules.map(([title, copy]) => (
          <div key={title} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="mt-3 text-zinc-700">{copy}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
