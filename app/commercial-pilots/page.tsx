
import PilotSignupForm from "../../components/goldrush/PilotSignupForm";

const packages = [
  {
    title: "Package A: Cafe OS Starter",
    bestFor: "Cafes, bakeries, small restaurants, private club cafes",
    includes: [
      "Order form",
      "Staff approval queue",
      "Customer updates",
      "Delivery/collection flow",
      "Daily report",
      "Bites AI recommendation panel",
    ],
    pricing: [
      "Setup: ₦150,000–₦250,000",
      "Monthly: ₦200,000–₦350,000",
      "Per order: ₦300–₦500",
      "Delivery margin retained by Runners",
    ],
  },
  {
    title: "Package B: Lunch Preorder OS",
    bestFor: "Cafes, offices, clubs, school canteens",
    includes: [
      "Preorder windows",
      "Bites AI food recommendations",
      "Recurring lunch",
      "Corporate group orders",
      "Batch prep reports",
    ],
    pricing: [
      "Setup: ₦200,000–₦350,000",
      "Monthly: ₦250,000–₦500,000",
      "Per preorder: ₦200–₦400",
      "Corporate route fee available",
    ],
  },
  {
    title: "Package C: Corporate Lunch OS",
    bestFor: "Offices, banks, law firms, clinics, agencies, coworking spaces",
    includes: [
      "Group order links",
      "Office admin dashboard",
      "Budget per person",
      "Bites AI shortlist",
      "Vendor prep summary",
      "Batch delivery",
    ],
    pricing: [
      "Setup: ₦250,000–₦500,000",
      "Monthly: ₦350,000–₦750,000",
      "Per meal coordination: ₦150–₦300",
      "Delivery route fee: ₦3,000–₦15,000",
    ],
  },
  {
    title: "Package D: Managed Delivery OS",
    bestFor: "Pharmacies, supermarkets, florists, laundries",
    includes: [
      "Pickup/dropoff",
      "Proof-of-delivery",
      "Delivery fee calculator",
      "Customer updates",
      "Dispatch dashboard",
    ],
    pricing: [
      "Setup: ₦250,000–₦500,000",
      "Monthly: ₦300,000–₦700,000",
      "Per order: ₦300–₦700",
      "Delivery margin: ₦500–₦2,500/order",
    ],
  },
  {
    title: "Package E: Enterprise/Institution OS",
    bestFor: "Hotels, hospitals, schools, estates",
    includes: [
      "Custom workflows",
      "Approval layers",
      "Admin reporting",
      "Role-based access later",
      "Priority support",
    ],
    pricing: [
      "Setup: ₦500,000+",
      "Monthly: ₦750,000–₦1,500,000+",
      "Custom usage and SLA pricing",
    ],
  },
];

const risks = [
  ["Payment confusion", "Payment status tracking, human confirmation, bank transfer proof later, Paystack/Flutterwave later."],
  ["Wrong orders", "Staff approval, order summary confirmation, customer notes and menu availability check."],
  ["Delivery delays", "ETA ranges, route batching, e-bike/motorcycle assignment logic and proactive customer updates."],
  ["Private club access issues", "Controlled pickup point, no unauthorised club access, staff handoff and non-member delivery flow."],
  ["Food allergy/health risk", "Allergy notes, cafe confirmation, Bites AI disclaimer and no medical advice."],
  ["Rider trust", "Verified riders, OTP/proof-of-delivery, rider rating and delivery logs."],
  ["Operational overpromising", "Pilot language, human-in-the-loop, limited launch zones and clear success metrics."],
];

export default function CommercialPilotsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Commercial Pilot Packages
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Pilot-ready revenue packages for Lagos businesses.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-white/70">
          Bites AI decides. Runnerbot 2 fulfils. Runners Errands delivers.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 lg:grid-cols-2">
        {packages.map((pkg) => (
          <div key={pkg.title} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">{pkg.title}</h2>
            <p className="mt-2 text-sm font-bold text-green-700">
              Best for: {pkg.bestFor}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-black">Includes</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {pkg.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-black">Pricing</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {pkg.pricing.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <h2 className="text-3xl font-black">
          Why Runners wins private and operationally complex fulfilment
        </h2>
        <p className="mt-4 max-w-4xl text-white/70">
          Generic delivery platforms are strong for marketplace discovery, broad restaurant options,
          consumer app habit and public restaurant delivery. Runners Errands is not only a marketplace.
          It is an operating layer for businesses that need order clarity, fulfilment control and delivery intelligence.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            "Private club workflows",
            "Member vs non-member logic",
            "Human approval queues",
            "Lunch preorders",
            "Bites AI decision support",
            "Corporate lunch batching",
            "Custom delivery fee logic",
            "Proof-of-delivery",
            "Daily intelligence reports",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/80">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Risk mitigation</h2>
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
        <PilotSignupForm source="commercial_pilots_page" />
      </section>

      <section className="mx-auto mt-6 max-w-7xl">
        <p className="text-sm text-zinc-600">
          Pricing is indicative for pilot discussions and may vary based on order volume,
          operational complexity, delivery coverage and integration requirements.
        </p>
      </section>
    </main>
  );
}
