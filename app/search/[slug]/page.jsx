import { Construction, Search } from "lucide-react";
import SearchComponent from "../../../components/SearchComponent";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.animes;

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
         <div  className="p-2 md:p-2 xl:p-5">
            <div className="grid w-full grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-2">
              {searchData.map((item, index)=>{ return (<div key={item.id} className="grid grid-rows-1">
                <SearchComponent
                name={item.name}
                id={item.id}
                image={item.img}
                duration={item.duration}
                pg={item.rated}
                dub={item.episodes.dub}
                sub={item.episodes.sub}
                /></div>)})}
              </div>
           </div>
      </>
  )  
}
