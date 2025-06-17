import { Construction, Search } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.animes;

    console.log(res);

return(
      <>
         <div className="flex gap-3 text-white items-center justify-center md:text-lg xl:text-lg h-auto w-full p-5">
          {searchData.length === 0 ?
          <Construction size={20}/> :
          <Search size={20}/>
           }
          <div className="flex flex-row">
            {searchData.length === 0 ? 
            <p>Sorry could not find result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p> :
            <p>Search result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span> </p>
            }
          </div>
         </div>
         <div  className="h-auto min-h-screen">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5">
              <SearchCard res={searchData}/></div>
           </div>
      </>
  )  
}
