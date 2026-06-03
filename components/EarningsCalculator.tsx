"use client";

import React, { useState, useEffect } from "react";
import { IndianRupee, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function EarningsCalculator() {
  const [projects, setProjects] = useState(4);
  const [payPerProject, setPayPerProject] = useState(5000);
  const [displayTotal, setDisplayTotal] = useState(20000);
  const [isBumping, setIsBumping] = useState(false);

  // Animate the resulting total when values change
  useEffect(() => {
    const target = projects * payPerProject;
    const start = displayTotal;
    const end = target;
    
    // Trigger scale-pop micro-animation on update
    setIsBumping(true);
    const bumpTimer = setTimeout(() => setIsBumping(false), 150);

    if (start === end) return () => clearTimeout(bumpTimer);

    const duration = 0.35; // 350ms animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round((duration * 1000) / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setDisplayTotal(Math.floor(start + (end - start) * progress));

      if (frame === totalFrames) {
        clearInterval(timer);
        setDisplayTotal(end);
      }
    }, frameRate);

    return () => {
      clearInterval(timer);
      clearTimeout(bumpTimer);
    };
  }, [projects, payPerProject]);

  return (
    <section id="calculator" className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Earnings Potential
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Drag the sliders below to estimate your monthly payouts based on active projects and skill levels.
            </p>
          </ScrollReveal>
        </div>

        {/* Calculator Widget Grid */}
        <ScrollReveal variant="scale-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white dark:bg-slate-950 p-6 md:p-12 rounded-[28px] border border-zinc-200 dark:border-slate-900 shadow-xl shadow-emerald-500/5">
            
            {/* Left side: Controls */}
            <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
              
              {/* Slider 1: Projects */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-[16px] font-bold text-zinc-700 dark:text-slate-350">
                    Projects per Month
                  </label>
                  <span className="px-3.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[15px] select-none">
                    {projects} {projects === 1 ? "Project" : "Projects"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={projects}
                  onChange={(e) => setProjects(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-zinc-200 dark:bg-slate-800 appearance-none cursor-pointer accent-emerald-500 outline-none"
                  aria-label="Projects per month slider"
                />
                <div className="flex justify-between text-xs text-zinc-400 dark:text-slate-550 font-bold">
                  <span>1 project</span>
                  <span>8 projects</span>
                  <span>15 projects</span>
                </div>
              </div>

              {/* Slider 2: Pay per Project */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-[16px] font-bold text-zinc-700 dark:text-slate-350">
                    Average Pay per Project
                  </label>
                  <span className="px-3.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[15px] select-none">
                    ₹{payPerProject.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={payPerProject}
                  onChange={(e) => setPayPerProject(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-zinc-200 dark:bg-slate-800 appearance-none cursor-pointer accent-emerald-500 outline-none"
                  aria-label="Average pay per project slider"
                />
                <div className="flex justify-between text-xs text-zinc-400 dark:text-slate-550 font-bold">
                  <span>₹1,000</span>
                  <span>₹10,500</span>
                  <span>₹20,000</span>
                </div>
              </div>

            </div>

            {/* Right side: Results Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-500 dark:from-emerald-950 dark:to-emerald-900 text-white shadow-lg overflow-hidden">
              
              <div className="absolute top-4 right-4 text-white/10 pointer-events-none">
                <Sparkles className="w-16 h-16" />
              </div>

              <div className="flex flex-col gap-1 z-10">
                <span className="text-[13px] font-extrabold uppercase tracking-widest text-emerald-100 select-none">
                  Estimated Monthly Income
                </span>
                
                {/* Scale pop animation wrapper */}
                <motion.span
                  animate={{ scale: isBumping ? 1.06 : 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="text-4xl md:text-5xl font-black tracking-tight mt-2 flex items-center gap-1.5 origin-left"
                >
                  <IndianRupee className="w-7 h-7 md:w-9 md:h-9 stroke-[2.5]" />
                  {displayTotal.toLocaleString("en-IN")}
                </motion.span>
              </div>

              <div className="mt-8 pt-8 border-t border-white/15 flex flex-col gap-4 z-10">
                <div className="flex justify-between items-center text-[14px]">
                  <span className="text-emerald-100 font-medium select-none">Estimated Annual Income</span>
                  <span className="font-extrabold text-white text-[16px]">
                    ₹{(displayTotal * 12).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[14px]">
                  <span className="text-emerald-100 font-medium select-none">Certification Potential</span>
                  <span className="font-extrabold text-white text-[16px]">
                    {projects * 12} Certificates/yr
                  </span>
                </div>
                
                <p className="text-[12px] text-emerald-250 mt-2 font-medium leading-relaxed select-none">
                  * Calculations are estimates based on active listings. Actual earnings depend on project performance and client approval.
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default EarningsCalculator;
