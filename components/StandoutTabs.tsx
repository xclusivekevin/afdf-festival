"use client";
import { useState } from "react";
import { YouTube } from "@/components/ui";
const TABS = [["Abuja 2024", "AertRzIP_nE", "Taste Africa at the 2024 African Food and Drinks Festival in Abuja, Nigeria!"], ["Lagos 2023", "-LIzlJCJqdI", "Highlights from the 2023 African Food & Drinks Festival in Lagos"], ["Abuja 2023", "14-XkEbGHE0", "African Food and Drinks Festival Abuja 2023"], ["Abuja 2022", "MqYxF8kWP7Y", "Africa's Biggest Food Festival / African Food and Drinks Festival Abuja 2022"], ["Accra 2022", "9V9E1N9dzzU", "African Food & Drinks Festival Accra 2022"], ["Abuja 2021", "6tx0cUa586A", "African Food and Drinks Festival 2021 Abuja"]];
export default function StandoutTabs() {
  const [i, setI] = useState(0);
  return (
    <div>
      <div role="tablist" className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {TABS.map(([l], n) => <button key={l} role="tab" aria-selected={i === n} onClick={() => setI(n)} className={`rounded px-2 py-2 font-[family-name:var(--font-display)] text-[13px] uppercase text-white ${i === n ? "bg-[color:var(--afdf-red-600)]" : "bg-[color:var(--afdf-orange-500)] hover:bg-[color:var(--afdf-orange-600)]"}`}>{l}</button>)}
      </div>
      <div className="mt-4"><YouTube id={TABS[i][1]} title={TABS[i][2]} /></div>
    </div>
  );
}
