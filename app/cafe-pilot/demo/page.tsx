import Link from "next/link";
import CafeDemoFlow from "../../../components/cafe/CafeDemoFlow";

export default function CafeDemoPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-6 text-black md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/cafe-pilot" className="font-black text-green-700">← Cafe Pilot</Link>
          <div className="flex gap-2">
            <Link href="/cafe-pilot/order" className="rounded-full border bg-white px-4 py-2 text-sm font-black">
              Create order
            </Link>
            <Link href="/cafe-pilot/economics" className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
              Economics
            </Link>
          </div>
        </div>

        <CafeDemoFlow />
      </div>
    </main>
  );
}
