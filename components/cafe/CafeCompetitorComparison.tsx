import Link from "next/link";

const generic = [
  "Strong for public restaurant discovery",
  "Broad customer marketplace",
  "Less customised for private club rules",
  "Less human-in-the-loop approval",
  "Less custom pickup/collection logic",
  "Less direct operational intelligence for the cafe",
];

const runners = [
  "Built for controlled-access locations",
  "Handles non-member orders without breaking club rules",
  "Staff approval queue",
  "Delivery fee calculator",
  "E-bike dispatch option",
  "Proof-of-delivery",
  "Daily reports",
  "Special request chatbot",
  "Can later connect to WhatsApp, payments and POS",
  "Works as a private operating layer, not just a marketplace listing",
];

export default function CafeCompetitorComparison() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-black p-6 text-white shadow-2xl md:p-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
          Strategic difference
        </p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">
          Why this is different from generic delivery apps
        </h2>
        <p className="mt-3 text-white/70">
          Marketplaces help restaurants get discovered. Runnerbot 2 Cafe OS helps controlled-access
          cafes operate cleanly, protect the venue, confirm payments, manage fulfilment and keep customers updated.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-black">Generic marketplace apps</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {generic.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/30" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-lime-300/30 bg-lime-300/10 p-5">
          <h3 className="text-xl font-black text-lime-200">Runners Cafe OS</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {runners.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/cafe-pilot/demo"
            className="mt-6 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-black text-black"
          >
            Run live demo flow
          </Link>
        </div>
      </div>
    </section>
  );
}
