import ChatbotWidget from "@/components/ChatbotWidget";

export default function ChatPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <p className="eyebrow">Runnerbot 2</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
        AI concierge for Lagos errands.
      </h1>
      <p className="mt-4 text-slate-600">
        Ask about deliveries, proof, premium fruit, business runs and Lagos
        coverage.
      </p>
      <div className="mt-8">
        <ChatbotWidget />
      </div>
    </main>
  );
}
