
"use client";

import { useState } from "react";

const windows = ["12:00", "12:30", "13:00", "13:30", "14:00", "Custom"];
const goals = ["Filling", "Light", "Healthy", "Protein-heavy", "Comfort food", "Quickest ready", "Best value", "Surprise me"];

export default function MallPreorderPage() {
  const [goal, setGoal] = useState("Best value");
  const [budget, setBudget] = useState("₦8,000");
  const [recommendation, setRecommendation] = useState("Club sandwich + fresh juice");

  function askBites() {
    if (goal === "Healthy" || goal === "Light") setRecommendation("Chicken salad + fresh juice");
    else if (goal === "Protein-heavy") setRecommendation("Protein lunch bowl");
    else if (goal === "Quickest ready") setRecommendation("Coffee + pastry bundle");
    else setRecommendation("Club sandwich + fresh juice");
  }

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Lunch Preorder OS</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black md:text-7xl">Preorder lunch before the mall rush.</h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          Reduce waiting time, decision fatigue, queue stress and fulfilment confusion with Bites AI + Runnerbot 2.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {["Saves lunch time", "Reduces queues", "Reduces decision fatigue", "Helps tenants prepare early", "Creates repeat order habits", "Supports office batch delivery", "Improves rider planning", "Increases lunch conversion"].map((x) => (
          <div key={x} className="rounded-2xl bg-lime-50 p-5 font-black shadow-sm">{x}</div>
        ))}
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[1fr_380px]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl">
          <h2 className="text-3xl font-black">Preorder form</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border px-4 py-3" placeholder="Customer name" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Phone" />
            <select className="rounded-2xl border bg-white px-4 py-3"><option>Dine-in-ready</option><option>Collection</option><option>Delivery</option><option>Office batch delivery</option></select>
            <select className="rounded-2xl border bg-white px-4 py-3">{windows.map((x) => <option key={x}>{x}</option>)}</select>
            <input className="rounded-2xl border px-4 py-3" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <select className="rounded-2xl border bg-white px-4 py-3" value={goal} onChange={(e) => setGoal(e.target.value)}>{goals.map((x) => <option key={x}>{x}</option>)}</select>
            <textarea className="min-h-28 rounded-2xl border px-4 py-3 md:col-span-2" value={recommendation} onChange={(e) => setRecommendation(e.target.value)} />
            <button type="button" onClick={askBites} className="rounded-full bg-black px-6 py-4 font-black text-lime-300">Ask Bites AI</button>
            <button type="button" className="rounded-full bg-green-600 px-6 py-4 font-black text-white">Submit lunch preorder</button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl">
          <h2 className="text-2xl font-black text-lime-300">Habit loop</h2>
          <div className="mt-5 grid gap-3">
            {["Same-time-tomorrow reorder", "Weekly lunch plan", "Favourite venues", "Budget tracker", "Repeat order logic", "Bites AI recommendation history"].map((x) => (
              <div key={x} className="rounded-2xl bg-white/10 p-4 font-bold">{x}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
