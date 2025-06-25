import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Providers from "@/store/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime for free",
  description: "Welcome to AnimeForFree, the ultimate free anime streaming platform built for true anime lovers! From timeless classics to the newest episodes fresh from Japan, AnimeForFree lets you explore a massive library of HD anime—no subscriptions, no hidden fees.",
  icons: {
    icon:"./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
