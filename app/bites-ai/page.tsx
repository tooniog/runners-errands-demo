import Link from "next/link";

const items = [
  { name: "Coffee + pastry bundle", price: "₦4,500", ready: "8–12 mins", fit: "Fastest ready / best value", emoji: "☕" },
  { name: "Chicken salad", price: "₦8,500", ready: "14–20 mins", fit: "Healthy / protein-heavy", emoji: "🥗" },
  { name: "Club sandwich", price: "₦7,800", ready: "18–25 mins", fit: "Filling / comfort", emoji: "🥪" },
  { name: "Jollof bowl", price: "₦7,000", ready: "20–30 mins", fit: "Filling / Nigerian comfort", emoji: "🍛" },
  { name: "Fruit bowl", price: "₦5,500", ready: "7–12 mins", fit: "Light / healthy", emoji: "🍓" },
  { name: "Corporate lunch tray", price: "₦85,000", ready: "45–60 mins", fit: "Corporate batch", emoji: "🍱" },
];

export default function BitesAIPage() {
  const externalUrl = process.env.NEXT_PUBLIC_BITES_AI_URL || "https://bites-ai.vercel.app/";

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Bites AI inside Runners Errands</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Decide what to eat in seconds.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-white/70">
          Bites AI helps customers choose meals based on budget, time, goal, appetite, availability and delivery window.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[ "Bites AI decides", "Runnerbot 2 fulfils", "Runners Errands delivers" ].map((x) => (
            <div key={x} className="rounded-2xl bg-white/10 p-5 text-xl font-black">{x}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Menu-aware recommendation demo</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Mock intelligence for v1. Later this connects to real cafe menus, stock, prep time, customer history and POS.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-4xl">{item.emoji}</p>
              <h3 className="mt-3 text-xl font-black">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.fit}</p>
              <div className="mt-4 rounded-2xl bg-black p-4 text-white">
                <p className="font-black text-lime-300">{item.price}</p>
                <p className="text-sm text-white/60">Ready: {item.ready}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/preorder" className="rounded-full bg-green-600 px-5 py-3 font-black text-white">Add to preorder</Link>
          <Link href="/cafe-pilot/order" className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Create cafe request</Link>
          <a href={externalUrl} target="_blank" className="rounded-full border border-green-600 px-5 py-3 font-black text-green-700">Open full Bites AI app</a>
        </div>
        <p className="mt-5 text-xs text-zinc-600">
          Bites AI provides food decision support, not medical advice. For allergies, medical diets or serious dietary requirements, confirm with the restaurant/cafe and a qualified professional.
        </p>
      </section>
    </main>
  );
}
