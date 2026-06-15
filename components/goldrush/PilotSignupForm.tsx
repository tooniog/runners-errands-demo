
"use client";

import { FormEvent, useState } from "react";

const packages = [
  "Mall OS Pilot",
  "Mall Tenant Delivery Layer",
  "Lunch Preorder OS",
  "Multi-Store Errand OS",
  "Mall Analytics + Promotions",
  "Enterprise Mall Network",
];

const categories = [
  "Mall management",
  "Mall tenant",
  "Restaurant / food tenant",
  "Grocery / supermarket tenant",
  "Pharmacy / health tenant",
  "Beauty / salon tenant",
  "Fashion tenant",
  "Electronics tenant",
  "Cinema / entertainment",
  "Anchor tenant",
  "Investor / fleet partner",
  "Other",
];

const areas = [
  "Lekki",
  "The Palms / Lekki",
  "Circle Mall / Lekki",
  "Lennox Mall / Lekki",
  "Novare Lekki",
  "VI",
  "Ikoyi",
  "Other Lagos retail cluster",
];

type Status = "idle" | "loading" | "success" | "error";

export default function PilotSignupForm({
  compact = false,
  source = "mall_os_pilot_signup",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    organisationName: "",
    category: "Mall management",
    area: "The Palms / Lekki",
    contactPerson: "",
    phone: "",
    email: "",
    website: "",
    desiredPackage: "Mall OS Pilot",
    painPoint: "",
    estimatedOrders: "",
    preferredPilot: "14–30 day proposed pilot",
    notes: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function saveLocal() {
    const key = "runners_mall_os_signups_v1";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const record = {
      ...form,
      source,
      createdAt: new Date().toISOString(),
      status: "New Mall OS enquiry",
    };
    localStorage.setItem(key, JSON.stringify([record, ...existing]));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      saveLocal();

      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_PILOT_URL;

      if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
        setStatus("success");
        setMessage("Saved locally for demo. Add NEXT_PUBLIC_FORMSPREE_PILOT_URL to send this into Formspree.");
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
          submittedAt: new Date().toISOString(),
          platform: "Runners Mall OS",
          strategicLine: "Runners Mall OS turns a physical mall into a digital commerce, preorder, AI concierge and e-bike delivery hub.",
          ecosystemLine: "Bites AI decides. Runnerbot 2 fulfils. Runners Errands delivers.",
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      setStatus("success");
      setMessage("Mall OS enquiry received. Runners Errands will review and follow up with the right pilot route.");
      setForm({
        organisationName: "",
        category: "Mall management",
        area: "The Palms / Lekki",
        contactPerson: "",
        phone: "",
        email: "",
        website: "",
        desiredPackage: "Mall OS Pilot",
        painPoint: "",
        estimatedOrders: "",
        preferredPilot: "14–30 day proposed pilot",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Saved locally, but Formspree did not receive it. Check NEXT_PUBLIC_FORMSPREE_PILOT_URL and try again.");
    }
  }

  return (
    <section className="rounded-[2rem] border border-lime-200 bg-lime-50 p-5 shadow-sm md:p-8">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">
          Mall OS pilot enquiry
        </p>
        <h2 className="mt-2 text-3xl font-black text-black">
          Request a Runners Mall OS pilot discussion
        </h2>
        {!compact && (
          <p className="mt-3 max-w-3xl text-zinc-700">
            For malls, anchor tenants, restaurants, groceries, pharmacies, beauty, fashion, electronics,
            cinema/entertainment and retail clusters that want AI concierge, preorder, multi-store errands and e-bike delivery.
          </p>
        )}
      </div>

      {message && (
        <div className={`mb-5 rounded-3xl p-4 text-sm font-bold ${status === "error" ? "bg-red-50 text-red-700" : "bg-white text-green-800"}`}>
          {message}
        </div>
      )}

      <form onSubmit={submit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            value={form.organisationName}
            onChange={(e) => update("organisationName", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Mall / tenant / organisation name"
          />
          <input
            required
            value={form.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Contact person"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <select value={form.category} onChange={(e) => update("category", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>

          <select value={form.area} onChange={(e) => update("area", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black">
            {areas.map((item) => <option key={item}>{item}</option>)}
          </select>

          <select value={form.desiredPackage} onChange={(e) => update("desiredPackage", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black">
            {packages.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600" placeholder="Phone / WhatsApp" />
          <input value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600" placeholder="Email" />
          <input value={form.website} onChange={(e) => update("website", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600" placeholder="Website / Instagram" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.estimatedOrders} onChange={(e) => update("estimatedOrders", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600" placeholder="Estimated orders/day or tenant count" />
          <select value={form.preferredPilot} onChange={(e) => update("preferredPilot", e.target.value)} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black">
            <option>14–30 day proposed pilot</option>
            <option>Demo first</option>
            <option>Tenant onboarding discussion</option>
            <option>E-bike fleet/funding discussion</option>
            <option>Mall management proposal review</option>
            <option>Investor/advisor discussion</option>
          </select>
        </div>

        <textarea
          required
          value={form.painPoint}
          onChange={(e) => update("painPoint", e.target.value)}
          className="min-h-24 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
          placeholder="What mall, tenant, ordering, preorder, delivery, collection or customer experience problem should Mall OS solve?"
        />

        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className="min-h-20 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
          placeholder="Extra notes: tenant categories, pickup point, QR signage, warm intro, fleet interest, pilot constraints..."
        />

        <button disabled={status === "loading"} className="rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 disabled:opacity-60">
          {status === "loading" ? "Submitting Mall OS enquiry..." : "Submit Mall OS enquiry"}
        </button>

        <p className="text-xs text-zinc-600">
          This demo stores a local backup in your browser. With Formspree configured, submissions are also sent to your Formspree inbox.
        </p>
      </form>
    </section>
  );
}
