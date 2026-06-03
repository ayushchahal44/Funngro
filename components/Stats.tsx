"use client";

import { STATS_DATA } from "@/lib/constants";
import { Counter } from "./Counter";
import { ScrollReveal } from "./ScrollReveal";

export function Stats() {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS_DATA.map((stat, idx) => {
              // Custom config based on values
              const isCrore = stat.label.includes("Paid Out");
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl glass hover-glow transition-all duration-300"
                >
                  <span className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                    <Counter
                      value={stat.value}
                      prefix={isCrore ? "₹" : ""}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="text-[15px] font-bold text-zinc-500 dark:text-slate-400 mt-2.5">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Stats;
