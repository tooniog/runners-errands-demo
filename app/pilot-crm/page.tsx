
import Link from "next/link";

const leads = [
  {
    name: "Ikoyi Club Cafe",
    category: "Private club cafe",
    area: "Ikoyi",
    package: "Cafe OS Starter",
    status: "Target / not contacted",
    value: "₦350,000/month",
    strength: "Warm intro possible",
  },
  {
    name: "Eric Kayser Ikoyi",
    category: "Cafe / bakery",
    area: "Ikoyi",
    package: "Cafe OS + Lunch Preorder OS",
    status: "Target / not contacted",
    value: "₦450,000/month",
    strength: "Cold",
  },
  {
    name: "Crust & Cream VI",
    category: "Cafe / restaurant",
    area: "VI",
    package: "Lunch Preorder OS",
    status: "Target / not contacted",
    value: "₦450,000/month",
    strength: "Cold",
  },
  {
    name: "Resswell Catering",
    category: "Office lunch provider",
    area: "VI",
    package: "Corporate Lunch OS",
    status: "Target / not contacted",
    value: "₦650,000/month",
    strength: "Cold",
  },
  {
    name: "Chemart Pharmacy Ikoyi/VI",
    category: "Pharmacy",
    area: "Ikoyi / VI",
    package: "Pharmacy Dispatch OS",
    status: "Target / not contacted",
    value: "₦500,000/month",
    strength: "Cold",
  },
  {
    name: "La Pointe VI",
    category: "Supermarket",
    area: "VI",
    package: "Managed Delivery OS",
    status: "Target / not contacted",
    value: "₦600,000/month",
    strength: "Cold",
  },
  {
    name: "M-Mart Plus Ikoyi",
    category: "Estate supermarket",
    area: "Ikoyi",
    package: "Managed Delivery OS",
    status: "Target / not contacted",
    value: "₦500,000/month",
    strength: "Cold",
  },
  {
    name: "LuxeWash VI/Ikoyi/Lekki",
    category: "Laundry",
    area: "VI / Ikoyi / Lekki",
    package: "Laundry Pickup/Dropoff OS",
    status: "Target / not contacted",
    value: "₦400,000/month",
    strength: "Cold",
  },
  {
    name: "Regal Flowers",
    category: "Florist",
    area: "Lagos",
    package: "Premium Gifting Dispatch",
    status: "Target / not contacted",
    value: "₦350,000/month",
    strength: "Cold",
  },
  {
    name: "Fresh Flowers by Olive",
    category: "Florist",
    area: "Lagos",
    package: "Premium Gifting Dispatch",
    status: "Target / not contacted",
    value: "₦350,000/month",
    strength: "Cold",
  },
  {
    name: "Corona School Ikoyi",
    category: "School / canteen",
    area: "Ikoyi",
    package: "Lunch Preorder OS",
    status: "Target / not contacted",
    value: "₦500,000/month",
    strength: "Cold",
  },
  {
    name: "Lagos Prep Ikoyi",
    category: "School / canteen",
    area: "Ikoyi",
    package: "Lunch Preorder OS",
    status: "Target / not contacted",
    value: "₦500,000/month",
    strength: "Cold",
  },
  {
    name: "Iwosan Lagoon Ikoyi/VI",
    category: "Hospital / clinic",
    area: "Ikoyi / VI",
    package: "Managed Delivery OS",
    status: "Target / not contacted",
    value: "₦750,000/month",
    strength: "Cold",
  },
  {
    name: "The Wheatbaker Ikoyi",
    category: "Hotel",
    area: "Ikoyi",
    package: "Hotel Guest Errand Agent",
    status: "Target / not contacted",
    value: "₦900,000/month",
    strength: "Cold",
  },
  {
    name: "Frootaz Place / i-Fitness Lekki",
    category: "Gym / wellness cafe",
    area: "Lekki",
    package: "Lunch Preorder OS + Bites AI",
    status: "Target / not contacted",
    value: "₦450,000/month",
    strength: "Cold",
  },
];

export default function PilotCRMPage() {
  const monthlyPipeline = 7250000;
  const annualPipeline = monthlyPipeline * 12;

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Pilot CRM
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Sales command centre for Ikoyi, VI and Lekki pilots.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-white/70">
          Any Lagos business with orders + fulfilment confusion is a Runnerbot 2 target.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pilot-crm/new" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">
            Add new lead
          </Link>
          <Link href="/commercial-pilots" className="rounded-full bg-white px-6 py-4 font-black text-black">
            View pilot packages
          </Link>
          <Link href="/business-targets" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">
            Target map
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {[
          ["Total leads", leads.length.toString()],
          ["Hot leads", "1"],
          ["Demos booked", "0"],
          ["Pilots proposed", "0"],
          ["Won pilots", "0"],
          ["Monthly pipeline", `₦${monthlyPipeline.toLocaleString()}`],
          ["Annual pipeline", `₦${annualPipeline.toLocaleString()}`],
          ["Top target", "Ikoyi Club Cafe"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
              {label}
            </p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl">
        <div className="border-b border-zinc-200 p-6">
          <h2 className="text-3xl font-black">Seed target list</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Targets only. Not customers unless manually updated.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1000px] text-left text-sm">
            <thead>
              <tr className="border-b bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                {["Business", "Category", "Area", "Recommended pilot", "Status", "Pipeline value", "Relationship", "Open"].map((heading) => (
                  <th key={heading} className="px-4 py-3">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={lead.name} className="border-b">
                  <td className="px-4 py-4 font-black">{lead.name}</td>
                  <td className="px-4 py-4">{lead.category}</td>
                  <td className="px-4 py-4">{lead.area}</td>
                  <td className="px-4 py-4">{lead.package}</td>
                  <td className="px-4 py-4">{lead.status}</td>
                  <td className="px-4 py-4">{lead.value}</td>
                  <td className="px-4 py-4">{lead.strength}</td>
                  <td className="px-4 py-4">
                    <Link href={`/pilot-crm/lead-${index + 1}`} className="rounded-full bg-black px-3 py-2 text-xs font-black text-lime-300">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
