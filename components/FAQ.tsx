"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_DATA } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured FAQ Schema markup for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/40 transition-colors duration-300">
      
      {/* Inject FAQ Schema in head/DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Find answers to the most common queries about joining Funngro as a student or hiring Gen-Z freelancers.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-[16px] md:text-[18px] text-zinc-900 dark:text-white cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-green-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-slate-900 flex items-center justify-center text-zinc-500 dark:text-slate-400">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[15px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
