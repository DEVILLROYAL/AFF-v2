import { Construction, ScanSearch } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";
import Pagination from "./Pagination";

/* -------------------------------------------------------
   🟢 Dynamic SEO for Search Page (App Router – JS)
------------------------------------------------------- */
export async function generateMetadata({ params, searchParams }) {
  const slug = params.slug;
  const page = Number(searchParams?.page || 1);

  const cleanQuery = slug.replace(/-/g, " ");

  const title = `Search "${cleanQuery}" — AnimeForFree`;
  const description = `Search results for "${cleanQuery}". Watch anime online free in HD without ads.`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url: `https://animeforfree.online/search/${slug}?page=${page}`,
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
      canonical: `https://animeforfree.online/search/${slug}?page=${page}`
    }
  };
}

/* -------------------------------------------------------
   🟢 Search Page Component
------------------------------------------------------- */
export default async function SearchPage({ params, searchParams }) {
  const slug = params.slug;
  const page = Number(searchParams?.page || 1);

  const apiUrl = `https://test2-gold-phi.vercel.app/api/v2/hianime/search?q=${slug}&page=${page}`;
  const data = await fetch(apiUrl, { cache: "no-store" });
  const res = await data.json();

  const searchData = res?.data?.animes || [];
  const hasNextPage = res?.data?.hasNextPage || false;
  const currentPage = res?.data?.currentPage || page;
  const totalPage = res?.data?.totalPages || 1;

  return (
    <>
      <div className="p-5 text-white flex flex-col gap-5">
        <div className="flex w-full justify-between items-center gap-3 p-2">
          <Pagination
            query={slug}
            page={currentPage}
            hasNext={hasNextPage}
            totalPage={totalPage}
          />
          <div className="flex justify-center items-center p-2 gap-2">
            {searchData.length === 0 ? <Construction size={20} /> : <ScanSearch size={20} />}
          <p>
            {searchData.length === 0 ? "Sorry, no results for " : "Search results for "}
            <span className="text-blue-500 font-bold underline">{slug}</span>
          </p>
          </div>
        </div>

        <SearchCard res={searchData} />
      </div>

      {/* 🟢 JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            name: `Search results for ${slug}`,
            description: `Search results for ${slug} on AnimeForFree`,
            url: `https://animeforfree.online/search/${slug}?page=${page}`
          })
        }}
      />
    </>
  );
}
