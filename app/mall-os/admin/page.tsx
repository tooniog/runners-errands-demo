
const stats = [
  ["Today’s orders", "42"],
  ["Active orders", "11"],
  ["Preorders", "18"],
  ["Multi-store orders", "13"],
  ["Delivery revenue", "₦105,000"],
  ["Concierge revenue", "₦13,000"],
  ["Priority revenue", "₦8,000"],
  ["Estimated gross profit", "₦78,000"],
  ["E-bike utilisation", "82%"],
  ["Awaiting tenant approval", "6"],
  ["Top categories", "Food, Pharmacy, Gifts"],
  ["Peak demand window", "12:30–14:00"],
];

export default function MallAdminPage(){
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Mall Operations Command Centre</p>
        <h1 className="mt-4 text-4xl font-black md:text-7xl">Orders, preorders, tenants, e-bikes and daily intelligence.</h1>
      </section>
      <section className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map(([label,value]) => <div key={label} className="rounded-3xl bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>)}
      </section>
    </main>
  )
}
