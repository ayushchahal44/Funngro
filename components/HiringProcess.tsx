"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { COMPANY_HIRING_PROCESS } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function HiringProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Our Simple{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Hiring Process
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Hire and collaborate with pre-screened Gen-Z freelance talent in four simple stages.
            </p>
          </ScrollReveal>
        </div>

        {/* Responsive horizontal/vertical grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connector line for large screens */}
          <div className="absolute top-[35px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-lime-500/20 z-0 hidden md:block" />

          {COMPANY_HIRING_PROCESS.map((step, idx) => {
            const isLast = idx === COMPANY_HIRING_PROCESS.length - 1;
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Visual Connector Arrow (Mobile only) */}
                {!isLast && (
                  <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-emerald-500/20 block md:hidden">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                )}

                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-950 border border-zinc-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-extrabold text-[20px] flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300 mb-6">
                  {step.step}
                </div>

                {/* Text Content */}
                <div className="p-6 rounded-2xl glass hover-glow transition-all duration-300 w-full">
                  <h3 className="text-[18px] font-black text-zinc-950 dark:text-white mb-3 group-hover:text-emerald-650 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default HiringProcess;
