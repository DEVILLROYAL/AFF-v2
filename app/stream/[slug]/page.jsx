import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

/* -------------------------------------------
   SEO: generateMetadata() (JavaScript Only)
-------------------------------------------- */
export async function generateMetadata({ params }) {
  const {slug} = await params;

  // Fetch episode info
  const watchUrl = `https://yuma-anime-api-one.vercel.app/watch?episodeId=${decodeURIComponent(slug)}`;
  const watchRes = await fetch(watchUrl);
  const watchData = await watchRes.json();

  const malId = watchData?.data?.malID;

  // Fetch episodes list from Jikan
  const jikanUrl = `https://api.jikan.moe/v4/anime/${malId}/episodes`;
  const jikanRes = await fetch(jikanUrl);
  const jikanData = await jikanRes.json();

  const episode = jikanData?.data?.find((ep) =>
    decodeURIComponent(slug).includes(ep.mal_id)
  );

  const title = episode ? episode.title : "Watch Episode";
  const description =
    episode?.synopsis?.slice(0, 150) ||
    "Watch anime online free in HD without ads.";
  const image =
    episode?.images?.jpg?.image_url ||
    "https://animeforfree.online/default-episode.jpg";

  return {
    title: `${title} | AnimeForFree`,
    description,

    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "video.episode",
      siteName: "AnimeForFree"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

/* -------------------------------------------
   PAGE COMPONENT
-------------------------------------------- */
export default async function StreamPage({ params }) {
  const {slug} = await params;

  const api = `https://yuma-anime-api-one.vercel.app/watch?episodeId=${decodeURIComponent(slug)}`;
  const resData = await fetch(api);
  const res = await resData.json();

  const epUrl = res?.sources?.[0];
  const videoSource = epUrl?.url;

  const stream = `https://gogoanime-and-hianime-proxy-ten-murex.vercel.app/m3u8-proxy?url=${videoSource}`;

  return (
    <>
      <div className="text-white">
        <div className="m-10 rounded">
          <StreamPlayer url={stream} />
        </div>
      </div>
    </>
  );
}
