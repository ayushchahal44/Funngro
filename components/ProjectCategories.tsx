"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

// Helper to render Lucide Icons dynamically from string names
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export function ProjectCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Explore Top{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Project Categories
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Teens apply their digital skills and get hands-on experience across multiple modern business domains.
            </p>
          </ScrollReveal>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl glass hover-glow transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[180px] cursor-pointer"
            >
              {/* Corner gradient glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300`} />

              {/* Icon Bubble */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <DynamicIcon name={category.icon} className="w-6 h-6" />
              </div>

              {/* Title & Count */}
              <div>
                <h3 className="text-[18px] font-bold text-zinc-900 dark:text-white mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-[13px] font-semibold text-zinc-400 dark:text-slate-500">
                  {category.count}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectCategories;
