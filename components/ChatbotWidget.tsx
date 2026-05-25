"use client";

import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { generateChatbotReply } from "@/lib/runnerbot";
import { ChatMessage } from "@/types";

export default function ChatbotWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello. I’m Runnerbot 2 for Runners Errands. Ask me about deliveries, premium produce, proof-of-delivery, scheduling, business runs or Lagos coverage.",
      timestamp: new Date().toISOString(),
    },
  ]);

  function send() {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    const botMessage: ChatMessage = {
      role: "assistant",
      content: generateChatbotReply(input),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lime-300">
          <Bot size={22} />
        </div>
        <div>
          <h2 className="text-lg font-black text-slate-950">Runnerbot 2 Concierge</h2>
          <p className="text-sm font-medium text-slate-500">Mock AI mode active</p>
        </div>
      </div>

      <div className="max-h-[440px] space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "ml-auto max-w-[86%] rounded-2xl bg-slate-950 px-4 py-3 text-sm text-white"
                : "mr-auto max-w-[86%] rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200"
            }
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") send();
          }}
          placeholder="Ask: Can you deliver from VI to Lekki?"
          className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-lime-400/20 focus:ring-4"
        />
        <button
          onClick={send}
          className="rounded-2xl bg-lime-300 px-4 text-slate-950 hover:bg-lime-200"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
