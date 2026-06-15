
import Link from "next/link";

export default function CafePilotArchivePage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-5xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Cafe OS archived</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Cafe OS has been merged into Runners Mall OS.
        </h1>
        <p className="mt-5 max-w-3xl text-white/70">
          The cafe concept now lives as the Food & Restaurant Tenant Module inside Mall OS, alongside lunch preorder,
          Bites AI, multi-store errands, tenant approval and e-bike delivery.
        </p>
        <Link href="/mall-os" className="mt-8 inline-flex rounded-full bg-lime-300 px-6 py-4 font-black text-black">
          Go to Runners Mall OS
        </Link>
      </section>
    </main>
  );
}
