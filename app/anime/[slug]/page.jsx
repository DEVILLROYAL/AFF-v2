import Episodes from '@/components/Cards/Episodes';
import Slidebtn from '@/components/Buttons/Slidebtn';
import { ListVideo } from 'lucide-react';
import Showcase from '@/components/Cards/Showcase';

/* -------------------------------------------------------
   🟢 Dynamic SEO Metadata (Anime Info Page)
------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const {slug} = await params;

  const api = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`;
  const res = await fetch(api);
  const json = await res.json();
  const anime = json?.data?.[0];

  if (!anime) {
    return {
      title: "Anime Not Found | AnimeForFree",
      description: "Requested anime could not be found."
    };
  }

  const title = anime.title_english || anime.title;
  const description =
    anime.synopsis?.slice(0, 160) ||
    `Watch ${title} online free in HD without ads.`;

  const poster = anime.images?.webp?.large_image_url;

  return {
    title: `${title} — Watch Online Free (HD Sub/Dub)`,
    description,

    openGraph: {
      title,
      description,
      images: [{ url: poster }],
      type: "video.tv_show",
      siteName: "AnimeForFree"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [poster]
    }
  };
}

/* -------------------------------------------------------
   🟢 Anime Page Component
------------------------------------------------------- */
export default async function AnimePage({ params }) {
  const { slug } = await params;

  // Get anime info
  const lnk = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`;
  const info = await fetch(lnk);
  const cmData = await info.json();

  const anime = cmData.data?.[0];
  const tlr = anime?.trailer;
  const titles = cmData.data;
  const tlrImage = anime?.images.webp;

  // Get episodes
  const epUrl = `https://test2-gold-phi.vercel.app/api/v2/hianime/anime/${slug}/episodes`;
  const epRes = await fetch(epUrl);
  const epJson = await epRes.json();
  const epData = epJson.data?.episodes;

  return (
    <>
      <div className="bg-black text-white">

        {/* Showcase Section */}
        {epData?.length > 0 && (
          <Showcase
            data={titles}
            tlr={tlr}
            slug={slug}
            epData={epData[0]?.episodeId.replace(/\?ep=/g, "$episode$")}
            alt={anime?.title_english ?? anime?.title}
            image={tlrImage?.large_image_url}
          />
        )}

        {/* Synopsis */}
        <div className="text-wrap w-auto max-h-36 overflow-auto text-center m-5">
          <p>{anime?.synopsis}</p>
        </div>

        {/* Episodes Section */}
        <div>
          {epData?.length > 0 && (
            <div className="flex justify-between p-2 items-center w-full">
              <div className="flex justify-center items-center gap-2">
                <ListVideo />
                <h4>Episodes</h4>
              </div>
              <Slidebtn view="trendingAnimes" />
            </div>
          )}

          <div className="overflow-auto bg-gray-900 rounded-2xl p-2 xl:p-5 w-full max-h-screen">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5">
              {epData?.map((item, index) => (
                <Episodes
                  key={index}
                  epId={item.episodeId.replace(/\?ep=/g, "$episode$")}
                  name={item.title}
                  url={tlrImage.large_image_url}
                  rank={item.number}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------
         🟢 JSON-LD Schema (TVSeries + Episode List)
      ------------------------------------------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TVSeries",
            name: anime?.title_english || anime?.title,
            description: anime?.synopsis,
            image: anime?.images?.webp?.large_image_url,
            genre: anime?.genres?.map((g) => g.name),
            url: `https://animeforfree.online/anime/${slug}`,
            episode: epData?.map((ep) => ({
              "@type": "TVEpisode",
              name: ep.title,
              episodeNumber: ep.number,
              url: `https://animeforfree.online/watch/${ep.episodeId.replace(/\?ep=/g, "$episode$")}`
            })),
            trailer: anime?.trailer?.embed_url
              ? {
                  "@type": "VideoObject",
                  name: anime?.title_english || anime?.title,
                  thumbnailUrl: anime?.trailer?.images?.maximum_image_url,
                  embedUrl: anime?.trailer?.embed_url
                }
              : undefined
          })
        }}
      />
    </>
  );
}
