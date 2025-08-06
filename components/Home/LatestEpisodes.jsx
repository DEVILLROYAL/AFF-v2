import Card from "../Cards/Card"
import Slidebtn from "../Buttons/Slidebtn";
import { BellDot } from "lucide-react";

export default async function LatestEpisodes() {

    const ul = 'https://test2-gold-phi.vercel.app/api/v2/hianime/home';
    const data = await fetch(ul);
    let res = await data.json();
    const latestEpisodes = await res.data.latestEpisodeAnimes;

  return (
    <>
           <div className="bg-black text-white p-2 xl:p-5 md:p-5">
              <div className="flex justify-between p-2">
              <div className="flex gap-3 justify-center items-center">
                <BellDot/>
                <p>Latest Episodes</p>
              </div>
              <div className="flex justify-center items-center text-xs">
                <Slidebtn view='latestEpisodes'/>
              </div>
              </div>
              <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
                {latestEpisodes?.map((item,index)=>{return( <Card key={item.id} id={item.id} dub={item.episodes.dub} sub={item.episodes.sub} image={item.poster} name={item.name} /> )})}
              </div>
            </div>
    </>
  )
}
