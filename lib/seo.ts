import { Metadata } from "next";

export const SITE_URL = "https://funngro-premium.netlify.app";

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}

export function generateSEOMetadata({
  title,
  description,
  path,
  ogType = "website"
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | Funngro Premium - Earn Before You Graduate`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Funngro Premium",
      type: ogType,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Funngro Premium - Redefining Teen Earnings & Gen-Z Recruitment",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
      creator: "@funngro",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
