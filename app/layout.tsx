import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adly Febryan — Web Developer & RPL Student",
  description:
    "Portfolio pribadi Adly Febryan, siswa SMK 13 Bandung jurusan Rekayasa Perangkat Lunak yang passionate di bidang web development. Berpengalaman dengan Laravel, MySQL, Bootstrap, dan Node.js.",
  keywords: [
    "Adly Febryan",
    "Web Developer",
    "Laravel Developer",
    "SMK 13 Bandung",
    "Rekayasa Perangkat Lunak",
    "Portfolio",
    "RPL",
    "Full Stack Developer",
    "Bandung",
  ],
  authors: [{ name: "Adly Febryan", url: "https://portofolio-ku-jade.vercel.app" }],
  creator: "Adly Febryan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portofolio-ku-jade.vercel.app",
    title: "Adly Febryan — Web Developer & RPL Student",
    description:
      "Portfolio pribadi Adly Febryan, siswa SMK 13 Bandung jurusan Rekayasa Perangkat Lunak yang passionate di bidang web development.",
    siteName: "Adly Febryan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adly Febryan — Web Developer & RPL Student",
    description:
      "Portfolio pribadi Adly Febryan, siswa SMK 13 Bandung jurusan Rekayasa Perangkat Lunak yang passionate di bidang web development.",
    creator: "@adlyfebryann_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}