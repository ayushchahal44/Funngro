import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Funngro Premium - Earn Before You Graduate",
  description: "Work with real companies, build a verifiable portfolio, and earn real money before graduation.",
  metadataBase: new URL("https://funngro-premium.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Organization Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Funngro Premium",
    "url": "https://funngro-premium.netlify.app",
    "logo": "https://funngro-premium.netlify.app/favicon.ico",
    "description": "Reimagining student earning and Gen-Z recruitment. Work with top brands, build real portfolios, and get compensated securely.",
    "sameAs": [
      "https://twitter.com/funngro",
      "https://www.linkedin.com/company/funngro",
      "https://www.instagram.com/funngro"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Inject Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
