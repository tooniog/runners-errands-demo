
"use client";

import { useState } from "react";

const categories = ["Food", "Grocery", "Pharmacy", "Beauty", "Fashion", "Electronics", "Gifts", "Toiletries", "Other"];
const areas = ["Lekki Phase 1", "Ikoyi", "VI", "Banana Island", "Osborne", "Parkview", "Other"];

export default function MallOrderPage() {
  const [result, setResult] = useState<any>(null);
  const [priority, setPriority] = useState(false);
  const [large, setLarge] = useState(false);
  const [stores, setStores] = useState("Food, pharmacy, gifts");
  const [area, setArea] = useState("Lekki Phase 1");

  function createOrder() {
    const deliveryFee = area === "Lekki Phase 1" ? 2500 : area === "VI" ? 3200 : 3000;
    const storeCount = stores.split(",").filter(Boolean).length;
    const conciergeFee = storeCount >= 2 ? 1000 : 0;
    const priorityFee = priority ? 1000 : 0;
    const handlingFee = large ? 2000 : 0;
    const totalFees = deliveryFee + conciergeFee + priorityFee + handlingFee;
    const rider = area === "Lekki Phase 1" ? "E-bike Rider 01" : "E-bike/Motorcycle Rider 02";
    setResult({
      id: `MALL-PALMS-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      deliveryFee,
      conciergeFee,
      priorityFee,
      handlingFee,
      totalFees,
      rider,
      eta: area === "Lekki Phase 1" ? "35–55 mins" : "55–85 mins",
      status: "Awaiting tenant approval",
    });
  }

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-6xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Multi-store mall errand flow</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Order from multiple mall tenants in one request.</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Food, grocery, pharmacy, beauty, fashion, electronics, gifts, toiletries and special requests — consolidated by Runnerbot 2.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1fr_380px]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl">
          <div className="grid gap-4">
            <input className="rounded-2xl border px-4 py-3" placeholder="Customer name" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Phone / WhatsApp" />
            <select className="rounded-2xl border bg-white px-4 py-3" value={area} onChange={(e) => setArea(e.target.value)}>
              {areas.map((x) => <option key={x}>{x}</option>)}
            </select>
            <input className="rounded-2xl border px-4 py-3" value={stores} onChange={(e) => setStores(e.target.value)} placeholder="Stores/categories, e.g. food, pharmacy, gifts" />
            <textarea className="min-h-32 rounded-2xl border px-4 py-3" placeholder="Request details: items, sizes, brands, budget, substitutions, allergies, gift notes..." />
            <div className="grid gap-3 md:grid-cols-2">
              <label className="rounded-2xl border p-4 font-bold"><input type="checkbox" checked={priority} onChange={(e) => setPriority(e.target.checked)} /> Priority order</label>
              <label className="rounded-2xl border p-4 font-bold"><input type="checkbox" checked={large} onChange={(e) => setLarge(e.target.checked)} /> Large/special handling</label>
            </div>
            <button type="button" onClick={createOrder} className="rounded-full bg-green-600 px-6 py-4 font-black text-white">
              Generate Mall OS order
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl">
          <h2 className="text-2xl font-black text-lime-300">Runnerbot 2 output</h2>
          {result ? (
            <div className="mt-5 grid gap-3">
              {Object.entries(result).map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">{k}</p>
                  <p className="font-black">{typeof v === "number" ? `₦${v.toLocaleString()}` : String(v)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-white/70">Submit a request to generate order ID, fees, ETA, rider and status.</p>
          )}
        </div>
      </section>
    </main>
  );
}
