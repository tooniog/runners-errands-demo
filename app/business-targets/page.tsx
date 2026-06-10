
const categories = [
  ["Private club cafes", "Member/non-member complexity, controlled access and fulfilment confusion.", "Cafe OS Starter"],
  ["Cafes and bakeries", "Scattered orders, lunch rush, delivery confusion and repeat customer support.", "Cafe OS + Lunch Preorder OS + Bites AI"],
  ["Office lunch providers", "Late staff decisions, messy payments and tight delivery windows.", "Corporate Lunch OS"],
  ["Pharmacies", "Urgent delivery requests, payment confirmation and proof-of-delivery.", "Managed Delivery OS"],
  ["Estate supermarkets", "Resident WhatsApp orders, missed items and delivery window confusion.", "Managed Delivery OS"],
  ["Dry cleaners", "Pickup/dropoff coordination, payment tracking and garment proof.", "Laundry Pickup/Dropoff OS"],
  ["Florists", "Premium gifting requires timing, proof and recipient updates.", "Premium Gifting Dispatch"],
  ["Hospitals/clinics", "Medicine, samples and staff errands need traceability.", "Enterprise/Institution OS"],
  ["Schools/canteens", "Lunch choices, parent communication and pickup timing.", "Lunch Preorder OS"],
  ["Hotels/serviced apartments", "Guest errands, food runs, pharmacy runs and concierge follow-up.", "Hotel Guest Errand Agent"],
  ["Gyms/wellness cafes", "Healthy meals, smoothies and scheduled pickup.", "Lunch Preorder OS + Bites AI"],
];

export default function BusinessTargetsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          B2B Pilot Target Map
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Businesses in Ikoyi, VI and Lekki where Runnerbot 2 can solve order + fulfilment confusion.
        </h1>
        <p className="mt-5 max-w-3xl text-xl text-white/70">
          Any Lagos business with orders + fulfilment confusion is a Runnerbot 2 target.
        </p>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2">
        {categories.map(([category, pain, solution]) => (
          <div key={category} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              {solution}
            </p>
            <h2 className="mt-2 text-2xl font-black">{category}</h2>
            <p className="mt-3 text-zinc-700">
              <strong>Pain:</strong> {pain}
            </p>
            <p className="mt-2 text-zinc-700">
              <strong>Pricing:</strong> ₦150k–₦500k setup, ₦200k–₦750k monthly, plus per-order fees.
            </p>
            <p className="mt-3 font-black text-green-700">
              Sales angle: More completed orders, fewer missed requests, cleaner delivery and collection.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
