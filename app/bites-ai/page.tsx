
import Link from "next/link";

const items = [
  ["Coffee + pastry bundle", "₦4,500", "8–12 mins", "Fastest ready / best value", "☕"],
  ["Chicken salad", "₦8,500", "14–20 mins", "Healthy / protein-heavy", "🥗"],
  ["Club sandwich", "₦7,800", "18–25 mins", "Filling / comfort", "🥪"],
  ["Jollof bowl", "₦7,000", "20–30 mins", "Filling / Nigerian comfort", "🍛"],
  ["Fruit bowl", "₦5,500", "7–12 mins", "Light / healthy", "🍓"],
  ["Corporate lunch tray", "₦85,000", "45–60 mins", "Corporate batch", "🍱"],
];

export default function BitesAIPage() {
  const externalUrl = process.env.NEXT_PUBLIC_BITES_AI_URL || "https://bites-ai.vercel.app/";

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Bites AI inside Runners Mall OS</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black md:text-7xl">Decide what to eat in seconds.</h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          Bites AI recommends food by budget, appetite, goal, time available, venue, prep time, availability and dietary preference.
        </p>
        <p className="mt-5 text-2xl font-black text-lime-300">
          Bites AI decides. Runnerbot 2 fulfils. Runners Errands delivers.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map(([name, price, ready, fit, emoji]) => (
          <div key={name} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">{emoji}</p>
            <h2 className="mt-3 text-2xl font-black">{name}</h2>
            <p className="mt-2 text-zinc-600">{fit}</p>
            <div className="mt-4 rounded-2xl bg-black p-4 text-white">
              <p className="font-black text-lime-300">{price}</p>
              <p className="text-sm text-white/60">Ready: {ready}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6">
        <h2 className="text-3xl font-black">Convert recommendation into fulfilment</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/mall-os/preorder" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">Add to lunch preorder</Link>
          <Link href="/mall-os/order" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Create mall order</Link>
          <a href={externalUrl} target="_blank" className="rounded-full border border-green-600 px-5 py-3 font-black text-green-700">Open full Bites AI app</a>
        </div>
        <p className="mt-5 text-xs text-zinc-600">
          Bites AI provides food decision support, not medical advice. For allergies or medical diets, confirm with the restaurant and a qualified professional.
        </p>
      </section>
    </main>
  );
}
