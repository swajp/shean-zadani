import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SHEAN - Narozeniny",
  image: "/example.jpg",
  description:
    "SHEAN - Narozeniny. Slavíme 15. let! Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání emailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.",
  url: "https://shean-zadani.vercel.app/",
  sameAs: [
    "https://www.instagram.com/shean_stories/",
    "https://www.linkedin.com/company/shean-s.r.o./",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shean-zadani.vercel.app"),
  title: "SHEAN - Narozeniny",
  description:
    "Slavíme 15. let! Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání emailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.",
  openGraph: {
    title: "SHEAN - Narozeniny",
    description:
      "Slavíme 15. let! Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání emailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.",
    url: "https://shean-zadani.vercel.app/",
    siteName: "SHEAN - Narozeniny",
    images: [
      {
        url: "/example.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/example.jpg",
        width: 1800,
        height: 1600,
        alt: "SHEAN - Narozeniny. Slavíme 15. let! Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání emailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
