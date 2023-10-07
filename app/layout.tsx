import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHEAN - Narozeniny",
  description:
    "Slavíme 15. let! Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání emailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
