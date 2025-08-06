import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";
import { CheckCheck } from "lucide-react";

export default async function LatestCompleted() {

    const ul = 'https://test2-gold-phi.vercel.app/api/v2/hianime/home';
    const data = await fetch(ul);
    let res = await data.json();
    const lcAnime = await res.data.latestCompletedAnimes;

  return (
    <>
           <div className="bg-black text-white p-2 xl:p-5 md:p-5">
              <div className="flex justify-between p-2">
              <div className="flex gap-3 justify-center items-center">
                <CheckCheck/>
                <p>Latest Completed Animes</p>
              </div>
              <div className="flex justify-center items-center text-xs">
                <Slidebtn view='featuredAnimes.latestCompletedAnimes'/>
              </div>
              </div>
              <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
                {lcAnime?.map((item,index)=>{return( <Card key={item.id} id={item.id} image={item.poster} name={item.name} /> )})}
              </div>
            </div>
    </>
  )
}
