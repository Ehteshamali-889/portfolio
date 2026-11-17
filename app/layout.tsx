import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://ehtesham-ali-portfolio.netlify.app");

const socialImage = {
  url: new URL("/social-preview-v2.jpg", siteUrl).toString(),
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Ehtesham Ali — Software Engineer & AI Developer",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  applicationName: "Ehtesham Ali Portfolio",
  title: "Ehtesham Ali — Software Engineer & AI Developer",
  description:
    "Full-stack software engineer and AI developer building scalable, production-ready web, mobile, and LLM-powered applications.",
  keywords: [
    "Ehtesham Ali",
    "software engineer",
    "full-stack developer",
    "AI developer",
    "AI engineer",
    "React developer",
    "Node.js developer",
    "React Native developer",
    "LLM integration",
    "OpenAI API",
    "Anthropic Claude API",
    "LangChain developer",
    "RAG pipelines",
    "AI agents",
    "prompt engineering",
    "vector databases",
    "web application development",
    "mobile application development",
  ],
  authors: [{ name: "Ehtesham Ali" }],
  creator: "Ehtesham Ali",
  publisher: "Ehtesham Ali",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    images: [socialImage],
    type: "website",
    url: "/",
    title: "Ehtesham Ali — Software Engineer & AI Developer",
    description:
      "Full-stack software engineer and AI developer building scalable, production-ready web, mobile, and LLM-powered applications.",
    siteName: "Ehtesham Ali Portfolio",
    locale: "en_US",
  },
  twitter: {
    images: [socialImage],
    card: "summary_large_image",
    title: "Ehtesham Ali — Software Engineer & AI Developer",
    description:
      "Full-stack software engineer and AI developer building scalable, production-ready web, mobile, and LLM-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
