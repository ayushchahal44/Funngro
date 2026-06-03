"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Choose the package that aligns with your volume of marketing, coding, design, and research requirements.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            return (
              <ScrollReveal key={plan.name} delay={idx * 0.1} className="h-full">
                <div
                  className={`h-full flex flex-col justify-between p-8 rounded-[28px] relative ${
                    plan.isPopular
                      ? "bg-slate-950 dark:bg-slate-900 text-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10"
                      : "bg-white dark:bg-slate-950 border border-zinc-200 dark:border-slate-900 shadow-lg text-zinc-900 dark:text-white"
                  } transition-all duration-300`}
                >
                  {/* Popular Label Badge */}
                  {plan.isPopular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className={`text-[20px] font-black uppercase tracking-wider ${plan.isPopular ? "text-emerald-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-[14px] mt-2.5 leading-relaxed font-medium ${plan.isPopular ? "text-slate-400" : "text-zinc-500 dark:text-slate-400"}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Price display */}
                    <div className="flex items-baseline gap-1 pt-2 border-t border-zinc-250/20 dark:border-slate-850">
                      <span className="text-4xl md:text-5xl font-black tracking-tight">
                        {plan.price}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ml-1.5 ${plan.isPopular ? "text-slate-500" : "text-zinc-400 dark:text-slate-500"}`}>
                        {plan.period}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <ul className="flex flex-col gap-4 mt-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.isPopular ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className={`text-[14px] leading-relaxed font-medium ${
                            plan.isPopular ? "text-slate-350" : "text-zinc-600 dark:text-slate-400"
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10">
                    <button
                      className={`w-full group py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        plan.isPopular
                          ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20 active:scale-98"
                          : "bg-zinc-100 hover:bg-zinc-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-slate-800 active:scale-98"
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
