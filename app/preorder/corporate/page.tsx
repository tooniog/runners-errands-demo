
const features = [
  "Office group order link",
  "Lunch cutoff time",
  "Team member selections",
  "Budget per person",
  "Dietary notes",
  "Department grouping",
  "Bites AI shortlist",
  "Vendor prep report",
  "Batch delivery route",
  "Corporate invoice summary",
  "Repeat weekly order",
  "Admin approval",
];

export default function CorporateLunchPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Corporate Lunch Preorder OS
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Group lunch without the group chaos.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-white/70">
          For offices, teams, coworking spaces, agencies, law firms, clinics and banks in Ikoyi, VI and Lekki.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black">Why corporate lunch needs Runnerbot 2</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          Office lunch is repetitive but chaotic. Staff decide late, payments are messy, delivery windows are tight,
          and vendors struggle to batch orders. Corporate Lunch OS turns it into a controlled recurring workflow.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl bg-lime-50 p-4 font-bold text-black">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl">
          <h2 className="text-3xl font-black">Corporate order form</h2>
          <p className="mt-2 text-zinc-600">
            Demo module only. Ready for client review and future database/payment integration.
          </p>

          <form className="mt-6 grid gap-4">
            <input className="rounded-2xl border px-4 py-3" placeholder="Company name" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Admin/contact person" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Phone/email" />

            <select className="rounded-2xl border bg-white px-4 py-3">
              <option>Ikoyi</option>
              <option>VI</option>
              <option>Lekki Phase 1</option>
              <option>Other</option>
            </select>

            <input className="rounded-2xl border px-4 py-3" placeholder="Number of meals" defaultValue="30" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Budget per person" defaultValue="8000" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Delivery window" defaultValue="12:30–13:00" />

            <select className="rounded-2xl border bg-white px-4 py-3">
              <option>Invoice</option>
              <option>Corporate account</option>
              <option>Bank transfer</option>
            </select>

            <textarea className="min-h-24 rounded-2xl border px-4 py-3" placeholder="Dietary notes / preferred cuisine / venue" />

            <button className="rounded-full bg-green-600 px-6 py-4 font-black text-white">
              Generate corporate lunch plan
            </button>
          </form>
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl">
          <h2 className="text-3xl font-black">Default economics</h2>
          <div className="mt-6 grid gap-3">
            {[
              "30 meals per office",
              "₦8,000 average basket",
              "₦250 coordination fee per meal",
              "₦7,500 route delivery fee",
              "₦50,000 monthly corporate account fee",
              "If repeated 3x/week, this becomes recurring logistics revenue",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-white/80">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-lime-300 p-5 text-black">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Runnerbot 2 value</p>
            <p className="mt-2 text-2xl font-black">
              One office lunch habit can become weekly GMV, service fees, delivery margin and SaaS revenue.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
