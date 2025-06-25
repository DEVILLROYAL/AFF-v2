import { Construction, CircleArrowLeft, CircleArrowRight, Search } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.animes;

    console.log(res.currentPage);
    console.log(res.hasNextPage);

return(
      <>
        <div className="p-5 text-white flex flex-col gap-5 border">
          <div className="justify-center items-center p-5 gap-5 flex">
                {searchData.length === 0 ?
                <Construction size={20}/> :
                <Search size={20}/>
                }
                {searchData.length === 0 ? 
                <p>Sorry could not find result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p> :
                <p>Search result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p>
                }
          </div>
          <SearchCard res={searchData} />
          <div className="flex border justify-between items-center p-5 h-max w-full text-white">
            <div className="flex hover:text-blue-500 justify-between gap-2 items-center rounded">
              <button className="cursor-pointer">
                <CircleArrowLeft/>
              </button>
            </div>
            {res.hasNextPage == true && 
                        <div className="flex hover:text-blue-500 justify-between cursor-pointer gap-2 items-center">
              <button className="cursor-pointer">
                <CircleArrowRight/>
              </button>
            </div>
            }
          </div>
        </div>
      </>
  )  
}
