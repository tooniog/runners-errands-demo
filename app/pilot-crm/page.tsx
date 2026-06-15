
import Link from "next/link";

const leads = [
  {
    name: "The Palms, Lekki",
    type: "Priority mall pilot",
    area: "Lekki",
    package: "Mall OS Pilot",
    status: "Proposed target / not approved",
    value: "₦2.4m+ monthly gross profit potential after validation",
    next: "Seek permission to present Mall OS to management",
  },
  {
    name: "The Palms food tenants",
    type: "Anchor tenant cluster",
    area: "Lekki",
    package: "Lunch Preorder OS + Tenant Delivery Layer",
    status: "Target after mall intro",
    value: "Lunch preorder + delivery density",
    next: "Identify 3–5 food tenants for pilot",
  },
  {
    name: "The Palms grocery / pharmacy / beauty tenants",
    type: "Multi-store errand cluster",
    area: "Lekki",
    package: "Multi-Store Errand OS",
    status: "Target after mall intro",
    value: "Concierge + multi-store fees",
    next: "Identify 3–5 non-food tenants",
  },
  {
    name: "Circle Mall",
    type: "Expansion mall",
    area: "Lekki",
    package: "Mall OS Pilot",
    status: "Later target",
    value: "Repeat mall playbook",
    next: "Approach after The Palms proof",
  },
  {
    name: "Lennox Mall",
    type: "Expansion mall",
    area: "Lekki",
    package: "Mall OS Pilot",
    status: "Later target",
    value: "Repeat mall playbook",
    next: "Approach after first pilot case study",
  },
  {
    name: "Novare Lekki Mall",
    type: "Expansion mall",
    area: "Lekki",
    package: "Mall OS Pilot",
    status: "Later target",
    value: "Repeat mall playbook",
    next: "Approach with pilot data",
  },
  {
    name: "VI / Ikoyi retail clusters",
    type: "Retail cluster expansion",
    area: "VI / Ikoyi",
    package: "Mall OS adapted to retail cluster",
    status: "Later target",
    value: "Clustered fulfilment density",
    next: "Map after mall pilot",
  },
];

export default function PilotCRMPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Mall OS Pilot CRM</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Track malls, anchor tenants and expansion clusters.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          The commercial focus is no longer scattered business leads. The focus is mall approval, tenant onboarding and e-bike hub density.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pilot-crm/new" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Submit Mall OS enquiry</Link>
          <Link href="/mall-os/palms" className="rounded-full bg-white px-6 py-4 font-black text-black">The Palms target</Link>
          <Link href="/mall-os/proposal" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Proposal</Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {[
          ["Mall targets", "4"],
          ["Priority pilot", "The Palms"],
          ["Initial tenants", "7–10"],
          ["Fleet need", "2–3 e-bikes"],
          ["Target orders/day", "30–50"],
          ["Multi-store target", "20%+"],
          ["Primary wedge", "Mall approval"],
          ["Revenue model", "Customer-paid fees"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl">
        <div className="border-b border-zinc-200 p-6">
          <h2 className="text-3xl font-black">Mall and anchor tenant pipeline</h2>
          <p className="mt-2 text-sm text-zinc-600">Targets only. No mall approval is claimed unless manually updated.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1000px] text-left text-sm">
            <thead>
              <tr className="border-b bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                {["Target", "Type", "Area", "Package", "Status", "Value thesis", "Next step"].map((heading) => (
                  <th key={heading} className="px-4 py-3">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.name} className="border-b">
                  <td className="px-4 py-4 font-black">{lead.name}</td>
                  <td className="px-4 py-4">{lead.type}</td>
                  <td className="px-4 py-4">{lead.area}</td>
                  <td className="px-4 py-4">{lead.package}</td>
                  <td className="px-4 py-4">{lead.status}</td>
                  <td className="px-4 py-4">{lead.value}</td>
                  <td className="px-4 py-4">{lead.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
