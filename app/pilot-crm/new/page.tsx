
import Link from "next/link";
import PilotSignupForm from "../../../components/goldrush/PilotSignupForm";

export default function NewLeadPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-5xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
          Mall OS enquiry
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Submit a Mall OS pilot enquiry
        </h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Captures mall management, tenant, fleet, investor and advisor interest for the Runners Mall OS pilot system.
        </p>
        <Link href="/pilot-crm" className="mt-6 inline-flex rounded-full bg-lime-300 px-5 py-3 font-black text-black">
          Back to Mall OS CRM
        </Link>
      </section>

      <section className="mx-auto mt-8 max-w-5xl">
        <PilotSignupForm source="pilot_crm_mall_os_enquiry" />
      </section>
    </main>
  );
}
