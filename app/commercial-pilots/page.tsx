
import Link from "next/link";
import PilotSignupForm from "../../components/goldrush/PilotSignupForm";

const packages = [
  {
    title: "Mall OS Pilot",
    bestFor: "Mall management, retail centres, destination malls",
    includes: ["AI mall concierge", "QR/web ordering", "Lunch preorder", "Multi-store errand flow", "Tenant approval queue", "Daily/weekly mall reports"],
    pricing: ["No upfront software fee to mall during pilot", "Runners earns customer-paid fulfilment fees", "14–30 day proposed pilot", "7–10 tenants initially"],
  },
  {
    title: "Mall Tenant Delivery Layer",
    bestFor: "Food, grocery, pharmacy, beauty, fashion, electronics and gift tenants",
    includes: ["Tenant order queue", "Availability approval", "Price confirmation", "Ready-time control", "Delivery handoff", "Sales influenced reporting"],
    pricing: ["Tenant listing free during pilot", "Premium tenant upgrades later", "Featured placement later: ₦50k–₦250k/month after proof"],
  },
  {
    title: "Lunch Preorder OS",
    bestFor: "Food tenants, restaurants, cafe tenants, mall staff, nearby offices",
    includes: ["Lunch windows", "Bites AI meal recommendation", "Dine-in-ready", "Collection", "Delivery", "Office batch delivery"],
    pricing: ["Customer-paid delivery where applicable", "Preorder/coordination fee available", "Designed to create repeat lunch habits"],
  },
  {
    title: "Multi-Store Errand OS",
    bestFor: "Customers combining food, pharmacy, grocery, beauty, gifts and fashion",
    includes: ["One request across multiple tenants", "Concierge fee logic", "Tenant confirmation", "Bundled delivery", "OTP/proof-of-delivery"],
    pricing: ["Multi-store concierge fee: ₦500–₦1,500", "Priority fee: ₦500–₦2,500", "Large/special handling: ₦1,000–₦5,000"],
  },
  {
    title: "Mall Analytics + Promotions",
    bestFor: "Mall management and tenants after pilot proof",
    includes: ["Category demand", "Peak windows", "Popular stores", "Preorder data", "Tenant engagement", "Promotion opportunities"],
    pricing: ["Free reporting during pilot", "Paid analytics/promotions after engagement data proves value"],
  },
  {
    title: "Enterprise Mall Network",
    bestFor: "Multi-mall operators and Lagos retail networks",
    includes: ["Repeatable Mall OS playbook", "Fleet expansion", "Tenant onboarding system", "Mall-by-mall dashboards", "Central command view"],
    pricing: ["Custom network pricing after first pilot data", "Fleet funding tied to utilisation and hub performance"],
  },
];

const risks = [
  ["Tenant disruption", "Start with 7–10 willing tenants. Orders require tenant approval before fulfilment."],
  ["Payment confusion", "Clear payment statuses: pending, confirmed, pay on delivery or tenant confirmed. Integrations later."],
  ["Unauthorized access", "Approved pickup/handoff point. No rider enters restricted mall areas without permission."],
  ["Wrong item or unavailable stock", "Availability confirmation and customer approval before dispatch."],
  ["Delivery delays", "ETA ranges, priority logic, route batching and proactive customer updates."],
  ["Damaged items", "Handling categories, photo proof, item notes and liability process before scaling."],
  ["Rider trust", "Verified riders, OTP/proof-of-delivery and delivery logs."],
];

export default function CommercialPilotsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Commercial Pilot Packages</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Runners Mall OS is the entry wedge.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          One mall approval can unlock many tenants, dense delivery routes, lunch preorders, multi-store errands and e-bike fleet economics.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Open Mall OS</Link>
          <Link href="/mall-os/simulation" className="rounded-full bg-white px-6 py-4 font-black text-black">Run simulation</Link>
          <Link href="/mall-os/proposal" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">View proposal</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 lg:grid-cols-2">
        {packages.map((pkg) => (
          <div key={pkg.title} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">{pkg.title}</h2>
            <p className="mt-2 text-sm font-bold text-green-700">Best for: {pkg.bestFor}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-black">Includes</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {pkg.includes.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-black">Commercial model</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {pkg.pricing.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <h2 className="text-3xl font-black">Why Mall OS beats scattered merchant acquisition</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["One approval unlocks many tenants", "Dense e-bike hub economics", "Food + pharmacy + grocery + gifts in one journey", "Lunch preorder creates habit", "Bites AI increases conversion", "Runnerbot 2 handles fulfilment intelligence", "Mall data improves reporting", "Fleet funding becomes rational", "Repeatable across Lagos malls"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/80">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Risk controls</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {risks.map(([risk, mitigation]) => (
            <div key={risk} className="rounded-2xl bg-zinc-50 p-4">
              <p className="font-black text-black">{risk}</p>
              <p className="mt-2 text-sm text-zinc-700">{mitigation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <PilotSignupForm source="commercial_pilots_mall_os_page" />
      </section>
    </main>
  );
}
