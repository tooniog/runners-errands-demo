
import Link from "next/link";
import FundingSimulator from "../../components/funding/FundingSimulator";
import {
  bikeSpecs,
  campaignConcepts,
  copySections,
  deckSlides,
  fallbackCards,
  investorOptions,
  leanFunds,
  marketingBudget,
  marketingMetrics,
  marketingPrinciples,
  plan,
  preferredFunds,
  procurementChecklist,
  qas,
  riderRequirements,
  riderScorecard,
  riderScreening,
  riderTraining,
  risks,
  whyThisBike,
} from "../../lib/fundingRoomData";

export const metadata = {
  title: "Funding Room | Runners Mall OS",
  description: "Investor-ready funding room for Runners Errands / Runners Mall OS pilot funding.",
};

function ngn(value: number): string {
  return `₦${value.toLocaleString()}`;
}

function total(rows: { amount: number }[]): number {
  return rows.reduce((sum, row) => sum + row.amount, 0);
}

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl bg-zinc-50 p-4 text-sm font-bold text-zinc-700">
          {item}
        </div>
      ))}
    </div>
  );
}

function FundTable({ rows }: { rows: { category: string; amount: number; detail: string }[] }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
              <th className="px-4 py-3">Use</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category} className="border-b">
                <td className="px-4 py-4 font-black">{row.category}</td>
                <td className="px-4 py-4 font-black text-green-700">{ngn(row.amount)}</td>
                <td className="px-4 py-4 text-zinc-700">{row.detail}</td>
              </tr>
            ))}
            <tr className="bg-black text-white">
              <td className="px-4 py-4 font-black">Total</td>
              <td className="px-4 py-4 font-black text-lime-300">{ngn(total(rows))}</td>
              <td className="px-4 py-4 text-white/70">Investor-ready funding assumption, subject to verification and agreement.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FundingRoomPage() {
  const summaryCards = [
    ["Preferred ask", "₦18,000,000"],
    ["Lean ask", "₦15,000,000"],
    ["Selected fleet", "4 Spiro Ekon 450 M3"],
    ["Bike acquisition cost", "₦7,400,000"],
    ["Pilot target", "30–50 orders/day"],
    ["Multi-store target", "20–30%"],
    ["Pilot duration", "14–30 days"],
    ["Fallback", "Office OS + Estate OS"],
  ];

  const pilotDesign = [
    "14–30 day proposed pilot",
    "4 e-bikes",
    "7–10 participating tenants",
    "One controlled pickup/handoff point",
    "QR/web ordering",
    "Runnerbot 2 concierge",
    "Bites AI food decision support",
    "Lunch preorder",
    "Multi-store delivery",
    "Tenant approval queue",
    "Daily reports",
    "30–50 orders/day base pilot target",
    "20–30% multi-store order target",
  ];

  const unitEconomics = [
    ["Average delivery fee", "₦2,500"],
    ["Delivery cost/order", "₦1,200"],
    ["Delivery gross profit/order", "₦1,300"],
    ["Weighted multi-store fee", "30% × ₦1,000"],
    ["Weighted priority fee", "20% × ₦1,000"],
    ["Weighted large/special fee", "10% × ₦2,000"],
    ["Base contribution logic", "₦1,300 + weighted fees ≈ ₦2,000/order"],
    ["Break-even logic", "Approx. 25 orders/day for 12-month ₦18m recovery before central overhead"],
  ];

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Runners Errands / Runners Mall OS Funding Room
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Investor-ready pilot funding layer for Lagos mall fulfilment density.
        </h1>
        <p className="mt-5 max-w-4xl text-xl text-white/70">
          Runners Errands is seeking ₦18m preferred, or ₦15m lean, to acquire a tested 4-bike electric fleet,
          onboard riders, launch Runners Mall OS, activate marketing and generate proof for scaling into more malls,
          Office OS and Estate OS.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mall-os" className="rounded-full bg-lime-300 px-6 py-4 font-black text-black">Open Mall OS</Link>
          <Link href="/mall-os/simulation" className="rounded-full bg-white px-6 py-4 font-black text-black">Mall simulator</Link>
          <Link href="/investors" className="rounded-full border border-white/20 px-6 py-4 font-black text-white">Investor view</Link>
        </div>
        <p className="mt-6 max-w-4xl text-sm text-white/50">
          Honesty note: this Funding Room uses proposed pilot language. Mall approval, tenant approval and revenue are not claimed unless signed or verified.
          Supplier quotation/pro forma invoice for the selected fleet should be treated as requested/pending unless uploaded.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {summaryCards.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">1. Executive Summary</p>
          <h2 className="mt-2 text-3xl font-black">One mall. Many stores. One delivery.</h2>
          <p className="mt-4 text-zinc-700">
            Runners Errands is building Runners Mall OS: an AI concierge, lunch preorder, multi-store errand,
            collection, reservation and e-bike delivery operating platform for Lagos malls. The first commercial wedge
            is mall-wide fulfilment because one mall can create dense order flow, many tenant use cases and clear customer acquisition paths.
          </p>
          <p className="mt-4 text-zinc-700">
            The pilot funding is tied to a defined commercial wedge: acquire a 4-bike electric fleet, onboard vetted riders,
            launch the first controlled Mall OS pilot, activate marketing and produce proof for more malls. If mall approval delays,
            the same fleet and platform can serve Office OS and Estate OS.
          </p>
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">2. Funding Ask</p>
          <h2 className="mt-2 text-4xl font-black">₦18m preferred</h2>
          <p className="mt-3 text-white/70">Lean ask: ₦15m. Preferred ask provides stronger marketing and operating resilience.</p>
          <div className="mt-6 grid gap-3">
            {["Fleet acquisition", "Rider onboarding", "Marketing launch", "Software polish", "Legal/admin", "Operations float", "Contingency"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">3. Why Mall OS</p>
        <h2 className="mt-2 text-3xl font-black">The mall is the commercial wedge.</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            "Malls create dense fulfilment hubs",
            "One mall approval unlocks many tenants",
            "Customers already trust malls",
            "Multi-store errands are easier from one location",
            "Lunch preorder creates repeat behaviour",
            "E-bike delivery makes fulfilment visible and efficient",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-lime-50 p-4 font-bold text-zinc-800">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">4. Pilot Design</p>
        <h2 className="mt-2 text-3xl font-black">Proposed first pilot structure</h2>
        <div className="mt-5">
          <BulletGrid items={pilotDesign} />
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">5. Fleet Procurement Readiness</p>
          <h2 className="mt-2 text-3xl font-black">Spiro Ekon 450 M3</h2>
          <div className="mt-5 grid gap-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">Unit price</p>
              <p className="text-2xl font-black text-lime-300">₦1,850,000</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">Quantity</p>
              <p className="text-2xl font-black text-lime-300">4 bikes</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">Total bike acquisition cost</p>
              <p className="text-2xl font-black text-lime-300">₦7,400,000</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">Status</p>
              <p className="font-bold">Founder physically tested. Supplier quotation/pro forma invoice requested or pending unless uploaded.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-black">Bike specifications</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {bikeSpecs.map((spec) => (
              <div key={spec.title} className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{spec.title}</p>
                <p className="mt-1 font-black">{spec.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-2xl font-black">Why this bike</h3>
          <div className="mt-4">
            <BulletGrid items={whyThisBike} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Procurement checklist</h2>
        <div className="mt-5">
          <BulletGrid items={procurementChecklist} />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">6. Use of Funds — Preferred ₦18m</p>
        <h2 className="mt-2 text-3xl font-black">Preferred funding plan</h2>
        <div className="mt-5">
          <FundTable rows={preferredFunds} />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">7. Lean Ask — ₦15m</p>
        <h2 className="mt-2 text-3xl font-black">Viable, but lean</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          ₦15m is viable but lean. ₦18m is preferred because it gives stronger marketing power, rider support,
          legal/admin readiness and operational resilience.
        </p>
        <div className="mt-5">
          <FundTable rows={leanFunds} />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">8. Financial Model / Simulator</p>
        <div className="mt-5">
          <FundingSimulator />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">9. Unit Economics</p>
        <h2 className="mt-2 text-3xl font-black">Contribution logic</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {unitEconomics.map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
              <p className="mt-2 font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">10. Rider Onboarding and Due Diligence SOP</p>
        <h2 className="mt-2 text-3xl font-black">Rider quality is investor protection.</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-black">Requirements</h3>
            <div className="mt-3"><BulletGrid items={riderRequirements} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Screening</h3>
            <div className="mt-3"><BulletGrid items={riderScreening} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Training</h3>
            <div className="mt-3"><BulletGrid items={riderTraining} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Scorecard</h3>
            <div className="mt-3"><BulletGrid items={riderScorecard} /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">11. Marketing Launch Plan</p>
        <h2 className="mt-2 text-3xl font-black">₦3m base launch campaign</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-black">Principles</h3>
            <div className="mt-3"><BulletGrid items={marketingPrinciples} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Campaign concepts</h3>
            <div className="mt-3"><BulletGrid items={campaignConcepts} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Budget buckets</h3>
            <div className="mt-3"><BulletGrid items={marketingBudget} /></div>
          </div>
          <div>
            <h3 className="text-xl font-black">Track</h3>
            <div className="mt-3"><BulletGrid items={marketingMetrics} /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">12. Risk Mitigation</p>
        <h2 className="mt-2 text-3xl font-black">Risk-aware, not hype-led.</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk.title} className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-black">{risk.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{risk.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">13. Investor Return / Repayment Options</p>
        <h2 className="mt-2 text-3xl font-black">Subject to legal review</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {investorOptions.map((option) => (
            <div key={option.title} className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-black text-lime-300">{option.title}</h3>
              <p className="mt-2 text-sm text-white/70">{option.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">14. Fallback Strategy</p>
        <h2 className="mt-2 text-3xl font-black">Not dependent on one mall.</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          Same fleet. Same platform. Same Runnerbot 2. Same Bites AI. Same delivery economics.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {fallbackCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-lime-50 p-5">
              <h3 className="text-xl font-black">{card.title}</h3>
              <p className="mt-2 text-zinc-700">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">15. 30/60/90 Day Plan</p>
        <h2 className="mt-2 text-3xl font-black">Capital to execution timeline</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {plan.map((item) => (
            <div key={item.title} className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">16. Investor Q&A</p>
        <h2 className="mt-2 text-3xl font-black">Hard questions answered directly.</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {qas.map((qa) => (
            <div key={qa.question} className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-black">{qa.question}</h3>
              <p className="mt-2 text-sm text-zinc-700">{qa.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">17. Pitch Deck Content</p>
        <h2 className="mt-2 text-3xl font-black">12-slide investor deck outline</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {deckSlides.map((slide) => (
            <div key={slide.no} className="rounded-2xl bg-white/10 p-5">
              <p className="text-xs font-black uppercase tracking-wide text-lime-300">{slide.no}</p>
              <h3 className="mt-2 text-xl font-black">{slide.title}</h3>
              <p className="mt-2 text-sm text-white/70">{slide.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">18. Downloadable / Copy Sections</p>
        <h2 className="mt-2 text-3xl font-black">Investor pack copy blocks</h2>
        <div className="mt-5 grid gap-4">
          {copySections.map((section) => (
            <div key={section.title} className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="text-xl font-black">{section.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm text-zinc-700">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-lime-200 bg-lime-50 p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-black">Investor demo flow</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            "1. Homepage",
            "2. /mall-os",
            "3. /mall-os/simulation",
            "4. /funding-room",
            "5. Fleet procurement",
            "6. Use of funds",
            "7. Financial model",
            "8. Risk controls",
            "9. Investor options",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-4 font-black">{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
