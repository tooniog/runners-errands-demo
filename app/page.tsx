import Link from "next/link";
import {
  Bike,
  Building2,
  Carrot,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  Pill,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Utensils,
  Zap,
  type LucideIcon,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";
import MetricCard from "@/components/MetricCard";
import { launchZones } from "@/lib/mockData";

const services = [
  {
    title: "Food Delivery",
    text: "Restaurant pickups, lunch runs and daily food movement across Lagos.",
    icon: Utensils,
  },
  {
    title: "Groceries",
    text: "Supermarket runs and household essentials delivered with clear updates.",
    icon: ShoppingBag,
  },
  {
    title: "Pharmacy Runs",
    text: "Fast, trusted pharmacy pickups with proof and support escalation.",
    icon: Pill,
  },
  {
    title: "Parcel Pickup / Drop-off",
    text: "Documents, packages and SME fulfilment across key Lagos zones.",
    icon: Package,
  },
  {
    title: "Premium Produce",
    text: "Imported fruits and vegetables through our founding produce partner.",
    icon: Carrot,
  },
  {
    title: "B2B / Corporate Runs",
    text: "Recurring office, vendor and business logistics with proof-of-delivery.",
    icon: Building2,
  },
];

const trustFeatures = [
  "Live tracking",
  "Verified riders",
  "OTP proof-of-delivery",
  "Transparent fees",
  "Fast support",
  "Electric bike fleet option",
];

const investorMetrics = [
  ["Waitlist", "5,000"],
  ["Riders", "60–80"],
  ["Restaurants", "30"],
  ["Pharmacies", "15"],
  ["Supermarkets", "8"],
  ["MVP deliveries", "300–1,000"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <section className="mx-auto max-w-7xl px-5 py-8 md:py-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-[#081f52] to-[#0f4f2f] px-6 py-10 shadow-2xl md:px-10 md:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative z-10 max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-300 backdrop-blur">
              <Zap size={15} />
              Lagos errands platform • Powered by Runnerbot 2
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Runners Errands
            </h1>

            <p className="mt-4 text-3xl font-black tracking-tight text-lime-300 md:text-5xl">
              Tap. Track. Delivered.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">
              Food, groceries, pharmacy and parcels across Lagos — powered by
              Runnerbot 2. Built for trust, speed, proof and AI-powered
              convenience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl bg-lime-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl"
              >
                Book an Errand
              </Link>

              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
              >
                Join Waitlist
              </Link>

              <Link
                href="/investors"
                className="inline-flex items-center justify-center rounded-2xl border border-lime-300/40 bg-transparent px-6 py-3 text-sm font-black text-lime-300 transition hover:-translate-y-0.5 hover:bg-lime-300/10 hover:shadow-xl"
              >
                Investor Mode
              </Link>
            </div>

            <p className="mt-8 max-w-2xl text-sm font-bold leading-7 text-slate-200">
              Trust is the product. Convenience is the feature. Speed is the
              proof.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {launchZones.map((zone) => (
              <div
                key={zone}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur"
              >
                {zone}
              </div>
            ))}
          </div>
        </section>

        {/* METRICS */}
        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <MetricCard
            label="Waitlist target"
            value="5,000"
            note="Early demand proof"
          />
          <MetricCard
            label="Launch riders"
            value="60–80"
            note="Bike + e-bike fleet"
          />
          <MetricCard
            label="Restaurants target"
            value="30"
            note="Food delivery wedge"
          />
          <MetricCard
            label="Concierge MVP"
            value="300–1,000"
            note="Initial delivery target"
          />
        </section>

        {/* SERVICES */}
        <section className="mt-20">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Food, groceries, pharmacy and parcels — all in one Lagos errands
              platform.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              From premium produce to urgent parcels, Runners Errands makes
              Lagos move.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                text={service.text}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        {/* WHY LAGOS + TRUST */}
        <section className="mt-20 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[32px] bg-slate-950 p-7 text-white shadow-xl md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">
              Why Lagos needs this
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Built for Lagos. Designed for daily dependence.
            </h2>

            <div className="mt-8 grid gap-3">
              {[
                "Lagos traffic wastes time.",
                "Customers need trust and proof.",
                "Businesses need reliable last-mile logistics.",
                "Runners Errands unifies everything in one platform.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold text-slate-100"
                >
                  <CheckCircle2 size={20} className="text-lime-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
              Trust features
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Verified riders. Live tracking. Proof-of-delivery.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                >
                  <ShieldCheck className="text-lime-600" size={22} />
                  <span className="font-black text-slate-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDING WEDGE */}
        <section className="mt-20 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Founding wedge
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Premium imported produce + electric fleet advantage.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Electric fleet ready for cleaner, lower-cost deliveries. The
                initial operational wedge is a premium imported produce partner
                with supply in VI, Ikoyi and Lekki.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center rounded-2xl bg-lime-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-200"
                >
                  View Partner Page
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  Create Produce Request
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <ProofCard
                icon={Carrot}
                title="Premium produce"
                text="Imported fruits and vegetables."
              />
              <ProofCard
                icon={Bike}
                title="E-bike fleet"
                text="Cleaner, lower-cost delivery."
              />
              <ProofCard
                icon={MapPin}
                title="Island launch"
                text="VI, Ikoyi and Lekki first."
              />
            </div>
          </div>
        </section>

        {/* INVESTOR PROOF */}
        <section className="mt-20">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
              Investor proof
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Demo metrics that show the launch logic.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The wedge is clear: prove concierge demand, activate dense Lagos
              zones, onboard partners, then scale supply and automation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {investorMetrics.map(([label, value]) => (
              <MetricCard key={label} label={label} value={value} />
            ))}
          </div>
        </section>

        {/* ROUTE PREVIEW */}
        <section className="mt-20 grid gap-4 lg:grid-cols-3">
          <DemoRouteCard
            icon={Clock}
            title="Customer flow"
            text="Submit a request, generate an order ID, assign a rider and track ETA."
            href="/book"
            button="Book demo order"
          />
          <DemoRouteCard
            icon={Truck}
            title="Tracking flow"
            text="Show order status, OTP, rider, ETA range and proof-of-delivery logic."
            href="/track/demo"
            button="View tracking"
          />
          <DemoRouteCard
            icon={Sparkles}
            title="Investor flow"
            text="Open the business model, growth plan, partner advantage and seed story."
            href="/investors"
            button="Open investor mode"
          />
        </section>

        {/* FINAL CTA */}
        <section className="mt-20 rounded-[32px] bg-slate-950 p-7 text-white shadow-xl md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">
                Ready for investor demo
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                See the working product flow.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Customer booking, live tracking, admin dashboard, rider
                dashboard, founding partner catalogue, investor mode and
                Runnerbot 2 concierge.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl bg-lime-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-lime-200"
              >
                Book demo order
              </Link>
              <Link
                href="/track/demo"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              >
                View tracking
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20"
              >
                Open admin dashboard
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function ProofCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-slate-950">
        <Icon size={23} />
      </div>
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function DemoRouteCard({
  icon: Icon,
  title,
  text,
  href,
  button,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  button: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lime-300">
        <Icon size={23} />
      </div>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
      >
        {button}
      </Link>
    </div>
  );
}