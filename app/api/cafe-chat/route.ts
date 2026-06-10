import { NextResponse } from "next/server";
import { generateCafeChatbotReply } from "../../../lib/cafeRunnerbot";

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();
    const fallback = generateCafeChatbotReply(String(message || ""), JSON.stringify(context || ""));

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: fallback, mode: "mock" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You are Runnerbot 2 Cafe Concierge for a Lagos cafe pilot. Be helpful, premium, concise, Lagos-specific and operational. Do not claim the cafe is signed. Use pilot-ready/demo/proposed workflow language. Never give unauthorised club access instructions.",
          },
          { role: "user", content: String(message || "") },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ reply: fallback, mode: "mock-fallback" });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || fallback;
    return NextResponse.json({ reply, mode: "openai" });
  } catch {
    return NextResponse.json({
      reply: "Runnerbot 2 is available in mock mode. Please ask about cafe orders, payment confirmation, delivery, collection or pilot economics.",
      mode: "mock-error",
    });
  }
}
