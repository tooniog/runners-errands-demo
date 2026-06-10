"use client";

import { FormEvent, useState } from "react";
import { generateCafeChatbotReply } from "../../lib/cafeRunnerbot";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const starterQuestions = [
  "Can non-members order from the cafe?",
  "Can I collect at the gate?",
  "Can you deliver to Lekki?",
  "Can I pay by transfer?",
  "Can I schedule an order?",
  "Can I place a corporate lunch order?",
  "Can I order premium produce too?",
];

export default function CafeChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to Runnerbot 2 Cafe Concierge. I can explain member orders, non-member delivery, controlled collection, payments, ETA updates, special requests and pilot operations.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(message: string) {
    const clean = message.trim();
    if (!clean) return;

    setMessages((current) => [...current, { role: "user", content: clean }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/cafe-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, context: messages }),
      });

      const data = await res.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply || generateCafeChatbotReply(clean),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: generateCafeChatbotReply(clean) },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    ask(input);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <section className="rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-xl md:p-6">
        <div className="min-h-[420px] space-y-3">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm ${
                message.role === "assistant"
                  ? "bg-zinc-100 text-zinc-800"
                  : "ml-auto bg-green-600 text-white"
              }`}
            >
              {message.content}
            </div>
          ))}
          {loading && (
            <div className="max-w-[80%] rounded-3xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500">
              Runnerbot 2 is checking the cafe pilot logic...
            </div>
          )}
        </div>

        <form onSubmit={submit} className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-w-0 flex-1 rounded-full border border-zinc-200 px-4 py-3 text-black outline-none focus:border-green-600"
            placeholder="Ask about delivery, collection, payment or special orders..."
          />
          <button className="rounded-full bg-black px-5 py-3 font-black text-lime-300">
            Ask
          </button>
        </form>
      </section>

      <aside className="rounded-[2rem] bg-black p-5 text-white shadow-2xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-300">
          Suggested questions
        </p>
        <div className="mt-4 grid gap-2">
          {starterQuestions.map((q) => (
            <button
              key={q}
              onClick={() => ask(q)}
              className="rounded-2xl bg-white/10 px-4 py-3 text-left text-sm font-bold text-white/80 hover:bg-white/15"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-lime-300 p-4 text-black">
          <p className="font-black">Special order checklist</p>
          <p className="mt-2 text-sm">
            Name, phone, order details, delivery or collection, area, preferred time and payment method.
          </p>
        </div>
      </aside>
    </div>
  );
}
