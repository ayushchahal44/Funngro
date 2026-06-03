"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Home", href: "/" },
        { name: "Teen Earners", href: "/teen" },
        { name: "Hire Gen-Z", href: "/company" },
        { name: "Earnings Calculator", href: "/teen#calculator" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Web Development", href: "/teen#project-types" },
        { name: "Graphic Design", href: "/teen#project-types" },
        { name: "Content Writing", href: "/teen#project-types" },
        { name: "Video Editing", href: "/teen#project-types" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/company#case-studies" },
        { name: "Pricing Plans", href: "/company#pricing" },
        { name: "Contact Support", href: "/company#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/faq" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Sitemap", href: "/sitemap.xml" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 dark:bg-slate-950 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          
          {/* Logo & Description Column */}
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white font-black text-lg">
                F
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-300 bg-clip-text text-transparent">
                funngro
              </span>
            </Link>
            <p className="text-[14px] text-zinc-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Reimagining student earning and Gen-Z recruitment. Work with top brands, build real portfolios, and get compensated securely.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 text-zinc-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 text-zinc-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 text-zinc-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 text-zinc-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1 flex flex-col gap-4">
              <span className="text-[13px] font-bold tracking-wider uppercase text-zinc-400 dark:text-slate-500">
                {group.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-0.5 text-[14px] text-zinc-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <hr className="my-12 border-zinc-200 dark:border-slate-900" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-zinc-500 dark:text-slate-500">
          <p>© {currentYear} Funngro Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Cookies Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
