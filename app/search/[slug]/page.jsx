import { Construction, Search } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";

/* -------------------------------------------------------
   🟢 Dynamic SEO for Search Page (JavaScript Only)
------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const cleanQuery = slug.replace(/-/g, " ");

  const title = `Search "${cleanQuery}" — AnimeForFree`;
  const description = `Search results for "${cleanQuery}". Watch anime online free in HD without ads.`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url: `https://animeforfree.online/search/${slug}`,
      siteName: "AnimeForFree",
      images: [
        {
          url: "https://animeforfree.online/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AnimeForFree Search Result"
        }
      ],
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://animeforfree.online/og-image.jpg"]
    },

    alternates: {
      canonical: `https://animeforfree.online/search/${slug}`
    }
  };
}

/* -------------------------------------------------------
   🟢 Search Page Component
------------------------------------------------------- */
export default async function SearchPage({ params }) {
  const { slug } = params;

  const ul = `https://test2-gold-phi.vercel.app/api/v2/hianime/search?q=${slug}&page=1`;
  const data = await fetch(ul);
  let res = await data.json();
  const searchData = await res.data.animes;

  return (
    <>
      <div className="p-5 text-white flex flex-col gap-5">
        <div className="justify-center items-center p-5 gap-5 flex">
          {searchData?.length === 0 ? (
            <Construction size={20} />
          ) : (
            <Search size={20} />
          )}

          {searchData.length === 0 ? (
            <p>
              Sorry could not find result for{" "}
              <span className="text-blue-600 font-bold">"{slug}"</span>
            </p>
          ) : (
            <p>
              Search results for{" "}
              <span className="text-blue-600 font-bold">"{slug}"</span>
            </p>
          )}
        </div>

        <SearchCard res={searchData} />
      </div>

      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            name: `Search results for ${slug}`,
            description: `Search results for ${slug} on AnimeForFree`,
            url: `https://animeforfree.online/search/${slug}`
          })
        }}
      />
    </>
  );
}
