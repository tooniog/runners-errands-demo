
export default function LeadDetailPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
          Pilot lead detail
        </p>
        <h1 className="mt-4 text-4xl font-black">
          Business target profile
        </h1>
        <p className="mt-3 text-zinc-700">
          Demo detail page. Production version will load the selected CRM lead from Supabase/Postgres or localStorage.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Package", "Cafe OS Starter"],
            ["Status", "Target / not contacted"],
            ["Setup", "₦150,000+"],
            ["Monthly", "₦200,000+"],
            ["Per order", "₦300–₦500"],
            ["Next step", "Book demo"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl bg-zinc-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</p>
              <p className="mt-1 font-black text-black">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
