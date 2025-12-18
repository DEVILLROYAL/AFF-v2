import Playlist from '@/components/Playlist';

/* -------------------------------------------
   SEO for YouTube Playlist Page (JS ONLY)
-------------------------------------------- */
export async function generateMetadata({ params }) {
  const {slug} = await params;

  const api = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
  const res = await fetch(api);
  const episodes = await res.json();

  const first = episodes?.[0];

  const title = first?.title
    ? `${first.title} — Playlist`
    : "Anime Playlist | AnimeForFree";

  const description =
    "Watch YouTube anime playlists online, HD streaming without ads.";

  const thumbnail =
    first?.thumbnail || "https://animeforfree.online/default-playlist.jpg";

  return {
    title: `${title} | AnimeForFree`,
    description,

    openGraph: {
      title,
      description,
      images: [{ url: thumbnail }],
      type: "video.episode",
      siteName: "AnimeForFree"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [thumbnail]
    }
  };
}

/* -------------------------------------------
   PAGE COMPONENT
-------------------------------------------- */
export default async function WatchPage({ params }) {
  const {slug} = await params;

  const ul = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
  const data = await fetch(ul);
  let res = await data.json();

  return (
    <>
      <Playlist res={res} />
    </>
  );
}
