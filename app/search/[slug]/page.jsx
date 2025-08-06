import { Construction, CircleArrowLeft, CircleArrowRight, Search } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://test2-gold-phi.vercel.app/api/v2/hianime/search?q=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.data.animes;
    
    console.log(res.data.currentPage);
    console.log(res.data.hasNextPage);

return(
      <>
        <div className="p-5 text-white flex flex-col gap-5">
          <div className="justify-center items-center p-5 gap-5 flex">
                {searchData?.length === 0 ?
                <Construction size={20}/> :
                <Search size={20}/>
                }
                {searchData.length === 0 ? 
                <p>Sorry could not find result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p> :
                <p>Search result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p>
                }
          </div>
          <SearchCard res={searchData} />
        </div>
      </>
  )  
}
