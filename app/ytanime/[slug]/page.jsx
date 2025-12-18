// ✅ ALWAYS KEEP IMPORTS FIRST
import YouAnimeDetail from "@/components/Cards/YouAnimeDetail";
import { ListVideo } from "lucide-react";
import YtEpisodes from "@/components/Cards/YtEpisodes";

/* -------------------------------------------------------
   🟢 Dynamic SEO Metadata (JavaScript ONLY)
------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const {slug} = await params;

  const api = `https://youtubeapi-tmc9.onrender.com/api/anime?playlistId=${slug}&limit=1`;
  const res = await fetch(api);
  const data = await res.json();

  const anime = data?.[0];

  if (!anime) {
    return {
      title: "Anime Not Found | AnimeForFree",
      description: "Requested anime could not be found."
    };
  }

  const title = anime.engTitle || anime.animeTitle;
  const description =
    anime.description?.slice(0, 160) ||
    `Watch ${title} online free in HD without ads.`;

  const image = anime.image;

  return {
    title: `${title} — Watch Online Free (HD YouTube Anime)`,
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

/* -------------------------------------------------------
   🟢 Main YouTube Anime Page Component
------------------------------------------------------- */
export default async function AnimePage({ params }) {
  const { slug } = await params;

  const animeInfoUrl = `https://youtubeapi-tmc9.onrender.com/api/anime?playlistId=${slug}&limit=1`;
  const playlistUrl = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;

  const infoRes = await fetch(animeInfoUrl);
  const cmData = await infoRes.json();

  const playlistRes = await fetch(playlistUrl);
  const res = await playlistRes.json();

  const mainAnime = cmData?.[0];

  return (
    <>
      <div className="bg-black text-white">
        <YouAnimeDetail
          data={cmData}
          tlr={mainAnime?.trailer}
          slug={mainAnime?.playlistId}
          alt={mainAnime?.engTitle ?? mainAnime?.animeTitle}
          image={mainAnime?.image}
          epData={slug}
        />

        <div className="text-wrap w-auto max-h-36 overflow-auto text-center m-5">
          <p>{mainAnime?.description}</p>
        </div>

        <div>
          {res?.length > 0 && (
            <div className="flex justify-between p-2 items-center w-full">
              <div className="flex justify-center items-center gap-2">
                <ListVideo />
                <h4>Episodes</h4>
              </div>
            </div>
          )}

          <div className="overflow-auto bg-gray-900 rounded-2xl p-2 xl:p-5 w-full max-h-screen">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5">
              {res?.map((item, index) => (
                <YtEpisodes
                  key={index}
                  epId={slug}
                  name={item.title}
                  url={mainAnime?.image}
                  rank={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
