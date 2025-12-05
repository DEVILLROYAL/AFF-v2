import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import { Suspense } from "react";
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import UpcomingAnime from "@/components/Home/UpcomingAnime";
import Loading from "./loading";
import HindiAnime from "@/components/Home/HindiAnime";

/* -------------------------------------------------------
   🟢 HOMEPAGE SEO (JavaScript Only)
------------------------------------------------------- */
export const metadata = {
  title: "AnimeForFree — Watch Anime Online Free (HD Sub & Dub, No Ads)",
  description:
    "Watch anime online free in HD without ads. Stream trending anime, latest episodes, sub/dub versions, Hindi anime, and more — updated daily.",
  
  keywords: [
    "animeforfree",
    "anime for free",
    "watch anime online",
    "anime streaming",
    "free anime HD",
    "sub anime",
    "dub anime",
    "latest anime episodes",
    "trending anime",
    "hindi anime",
    "best anime website",
    "anime site without ads"
  ],

  openGraph: {
    title: "AnimeForFree — Watch Anime Online Free",
    description:
      "HD anime streaming without ads. Watch trending anime, new episodes, Hindi anime, and more.",
    url: "https://animeforfree.online",
    siteName: "AnimeForFree",
    images: [
      {
        url: "https://animeforfree.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AnimeForFree Homepage"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "AnimeForFree — Watch Anime Online Free in HD",
    description:
      "Stream anime in HD without ads. Latest episodes, trending titles, Hindi anime, and more.",
    images: ["https://animeforfree.online/og-image.jpg"]
  },

  alternates: {
    canonical: "https://animeforfree.online"
  }
};

/* -------------------------------------------------------
   🟢 HOME PAGE COMPONENT
------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Slider />
        <Trend />
        <HindiAnime />
        <LatestEpisodes />
        <LatestCompleted />
        <UpcomingAnime />
        <TopAnimes />
      </Suspense>

      {/* ----------- JSON-LD STRUCTURED DATA ----------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AnimeForFree",
            url: "https://animeforfree.online",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://animeforfree.online/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
