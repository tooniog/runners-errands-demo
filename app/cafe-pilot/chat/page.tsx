import Link from "next/link";
import CafeChatbot from "../../../components/cafe/CafeChatbot";

export default function CafeChatPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-6 text-black md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/cafe-pilot" className="font-black text-green-700">← Cafe Pilot</Link>
          <Link href="/cafe-pilot/order" className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
            Start order
          </Link>
        </div>

        <section className="mb-6 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Cafe concierge</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Ask Runnerbot 2 Cafe Concierge</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            Helpful, premium, Lagos-specific answers for member orders, non-member delivery, collection and special requests.
          </p>
        </section>

        <CafeChatbot />
      </div>
    </main>
  );
}
