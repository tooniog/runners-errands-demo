
"use client";
import { useState } from "react";

const seed = [
  ["TEN-001", "Food tenant", "Club sandwich + juice", "Awaiting approval", "₦7,800"],
  ["TEN-002", "Pharmacy tenant", "Toiletries + medicine availability check", "Awaiting approval", "Pending"],
  ["TEN-003", "Gift tenant", "Birthday gift under ₦25k", "Ready", "₦22,000"],
];

export default function TenantPage(){
  const [orders,setOrders] = useState(seed);
  function update(i: number, status: string){ setOrders(orders.map((o,idx)=>idx===i?[o[0],o[1],o[2],status,o[4]]:o)); }
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Tenant portal demo</p>
        <h1 className="mt-4 text-4xl font-black md:text-7xl">Approve availability, price and ready time.</h1>
      </section>
      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-white p-6 shadow-xl">
        <div className="grid gap-4">
          {orders.map((o,i)=>(
            <div key={o[0]} className="rounded-3xl border p-5">
              <p className="font-black">{o[0]} • {o[1]}</p>
              <p className="mt-2 text-zinc-700">{o[2]}</p>
              <p className="mt-2 font-bold text-green-700">Status: {o[3]} • Price: {o[4]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Approved", "Price confirmed", "Ready in 20 mins", "Ready", "Rejected/unavailable"].map(s => <button key={s} onClick={()=>update(i,s)} className="rounded-full bg-black px-4 py-2 text-sm font-black text-lime-300">{s}</button>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
