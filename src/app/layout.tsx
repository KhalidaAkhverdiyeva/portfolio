import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khalida Akhverdiyeva | Frontend Developer Portfolio",
  description:
    "Portfolio of Khalida Akhverdiyeva — Frontend developer specializing in React, Tailwind CSS, and clean, modern UI/UX design.",
  icons: {
    icon: "/image/carrot.png",
  },
  openGraph: {
    title: "Khalida Akhverdiyeva | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Khalida Akhverdiyeva — passionate about React, Tailwind CSS, and beautiful user experiences.",
    url: "https://khalida.site",
    siteName: "Khalida Akhverdiyeva Portfolio",
    images: [
      {
        url: "https://khalida.site/image/carrot.png",
        width: 800,
        height: 600,
        alt: "Khalida Akhverdiyeva Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalida Akhverdiyeva | Frontend Developer Portfolio",
    description:
      "Portfolio of Khalida Akhverdiyeva — React, Tailwind, and UI/UX design.",

    images: ["https://khalida.site/image/carrot.png"],
  },
  keywords: [
    "Khalida Akhverdiyeva",
    "Frontend Developer",
    "React Developer",
    "Tailwind CSS",
    "UI Designer",
    "Portfolio",
  ],
  authors: [{ name: "Khalida Akhverdiyeva", url: "https://khalida.site" }],
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
