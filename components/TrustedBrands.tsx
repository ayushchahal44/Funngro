"use client";

import { TRUSTED_BRANDS } from "@/lib/constants";

export function TrustedBrands() {
  // Triplicate the list to ensure zero empty space during marquee looping
  const marqueeList = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="w-full py-12 bg-zinc-50/50 dark:bg-slate-900/30 border-y border-zinc-200/50 dark:border-slate-900/70 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <h2 className="text-[13px] font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500 text-center">
          1,000+ Companies Trust Funngro
        </h2>
        
        {/* Infinite Loop Marquee with gradient edges */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex gap-16 py-3 animate-marquee whitespace-nowrap">
            {marqueeList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-3 text-zinc-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-slate-800/80 text-zinc-700 dark:text-slate-300 font-extrabold text-[13px] flex items-center justify-center border border-zinc-200 dark:border-slate-700/50 shadow-xs">
                  {brand.logo}
                </div>
                <span className="text-[18px] font-black tracking-tight">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;
