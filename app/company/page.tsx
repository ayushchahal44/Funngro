import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";
import HiringProcess from "@/components/HiringProcess";
import CaseStudies from "@/components/CaseStudies";
import TrustedBrands from "@/components/TrustedBrands";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";
import { COMPANY_BENEFITS, COMPANY_TALENT_CATEGORIES } from "@/lib/constants";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Hire India's Youngest Digital Talent",
  description: "Access highly motivated Gen-Z talent for content, design, development, marketing, and research projects. Vetted freelancers, fast turnaround.",
  path: "/company",
});

// Helper for dynamic Lucide Icons
function IconBox({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.CheckCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function CompanyPage() {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. B2B HERO */}
      <section className="relative w-full overflow-hidden py-24 md:py-36 border-b border-zinc-200/40 dark:border-slate-900/60">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-100 -z-10" />
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-lime-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Pre-Vetted Gen-Z Freelancers
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              Hire India's Youngest{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Digital Talent
              </span>
            </h1>
            <p className="text-[19px] md:text-[22px] text-zinc-650 dark:text-slate-400 mt-6 leading-relaxed max-w-2xl font-medium">
              Access highly motivated Gen-Z talent for content writing, design prototypes, React development, SEO audits, and competitor research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
              <Link
                href="/company#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-center shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-98 transition-all duration-200"
              >
                Post Project Scope
              </Link>
              <Link
                href="/company#pricing"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-zinc-50 dark:hover:bg-slate-800/80 text-zinc-800 dark:text-zinc-100 font-bold active:scale-98 transition-all duration-200"
              >
                View Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WHY FUNNGRO */}
      <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/40 border-b border-zinc-200/50 dark:border-slate-900/70 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                Why Hire From{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                  Funngro?
                </span>
              </h2>
              <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                Speed, reliability, and fresh perspective. We build trust into micro-outsourcing.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_BENEFITS.map((benefit, idx) => (
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

      {/* 3. TALENT CATEGORIES */}
      <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                What Can Our{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                  Talent Do?
                </span>
              </h2>
              <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                Our freelance students execute micro-tasks with rapid turnaround and verified compliance.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_TALENT_CATEGORIES.map((cat, idx) => (
              <ScrollReveal key={cat.title} delay={idx * 0.05}>
                <div className="group h-full flex flex-col justify-between p-6 rounded-2xl glass hover-glow transition-all duration-300">
                  <div>
                    <h3 className="text-[18px] font-black text-zinc-950 dark:text-white mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HIRING PROCESS */}
      <HiringProcess />

      {/* 5. CASE STUDIES */}
      <CaseStudies />

      {/* 6. TRUSTED BRANDS LOGO GRID */}
      <TrustedBrands />

      {/* 7. PRICING */}
      <Pricing />

      {/* 8. CONTACT FORM */}
      <ContactForm />

      {/* 9. FINAL CTA */}
      <CTA
        title="Scale Operations with Vetted Gen-Z Teams"
        description="Save overheads and fuel your team's creative projects. Describe your scope and let our matching engine propose candidates today."
        buttonText="Post Project Scope Now"
        buttonHref="/company#contact"
      />

    </div>
  );
}
