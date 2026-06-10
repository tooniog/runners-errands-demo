"use client";

import { useMemo, useState } from "react";
import { cafeAreas, cafePricingBands } from "../../lib/cafeData";
import { calculateCafeDeliveryFee, formatNaira } from "../../lib/cafeRunnerbot";
import type { CafeArea } from "../../types/cafe";

export default function DeliveryFeeCalculator() {
  const [area, setArea] = useState<CafeArea>("Ikoyi");
  const [priority, setPriority] = useState(false);
  const [largeOrder, setLargeOrder] = useState(false);

  const fee = useMemo(
    () => calculateCafeDeliveryFee(area, priority, largeOrder),
    [area, priority, largeOrder]
  );

  return (
    <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
        Delivery intelligence
      </p>
      <h3 className="mt-2 text-2xl font-black text-black">
        Delivery fee calculator
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-bold text-zinc-700">
          Area
          <select
            value={area}
            onChange={(e) => setArea(e.target.value as CafeArea)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-black"
          >
            {cafeAreas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-bold text-zinc-700">
          <input
            type="checkbox"
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
          Priority order
        </label>

        <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-bold text-zinc-700">
          <input
            type="checkbox"
            checked={largeOrder}
            onChange={(e) => setLargeOrder(e.target.checked)}
          />
          Large order
        </label>
      </div>

      <div className="mt-5 rounded-3xl bg-black p-5 text-white">
        <p className="text-sm text-white/60">Suggested fee</p>
        <p className="mt-1 text-4xl font-black text-lime-300">{formatNaira(fee)}</p>
      </div>

      <div className="mt-5 grid gap-2 text-sm text-zinc-600 md:grid-cols-2">
        {Object.entries(cafePricingBands).map(([k, v]) => (
          <div key={k} className="flex justify-between rounded-2xl bg-zinc-50 px-4 py-3">
            <span>{k}</span>
            <strong className="text-black">{v}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
