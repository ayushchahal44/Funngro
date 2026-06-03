"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SUCCESS_STORIES } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  // Reset timer on change
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 6000); // 6s auto-play
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const current = SUCCESS_STORIES[activeIndex];

  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Student{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Read how ambitious students across India are turning their digital skills into financial independence.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Box */}
        <div className="relative w-full glass rounded-[28px] p-8 md:p-14 shadow-xl shadow-emerald-500/5 min-h-[350px] flex flex-col justify-between">
          
          {/* Quote icon bubble */}
          <div className="absolute top-8 right-8 text-emerald-500/10 dark:text-emerald-500/10">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative overflow-hidden flex-1 flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full"
              >
                {/* Left: Quote & Details */}
                <div className="md:col-span-8 flex flex-col gap-5">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < Math.floor(current.rating)
                            ? "text-amber-500"
                            : "text-zinc-300 dark:text-slate-700"
                        }`}
                      />
                    ))}
                    <span className="text-[13px] font-bold text-zinc-500 dark:text-slate-400 ml-1.5">
                      {current.rating}
                    </span>
                  </div>

                  <p className="text-[18px] md:text-[22px] font-medium leading-relaxed text-zinc-800 dark:text-slate-200 italic">
                    "{current.quote}"
                  </p>

                  <div className="flex flex-wrap gap-4 items-center text-[13px] font-bold mt-2">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {current.project}
                    </span>
                    <span className="text-zinc-400 dark:text-slate-500">|</span>
                    <span className="text-zinc-800 dark:text-slate-300 font-extrabold text-[15px]">
                      Earned: {current.amountEarned}
                    </span>
                  </div>
                </div>

                {/* Right: Avatar Info */}
                <div className="md:col-span-4 flex flex-row md:flex-col items-center gap-4 md:text-center">
                  <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-md">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-black text-zinc-950 dark:text-white">
                      {current.name}
                    </h4>
                    <p className="text-[14px] text-zinc-500 dark:text-slate-400 font-semibold">
                      {current.city}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-200/50 dark:border-slate-800/80">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {SUCCESS_STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-emerald-600 dark:bg-emerald-500"
                      : "w-2.5 bg-zinc-300 dark:bg-slate-800 hover:bg-zinc-400 dark:hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={slidePrev}
                className="p-2 rounded-xl border border-zinc-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 hover:bg-zinc-100 dark:hover:bg-slate-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={slideNext}
                className="p-2 rounded-xl border border-zinc-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 hover:bg-zinc-100 dark:hover:bg-slate-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
