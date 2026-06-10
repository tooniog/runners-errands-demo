
"use client";

import { FormEvent, useState } from "react";

const packages = [
  "Cafe OS Starter",
  "Lunch Preorder OS",
  "Corporate Lunch OS",
  "Managed Delivery OS",
  "Pharmacy Dispatch OS",
  "Laundry Pickup/Dropoff OS",
  "Premium Gifting Dispatch",
  "Hotel Guest Errand Agent",
  "Enterprise/Institution OS",
];

const categories = [
  "Private club cafe",
  "Cafe / bakery",
  "Restaurant",
  "Office lunch provider",
  "Pharmacy",
  "Estate supermarket",
  "Laundry",
  "Florist",
  "School / canteen",
  "Clinic / hospital",
  "Hotel / serviced apartment",
  "Gym / wellness cafe",
  "Other",
];

const areas = ["Ikoyi", "VI", "Lekki Phase 1", "Banana Island", "Parkview", "Osborne", "Other"];

type Status = "idle" | "loading" | "success" | "error";

export default function PilotSignupForm({
  compact = false,
  source = "commercial_pilot_signup",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    businessName: "",
    category: "Cafe / bakery",
    area: "Ikoyi",
    contactPerson: "",
    phone: "",
    email: "",
    instagramWebsite: "",
    desiredPackage: "Cafe OS Starter",
    painPoint: "",
    estimatedOrders: "",
    preferredPilot: "14-day paid pilot",
    notes: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function saveLocal() {
    const key = "runners_pilot_signups_v1";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const record = {
      ...form,
      source,
      createdAt: new Date().toISOString(),
      status: "New pilot enquiry",
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
          platform: "Runners Errands Goldrush Pilot Platform",
          strategicLine: "Any Lagos business with orders + fulfilment confusion is a Runnerbot 2 target.",
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      setStatus("success");
      setMessage("Pilot enquiry received. Runners Errands will review the business and follow up with the right pilot package.");
      setForm({
        businessName: "",
        category: "Cafe / bakery",
        area: "Ikoyi",
        contactPerson: "",
        phone: "",
        email: "",
        instagramWebsite: "",
        desiredPackage: "Cafe OS Starter",
        painPoint: "",
        estimatedOrders: "",
        preferredPilot: "14-day paid pilot",
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
          Pilot signup
        </p>
        <h2 className="mt-2 text-3xl font-black text-black">
          Request a Runners Errands pilot
        </h2>
        {!compact && (
          <p className="mt-3 max-w-3xl text-zinc-700">
            For cafes, private clubs, offices, pharmacies, estate supermarkets, florists, laundries, schools,
            hotels and Lagos businesses with order + fulfilment confusion.
          </p>
        )}
      </div>

      {message && (
        <div
          className={`mb-5 rounded-3xl p-4 text-sm font-bold ${
            status === "error"
              ? "bg-red-50 text-red-700"
              : "bg-white text-green-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={submit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            value={form.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Business name"
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
          <select
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={form.area}
            onChange={(e) => update("area", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
          >
            {areas.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={form.desiredPackage}
            onChange={(e) => update("desiredPackage", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
          >
            {packages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Phone / WhatsApp"
          />
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Email"
          />
          <input
            value={form.instagramWebsite}
            onChange={(e) => update("instagramWebsite", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Instagram / website"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            value={form.estimatedOrders}
            onChange={(e) => update("estimatedOrders", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Estimated orders/day, e.g. 20"
          />
          <select
            value={form.preferredPilot}
            onChange={(e) => update("preferredPilot", e.target.value)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
          >
            <option>14-day paid pilot</option>
            <option>30-day pilot</option>
            <option>60-day pilot</option>
            <option>Demo first</option>
            <option>Partnership discussion</option>
          </select>
        </div>

        <textarea
          required
          value={form.painPoint}
          onChange={(e) => update("painPoint", e.target.value)}
          className="min-h-24 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
          placeholder="What order, fulfilment, delivery, payment or customer update problem should Runnerbot 2 solve?"
        />

        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className="min-h-20 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-green-600"
          placeholder="Extra notes, preferred timing, decision maker, warm intro, special workflow..."
        />

        <button
          disabled={status === "loading"}
          className="rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting pilot enquiry..." : "Submit pilot enquiry"}
        </button>

        <p className="text-xs text-zinc-600">
          This demo stores a local backup in your browser. With Formspree configured, submissions are also sent to your Formspree inbox.
        </p>
      </form>
    </section>
  );
}
