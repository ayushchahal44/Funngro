"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Star, Award, ShieldCheck } from "lucide-react";
import React from "react";

export function Hero() {
  // Motion values to track mouse position for 3D parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse coordinates
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Map spring coordinate variations to distinct floating depths (translation offsets)
  const floatX1 = useTransform(springX, (val) => val * 0.4);
  const floatY1 = useTransform(springY, (val) => val * 0.4);

  const floatX2 = useTransform(springX, (val) => val * -0.6);
  const floatY2 = useTransform(springY, (val) => val * -0.6);

  const floatX3 = useTransform(springX, (val) => val * 0.8);
  const floatY3 = useTransform(springY, (val) => val * -0.5);

  const floatX4 = useTransform(springX, (val) => val * -0.3);
  const floatY4 = useTransform(springY, (val) => val * 0.7);

  const floatX5 = useTransform(springX, (val) => val * 0.5);
  const floatY5 = useTransform(springY, (val) => val * 0.3);

  // Track mouse coordinates on hover container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates around screen center (-innerWidth/2 to +innerWidth/2)
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  // Re-center floating cards when cursor leaves hero container
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Continuous background float animation
  const loopAnimation = (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay
    }
  });

  const headlineWords = "Earn Before You Graduate".split(" ");

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden py-24 md:py-36 bg-white dark:bg-slate-950 transition-colors duration-300 cursor-default"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-100 -z-10" />
      
      {/* Slow animated background glow blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-lime-500/10 dark:bg-lime-500/5 rounded-full blur-[110px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="self-center lg:self-start flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-650 dark:text-emerald-400 text-xs font-black uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            Empowering India's Gen-Z
          </motion.div>

          {/* Staggered Word Reveal */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] text-zinc-900 dark:text-white flex flex-wrap justify-center lg:justify-start gap-x-4">
            {headlineWords.map((word, idx) => {
              const isGreen = word === "Graduate";
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={
                    isGreen
                      ? "bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-450 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[19px] md:text-[22px] text-zinc-655 dark:text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Work with real companies. Build a verifiable portfolio. Get paid for your skills while studying.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4 w-full sm:w-auto"
          >
            <Link
              href="/teen"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:scale-98 transition-all duration-200"
            >
              Start Earning
            </Link>
            <Link
              href="/company"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-zinc-50 dark:hover:bg-slate-800/80 text-zinc-800 dark:text-zinc-100 font-bold hover:-translate-y-0.5 active:scale-98 transition-all duration-200"
            >
              Hire Talent
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick trust metrics with subtle delays */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-[13px] font-bold text-zinc-550 dark:text-slate-500"
          >
            <div className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-550" />
              <span>Real Work, Real Money</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-550" />
              <span>Official Certifications</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-550" />
              <span>Zero Application Costs</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side Illustration with mouse parallax tracking */}
        <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[450px] md:min-h-[550px]">
          
          {/* Main Visual background - Premium SVG Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[480px] aspect-square rounded-[36px] bg-gradient-to-tr from-emerald-600/5 to-lime-600/5 border border-emerald-500/10 flex items-center justify-center p-8 relative overflow-hidden shadow-xs"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent dark:from-slate-900/20" />
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-emerald-600/10 dark:text-emerald-500/10 stroke-current stroke-2 fill-none"
            >
              <circle cx="50" cy="50" r="38" strokeDasharray="5,5" className="animate-spin-slow" />
              <circle cx="50" cy="50" r="28" />
              <path d="M22,50 L78,50 M50,22 L50,78" />
              <polygon points="50,42 58,58 42,58" className="fill-emerald-500/5 stroke-emerald-500/30" />
            </svg>
            <style jsx>{`
              .animate-spin-slow {
                animation: spin 75s linear infinite;
              }
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </motion.div>

          {/* PARALLAX FLOATING ELEMENTS */}

          {/* Card 1: Website Project */}
          <motion.div
            style={{ x: floatX1, y: floatY1 }}
            animate={loopAnimation(0)}
            className="absolute top-[12%] left-[4%] md:left-[8%] glass hover-glow rounded-2xl py-3.5 px-5 flex items-center gap-3.5 shadow-xl max-w-[230px] z-20 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 font-black text-xl">
              ₹
            </div>
            <div>
              <div className="text-[14px] font-black text-zinc-950 dark:text-white">₹5,000 Earned</div>
              <div className="text-[11px] text-zinc-500 dark:text-slate-400 font-semibold">Website Project</div>
            </div>
          </motion.div>

          {/* Card 2: Social Media Project */}
          <motion.div
            style={{ x: floatX2, y: floatY2 }}
            animate={loopAnimation(1.5)}
            className="absolute bottom-[16%] right-[2%] md:right-[5%] glass hover-glow rounded-2xl py-3.5 px-5 flex items-center gap-3.5 shadow-xl max-w-[230px] z-20 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 dark:bg-lime-500/20 flex items-center justify-center text-lime-600 dark:text-lime-400 font-black text-xl">
              ₹
            </div>
            <div>
              <div className="text-[14px] font-black text-zinc-950 dark:text-white">₹3,200 Earned</div>
              <div className="text-[11px] text-zinc-500 dark:text-slate-400 font-semibold">Social Media Project</div>
            </div>
          </motion.div>

          {/* Card 3: Web Development Project */}
          <motion.div
            style={{ x: floatX3, y: floatY3 }}
            animate={loopAnimation(3)}
            className="absolute bottom-[46%] left-[-4%] md:left-[3%] glass hover-glow rounded-2xl py-3.5 px-5 flex items-center gap-3.5 shadow-xl max-w-[240px] z-20 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-xl">
              ₹
            </div>
            <div>
              <div className="text-[14px] font-black text-zinc-950 dark:text-white">₹7,000 Earned</div>
              <div className="text-[11px] text-zinc-500 dark:text-slate-400 font-semibold">Web Dev Project</div>
            </div>
          </motion.div>

          {/* Card 4: Star Rating Badge (New Premium Element) */}
          <motion.div
            style={{ x: floatX4, y: floatY4 }}
            animate={loopAnimation(0.8)}
            className="absolute top-[8%] right-[8%] md:right-[15%] glass hover-glow-accent rounded-xl py-2 px-3.5 flex items-center gap-2 shadow-lg z-15 cursor-pointer"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <div className="text-xs font-extrabold text-zinc-950 dark:text-white">★ 4.9 Rating</div>
          </motion.div>

          {/* Card 5: Verified Client Badge (New Premium Element) */}
          <motion.div
            style={{ x: floatX5, y: floatY5 }}
            animate={loopAnimation(2.2)}
            className="absolute bottom-[10%] left-[10%] md:left-[20%] glass hover-glow rounded-xl py-2 px-3.5 flex items-center gap-2 shadow-lg z-15 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <div className="text-[11px] font-extrabold text-zinc-950 dark:text-white">100% Secure Payout</div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
