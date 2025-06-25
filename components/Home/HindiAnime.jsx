import Slidebtn from "../Buttons/Slidebtn";
import YtAnimeCard from "@/components/Cards/YtAnimeCard";
import { Mic } from "lucide-react";

export default async function HindiAnime(props) {

  const ul = 'https://youtubeapi-tmc9.onrender.com/api/home';
  const data = await fetch(ul);
  let res = await data.json();
  let hindi = res;

  return (
    <>
      <div className="bg-black text-white p-2 xl:p-5 md:p-5">
        <div className="flex justify-between p-2">
        <div className="flex gap-3 justify-center items-center">
          <Mic/>
          <p>Hindi Dubbed Animes</p>
        </div>
        <div className="flex justify-center items-center text-xs">
          {/* <Slidebtn view='trendingAnimes'/> */}
        </div>
        </div>
        <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
          {hindi.map((item,index)=>{return( <YtAnimeCard key={index} id={item.playlistId} image={item.image} name={item.engTitle ?? item.animeTitle} /> )})}
        </div>
        </div>
    </>
  )
}
