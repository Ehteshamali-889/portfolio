import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Ehtesham Ali Portfolio",
  title: "Ehtesham Ali — Software Engineer",
  description:
    "Full-stack software engineer building scalable, production-ready web and mobile applications.",
  keywords: [
    "Ehtesham Ali",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "React Native developer",
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
    type: "website",
    title: "Ehtesham Ali — Software Engineer",
    description:
      "Full-stack software engineer building scalable, production-ready web and mobile applications.",
    siteName: "Ehtesham Ali Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ehtesham Ali — Software Engineer",
    description:
      "Full-stack software engineer building scalable, production-ready web and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
