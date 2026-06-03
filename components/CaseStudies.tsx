"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Proven Business{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Impact & ROI
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Read how real companies scaled digital operations, saved budgets, and achieved targets using Funngro Gen-Z squads.
            </p>
          </ScrollReveal>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <ScrollReveal key={study.company} delay={idx * 0.1}>
              <div className="group h-full flex flex-col justify-between p-8 rounded-2xl glass hover-glow transition-all duration-300 cursor-pointer">
                
                {/* Top Section */}
                <div className="flex flex-col gap-6">
                  {/* Branding Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-[14px] flex items-center justify-center border border-zinc-200 dark:border-slate-800">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="text-[17px] font-black text-zinc-950 dark:text-white">
                          {study.company}
                        </h3>
                        <p className="text-[12px] font-bold text-zinc-400 dark:text-slate-500 uppercase tracking-wider">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                  </div>

                  {/* Challenge & Solution */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500">
                        Challenge
                      </span>
                      <p className="text-[14px] font-medium leading-relaxed text-zinc-700 dark:text-slate-350 mt-1">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500">
                        Solution
                      </span>
                      <p className="text-[14px] font-medium leading-relaxed text-zinc-750 dark:text-slate-300 mt-1">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Metrics & Results */}
                <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-slate-900">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Results
                  </span>
                  <ul className="flex flex-col gap-3 mt-3">
                    {study.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[13px] font-extrabold text-zinc-800 dark:text-slate-200 leading-snug">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;
