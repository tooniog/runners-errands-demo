
import Link from "next/link";

const sections = [
  ["Executive summary", "Runners proposes a controlled mall-wide AI concierge, preorder, collection and multi-store delivery pilot."],
  ["Opportunity", "Customers waste time browsing, waiting, carrying bags and coordinating multiple stores. Tenants need digital fulfilment without building their own logistics."],
  ["Product modules", "Runnerbot 2 Mall Concierge, Bites AI Food Assistant, Lunch Preorder OS, Multi-Store Errand Flow, Reservations, E-bike Dispatch, Mall Admin Dashboard and Tenant Queue."],
  ["Pilot design", "14–30 days, no upfront software fee to mall, 7–10 tenants, 2–3 e-bikes, one pickup/handoff point, QR/web ordering and daily reporting."],
  ["Commercial model", "Customer-paid delivery, multi-store concierge, priority and large/special handling fees. Tenant listing free during pilot."],
  ["Mall incentives", "More tenant engagement, more off-site sales, customer convenience, innovation positioning, data visibility and low-risk launch."],
  ["Risk controls", "Tenant approval, payment status tracking, approved handoff point, ETA ranges, proof-of-delivery, rider logs and privacy controls."],
  ["What Runners needs", "Pilot permission, mall contact, tenant introductions, pickup point, QR/signage approval, escalation rules and weekly feedback."],
];

export default function ProposalPage(){
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Runners Mall OS proposal</p>
        <h1 className="mt-4 text-4xl font-black md:text-7xl">Client-facing mall proposal page.</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os/palms" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">The Palms pilot</Link>
          <Link href="/mall-os/simulation" className="rounded-full bg-white px-6 py-4 font-black text-black">Economics simulator</Link>
        </div>
      </section>
      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2">
        {sections.map(([title,copy])=><div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-zinc-700">{copy}</p></div>)}
      </section>
    </main>
  )
}
