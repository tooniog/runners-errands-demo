
"use client";

import { useState } from "react";

const quick = [
  "What can I order from the mall?",
  "Help me choose lunch under ₦8,000",
  "Can I combine food and pharmacy?",
  "When is the quietest shopping time?",
  "Can I preorder and collect?",
  "How does priority delivery work?",
];

function reply(q) {
  const t = q.toLowerCase();
  if (t.includes("lunch")) return "For lunch, Bites AI can choose by budget, appetite and ready time. A strong default is Club sandwich + fresh juice, or Chicken salad + juice if you want lighter.";
  if (t.includes("combine") || t.includes("multi")) return "Yes. Mall OS is built for multi-store errands. Runnerbot 2 groups food, pharmacy, grocery, beauty, gifts and other items into one coordinated order.";
  if (t.includes("quiet")) return "Quiet times are usually outside lunch and weekend peaks. In the pilot, Mall OS will learn real demand windows from daily order data.";
  if (t.includes("priority")) return "Priority orders pay an extra fee for faster handling, clearer escalation and nearest available rider assignment.";
  return "Runnerbot 2 Mall Concierge helps with food choices, store categories, multi-store errands, preorders, collection, delivery, budget bundles and priority requests.";
}

export default function ConciergePage() {
  const [messages, setMessages] = useState([{ role: "bot", text: "Welcome to Runnerbot 2 Mall Concierge. Ask about food, stores, preorders, delivery, collection or multi-store errands." }]);
  const [input, setInput] = useState("");

  function ask(text) {
    const q = text || input;
    if (!q.trim()) return;
    setMessages((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply(q) }]);
    setInput("");
  }

  return (
    <main className="min-h-screen bg-[#f7faf7] px-5 py-8 text-black md:px-10">
      <section className="mx-auto max-w-5xl rounded-[2.5rem] bg-black p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">Runnerbot 2 Mall Concierge</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Ask the mall operating assistant.</h1>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[2rem] bg-white p-5 shadow-xl">
          <div className="min-h-[420px] space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm ${m.role === "bot" ? "bg-zinc-100" : "ml-auto bg-green-600 text-white"}`}>{m.text}</div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 rounded-full border px-4 py-3" placeholder="Ask Runnerbot 2..." />
            <button onClick={() => ask(input)} className="rounded-full bg-black px-5 py-3 font-black text-lime-300">Ask</button>
          </div>
        </div>
        <div className="rounded-[2rem] bg-black p-5 text-white">
          <p className="font-black text-lime-300">Quick asks</p>
          <div className="mt-4 grid gap-2">
            {quick.map((q) => <button key={q} onClick={() => ask(q)} className="rounded-2xl bg-white/10 p-3 text-left text-sm font-bold">{q}</button>)}
          </div>
        </div>
      </section>
    </main>
  );
}
