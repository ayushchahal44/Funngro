"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TEEN_JOURNEY } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position over the timeline block container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out scroll tracking coords
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Financial Freedom
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              A clear, structured path from creating your profile to receiving your first verified corporate payout.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline body */}
        <div className="relative">
          
          {/* Background trace line (subtle static line behind drawing progress) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-zinc-100 dark:bg-slate-900 md:-translate-x-1/2" />

          {/* Central connecting line drawing itself on scroll (Desktop) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-600 via-emerald-400 to-lime-500 origin-top hidden md:block md:-translate-x-1/2 z-0"
          />
          {/* Central connecting line drawing itself on scroll (Mobile) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-600 via-emerald-400 to-lime-500 origin-top block md:hidden z-0"
          />

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {TEEN_JOURNEY.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row items-stretch md:justify-between relative w-full"
                >
                  {/* Circle Indicator on the line */}
                  <div className="absolute left-4 md:left-1/2 top-3 w-8-offset md:-translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-emerald-500 shadow-md flex items-center justify-center cursor-pointer"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        className="w-2.5 h-2.5 rounded-full bg-emerald-500" 
                      />
                    </motion.div>
                  </div>

                  {/* Left Side Content (Desktop) / Main Content (Mobile) */}
                  <div className={`w-full md:w-[44%] pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:order-last md:text-left"}`}>
                    <ScrollReveal variant="slide-up" delay={idx * 0.05}>
                      <div className={`p-6 rounded-2xl glass hover-glow transition-all duration-300 hover:scale-101 ${isEven ? "hover:border-emerald-500/30" : "hover:border-lime-500/30"}`}>
                        <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
                          Step {step.step}
                        </span>
                        <h3 className="text-[20px] font-black text-zinc-950 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-zinc-550 dark:text-slate-400 font-medium">
                          {step.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Spacer Column (Desktop) */}
                  <div className="hidden md:block w-[44%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Timeline;
