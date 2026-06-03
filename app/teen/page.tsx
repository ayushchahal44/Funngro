import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";
import EarningsCalculator from "@/components/EarningsCalculator";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import { TEEN_BENEFITS, TEEN_PROJECT_TYPES } from "@/lib/constants";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight, Sparkles, DollarSign } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Earn Money While Studying",
  description: "Build skills, gain experience, and earn real income before graduation. Browse remote micro-gigs for Gen-Z digital talent.",
  path: "/teen",
});

// Helper for dynamic Lucide Icons
function IconBox({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.CheckCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function TeenPage() {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. STUDENT HERO */}
      <section className="relative w-full overflow-hidden py-24 md:py-36 border-b border-zinc-200/40 dark:border-slate-900/60">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-100 -z-10" />
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-lime-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Pocket Money with Purpose
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              Earn Money While{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Studying
              </span>
            </h1>
            <p className="text-[19px] md:text-[22px] text-zinc-650 dark:text-slate-400 mt-6 leading-relaxed max-w-2xl font-medium">
              Build skills, gain verifiable experience, and earn real income from top startup companies before graduation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
              <Link
                href="/teen#calculator"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-center shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-98 transition-all duration-200"
              >
                Find Projects
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-zinc-50 dark:hover:bg-slate-800/80 text-zinc-800 dark:text-zinc-100 font-bold active:scale-98 transition-all duration-200"
              >
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/40 border-b border-zinc-200/50 dark:border-slate-900/70 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                Why Students{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                  Love Funngro
                </span>
              </h2>
              <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                We make it extremely easy, legal, and secure for teenagers to work online.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEEN_BENEFITS.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.05}>
                <div className="group h-full flex flex-col gap-4 p-8 rounded-2xl glass hover-glow transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-650 dark:text-emerald-450 flex items-center justify-center">
                    <IconBox name={benefit.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[19px] font-black text-zinc-950 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PROJECT TYPES SECTION */}
      <section id="project-types" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                  Interest Area
                </span>
              </h2>
              <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                Choose the digital craft you are good at, apply in seconds, and start working.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEEN_PROJECT_TYPES.map((proj, idx) => (
              <ScrollReveal key={proj.title} delay={idx * 0.05}>
                <div className="group h-full flex flex-col justify-between p-8 rounded-2xl glass hover-glow transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[20px] font-black text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-[13px] font-extrabold text-emerald-650 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                        {proj.averagePay}
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-zinc-200/50 dark:border-slate-900 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-slate-500 uppercase tracking-wide mr-1.5">Skills:</span>
                    {proj.skillsNeeded.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-slate-900 text-zinc-650 dark:text-slate-400 text-[11px] font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EARNINGS CALCULATOR */}
      <EarningsCalculator />

      {/* 5. STUDENT JOURNEY TIMELINE */}
      <Timeline />

      {/* 6. TESTIMONIALS */}
      <Testimonials />

      {/* 7. FAQ ACCORDION */}
      <FAQ />

      {/* 8. FINAL CTA */}
      <CTA
        title="Start Earning Today"
        description="Don't wait for graduation. Create your free student profile on Funngro, apply for digital micro-gigs, and get paid for your skills."
        buttonText="Sign Up & Get Started"
        buttonHref="/register"
      />

    </div>
  );
}
