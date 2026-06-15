
import Link from "next/link";

const pilot = [
  ["Duration", "14–30 day proposed pilot"],
  ["Pilot cost to mall", "No upfront software fee during pilot"],
  ["Fleet", "2–3 e-bikes initially"],
  ["Tenants", "7–10 first tenants across food, grocery, pharmacy, beauty, gifts, fashion/electronics"],
  ["Hub", "One approved pickup/handoff point"],
  ["Channels", "QR code, web app, tenant links and WhatsApp later"],
  ["Target volume", "30–50 orders/day"],
  ["Multi-store target", "At least 20% of orders"],
  ["Reporting", "Daily operational report and weekly mall summary"],
];

export default function PalmsPilotPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Proposed pilot: The Palms, Lekki</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Turn The Palms into a digital commerce, lunch preorder and e-bike fulfilment hub.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          This is a proposed pilot workflow, ready for mall management review. No approval is claimed.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os/demo" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Run live demo</Link>
          <Link href="/mall-os/proposal" className="rounded-full bg-white px-6 py-4 font-black text-black">View proposal</Link>
          <Link href="/pilot-crm/new" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Register interest</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
        {pilot.map(([label, value]) => (
          <div key={label} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Why The Palms is the ideal first mall wedge</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          The Palms has dense mall traffic, food/restaurants, cinema traffic, fashion, grocery, beauty, pharmacy-style demand,
          family/weekend traffic and Lekki delivery radius. That density improves the economics of a controlled e-bike hub.
        </p>
      </section>
    </main>
  );
}
