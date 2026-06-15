
"use client";
import { useState } from "react";

const steps = [
  "Customer asks Runnerbot 2 for a mall plan",
  "Bites AI recommends lunch",
  "Customer adds pharmacy/toiletry/gift request",
  "Runnerbot calculates delivery and concierge fee",
  "Tenants approve items",
  "E-bike rider assigned",
  "Order out for delivery",
  "OTP/proof completed",
  "Mall admin sees pilot report",
  "Simulation shows economics",
];

export default function DemoPage(){
  const [step,setStep]=useState(0);
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Guided live demo</p>
        <h1 className="mt-4 text-4xl font-black md:text-7xl">Mall owner and investor walkthrough.</h1>
      </section>
      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[380px_1fr]">
        <div className="grid gap-2">
          {steps.map((s,i)=><button key={s} onClick={()=>setStep(i)} className={`rounded-2xl p-4 text-left font-black ${i===step?"bg-lime-300":"bg-white"}`}>Step {i+1}: {s}</button>)}
        </div>
        <div className="rounded-[2rem] bg-black p-8 text-white shadow-2xl">
          <p className="text-sm uppercase tracking-wide text-lime-300">Current demo step</p>
          <h2 className="mt-3 text-4xl font-black">{steps[step]}</h2>
          <p className="mt-5 max-w-2xl text-white/70">
            Use this page in meetings to show the full Mall OS journey: concierge, Bites AI, multi-store order, tenant approval, e-bike fulfilment, proof and economics.
          </p>
        </div>
      </section>
    </main>
  )
}
