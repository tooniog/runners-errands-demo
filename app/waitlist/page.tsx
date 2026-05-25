"use client";

import { useState } from "react";
import { addWaitlistSignup, getWaitlist } from "@/lib/storage";

export default function WaitlistPage() {
  const [count, setCount] = useState(5000 + getWaitlist().length);
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    addWaitlistSignup({
      id: `wl-${Date.now()}`,
      name: String(data.get("name")),
      contact: String(data.get("contact")),
      area: String(data.get("area")),
      useCase: String(data.get("useCase")),
      frequency: String(data.get("frequency")),
      createdAt: new Date().toISOString(),
    });

    setCount((x) => x + 1);
    setDone(true);
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <p className="eyebrow">Early access</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        Join the Runners Errands waitlist.
      </h1>
      <p className="mt-4 text-slate-600">
        Built for Lagos. Designed for daily dependence.
      </p>

      <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-4 text-3xl font-black text-slate-950">
          {count.toLocaleString()}+ demo waitlist target
        </p>

        {done ? (
          <div className="rounded-2xl bg-lime-50 p-5 font-black text-lime-800">
            You’re on the early access list.
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4">
            <input name="name" className="input" placeholder="Name" />
            <input name="contact" className="input" placeholder="Phone/email" />
            <input name="area" className="input" placeholder="Area in Lagos" />
            <select name="useCase" className="input">
              {[
                "Food",
                "Groceries",
                "Pharmacy",
                "Parcels",
                "Corporate deliveries",
                "Premium produce",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <select name="frequency" className="input">
              {["Daily", "Weekly", "Occasionally"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <button className="rounded-2xl bg-slate-950 px-6 py-3 font-black text-white">
              Join waitlist
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
