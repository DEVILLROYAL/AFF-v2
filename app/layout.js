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
  metadataBase: new URL("https://animeforfree.online"),

  title: {
    default: "AnimeForFree — Watch Anime Online Free (No Ads)",
    template: "%s | AnimeForFree"
  },

  description:
    "Watch anime online free in HD without ads. Stream your favorite sub and dub episodes instantly. Updated daily with trending anime, episodes, and movies.",

  keywords: [
    "watch anime",
    "anime online",
    "anime free",
    "anime streaming",
    "anime sub",
    "anime dub",
    "no ads anime",
    "hd anime",
    "anime website",
    "animeforfree",
    "anime for free",
    "best anime streaming sites"
  ],

  openGraph: {
    title: "AnimeForFree — Watch Anime Free in HD",
    description:
      "Ad-free anime streaming. Watch sub and dub episodes instantly in HD. No signup required.",
    url: "https://animeforfree.online",
    siteName: "AnimeForFree",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AnimeForFree — Free Anime Streaming"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "AnimeForFree — Watch Anime Online Free",
    description:
      "HD anime streaming without ads. Watch sub/dub episodes instantly.",
    images: ["/og-image.jpg"]
  },

  alternates: {
    canonical: "https://animeforfree.online",
  },

  icons: {
    icon: "/favicon.ico",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
                  <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AnimeForFree",
            "url": "https://animeforfree.online",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://animeforfree.online/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
          </script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
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
