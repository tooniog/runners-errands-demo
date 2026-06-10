"use client";

import { useEffect, useMemo, useState } from "react";
import { CAFE_STORAGE_KEY, mockCafeOrders, mockCafeRiders } from "../../lib/cafeData";
import {
  assignCafeRider,
  formatNaira,
  generateCafeInsight,
} from "../../lib/cafeRunnerbot";
import type { CafeFulfilmentStatus, CafeOrder } from "../../types/cafe";
import CafeInsightPanel from "./CafeInsightPanel";

function loadOrders(): CafeOrder[] {
  if (typeof window === "undefined") return mockCafeOrders;
  try {
    const raw = localStorage.getItem(CAFE_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(CAFE_STORAGE_KEY, JSON.stringify(mockCafeOrders));
      return mockCafeOrders;
    }
    return JSON.parse(raw) as CafeOrder[];
  } catch {
    return mockCafeOrders;
  }
}

export default function CafeAdminDashboard() {
  const [orders, setOrders] = useState<CafeOrder[]>([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && orders.length) {
      localStorage.setItem(CAFE_STORAGE_KEY, JSON.stringify(orders));
    }
  }, [orders]);

  function notify(message: string) {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  }

  function updateOrder(id: string, fulfilmentStatus: CafeFulfilmentStatus) {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== id) return order;

        let updated: CafeOrder = { ...order, fulfilmentStatus };

        if (fulfilmentStatus === "Approved" && order.paymentMethod === "Member account") {
          updated.paymentStatus = "Requires staff approval";
        }

        if (fulfilmentStatus === "Rider assigned" && !order.assignedRiderId) {
          const rider = assignCafeRider(order);
          updated.assignedRiderId = rider?.id;
        }

        if (fulfilmentStatus === "Delivered") {
          updated.paymentStatus = "Paid / confirmed";
        }

        return updated;
      })
    );
    notify(`${id}: ${fulfilmentStatus}`);
  }

  const metrics = useMemo(() => {
    const total = orders.length;
    const awaiting = orders.filter((o) => o.fulfilmentStatus === "Awaiting cafe approval").length;
    const prep = orders.filter((o) => o.fulfilmentStatus === "In preparation").length;
    const ready = orders.filter((o) => o.fulfilmentStatus === "Ready for pickup").length;
    const out = orders.filter((o) => o.fulfilmentStatus === "Out for delivery").length;
    const delivered = orders.filter((o) => o.fulfilmentStatus === "Delivered").length;
    const estimatedRevenue = orders.reduce((sum, order) => {
      const roughBasket = order.requestDetails.toLowerCase().includes("corporate") ? 45000 : 8000;
      return sum + roughBasket;
    }, 0);
    const deliveryRevenue = orders.reduce((sum, order) => sum + order.deliveryFee, 0);
    const serviceRevenue = orders.reduce((sum, order) => sum + order.serviceFee, 0);
    const repeatCustomers = new Set(orders.map((o) => o.phone)).size < orders.length ? 1 : 0;

    return [
      ["Total cafe orders today", total.toString()],
      ["Awaiting approval", awaiting.toString()],
      ["In preparation", prep.toString()],
      ["Ready for pickup", ready.toString()],
      ["Out for delivery", out.toString()],
      ["Delivered", delivered.toString()],
      ["Estimated revenue today", formatNaira(estimatedRevenue)],
      ["Delivery revenue", formatNaira(deliveryRevenue)],
      ["Runnerbot service fees", formatNaira(serviceRevenue)],
      ["Average fulfilment time", delivered ? "42 mins" : "Pending"],
      ["Repeat customer count", repeatCustomers.toString()],
    ];
  }, [orders]);

  function riderName(id?: string) {
    if (!id) return "Not assigned";
    return mockCafeRiders.find((r) => r.id === id)?.name || id;
  }

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed right-4 top-4 z-50 rounded-full bg-black px-5 py-3 text-sm font-black text-lime-300 shadow-xl">
          {toast}
        </div>
      )}

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-black text-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-xl md:p-6">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
              Live operations
            </p>
            <h2 className="text-2xl font-black text-black">Cafe order table</h2>
          </div>
          <p className="rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-green-900">
            {generateCafeInsight(orders)}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1180px] text-left text-sm">
            <thead>
              <tr className="border-b bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                {[
                  "Order ID",
                  "Customer",
                  "Type",
                  "Order",
                  "Area",
                  "Request",
                  "Payment",
                  "Fulfilment",
                  "Rider",
                  "ETA",
                  "Delivery",
                  "Service",
                  "Action",
                ].map((h) => (
                  <th key={h} className="px-3 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-3 py-10 text-center text-zinc-500">
                    No cafe orders yet. Submit a request from /cafe-pilot/order.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="border-b align-top">
                    <td className="px-3 py-4 font-black text-black">{order.id}</td>
                    <td className="px-3 py-4">{order.customerName}</td>
                    <td className="px-3 py-4">{order.customerType}</td>
                    <td className="px-3 py-4">{order.orderType}</td>
                    <td className="px-3 py-4">{order.area}</td>
                    <td className="max-w-[220px] px-3 py-4 text-zinc-600">{order.requestDetails}</td>
                    <td className="px-3 py-4">{order.paymentStatus}</td>
                    <td className="px-3 py-4 font-bold text-green-700">{order.fulfilmentStatus}</td>
                    <td className="px-3 py-4">{riderName(order.assignedRiderId)}</td>
                    <td className="px-3 py-4">{order.etaRange}</td>
                    <td className="px-3 py-4">{formatNaira(order.deliveryFee)}</td>
                    <td className="px-3 py-4">{formatNaira(order.serviceFee)}</td>
                    <td className="px-3 py-4">
                      <div className="flex flex-wrap gap-2">
                        {[
                          ["Approve", "Approved"],
                          ["Preparing", "In preparation"],
                          ["Ready", "Ready for pickup"],
                          ["Assign rider", "Rider assigned"],
                          ["Out", "Out for delivery"],
                          ["Delivered", "Delivered"],
                          ["Cancel", "Cancelled / refund"],
                        ].map(([label, status]) => (
                          <button
                            key={status}
                            onClick={() => updateOrder(order.id, status as CafeFulfilmentStatus)}
                            className="rounded-full bg-black px-3 py-2 text-xs font-bold text-white hover:bg-green-700"
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
            Staff approval queue
          </p>
          <h3 className="mt-2 text-2xl font-black text-black">
            Human checks before fulfilment
          </h3>
          <div className="mt-5 grid gap-3">
            {[
              "Menu availability",
              "Price",
              "Preparation time",
              "Payment confirmation",
              "Special requests",
              "Dispatch readiness",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-zinc-50 p-4 font-bold text-zinc-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <CafeInsightPanel />
      </section>
    </div>
  );
}
