"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Start Your First Project Today",
  description = "Join thousands of teens working with real companies, building portfolios, and earning real money.",
  buttonText = "Join Funngro",
  buttonHref = "/teen"
}: CTAProps) {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 dark:from-emerald-950 dark:via-emerald-900 dark:to-green-800 px-8 py-16 md:py-24 text-center flex flex-col items-center gap-6 shadow-2xl">
            {/* Glowing ambient dots inside CTA */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white max-w-2xl leading-tight">
              {title}
            </h2>
            <p className="text-[17px] md:text-[19px] text-emerald-100 max-w-xl leading-relaxed font-medium">
              {description}
            </p>
            <div className="mt-4">
              <Link
                href={buttonHref}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-zinc-100 text-emerald-800 dark:text-emerald-950 font-bold text-center shadow-lg hover:shadow-xl active:scale-98 transition-all duration-200 cursor-pointer"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTA;
