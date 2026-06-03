import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Stats from "@/components/Stats";
import ProjectCategories from "@/components/ProjectCategories";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import { UserCheck, FilePlus2, CloudUpload, Wallet } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Earn Before You Graduate",
  description: "Connect with real companies, work on interesting digital projects, gain corporate experience, and get paid for your skills.",
  path: "/",
});

export default function HomePage() {
  const steps = [
    {
      title: "Create Profile",
      desc: "Sign up and build your interactive portfolio highlighting your key skills and interests.",
      icon: UserCheck,
      color: "group-hover:text-emerald-500",
      bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Apply to Projects",
      desc: "Browse live client listings and submit short proposals to projects you love.",
      icon: FilePlus2,
      color: "group-hover:text-green-500",
      bg: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "Submit Work",
      desc: "Execute the deliverables, upload your files, and interact with company managers.",
      icon: CloudUpload,
      color: "group-hover:text-lime-500",
      bg: "bg-lime-500/10 text-lime-600 dark:text-lime-400"
    },
    {
      title: "Get Paid",
      desc: "Receive secure escrow payouts in your wallet alongside verified corporate certificates.",
      icon: Wallet,
      color: "group-hover:text-teal-500",
      bg: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1 - HERO */}
      <Hero />

      {/* SECTION 2 - TRUST BAR */}
      <TrustedBrands />

      {/* SECTION 3 - STATS */}
      <Stats />

      {/* SECTION 4 - HOW IT WORKS */}
      <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/40 border-y border-zinc-200/50 dark:border-slate-900/70 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                How Funngro{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                Four simple steps to kickstart your freelance journey and start earning pocket money.
              </p>
            </ScrollReveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={idx * 0.1}>
                  <div className="group h-full flex flex-col gap-5 p-8 rounded-2xl glass hover-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    
                    {/* Circle Icon wrapper */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold ${step.bg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className={`text-[19px] font-black text-zinc-950 dark:text-white mb-2 transition-colors duration-300 ${step.color}`}>
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-slate-400 font-medium">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5 - PROJECT CATEGORIES */}
      <ProjectCategories />

      {/* SECTION 6 - SUCCESS STORIES */}
      <Testimonials />

      {/* SECTION 7 - CTA */}
      <CTA
        title="Start Your First Project Today"
        description="Connect with real brands, build your professional portfolio, and earn pocket money before graduation."
        buttonText="Join Funngro Now"
        buttonHref="/teen"
      />
    </div>
  );
}
