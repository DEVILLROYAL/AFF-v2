import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";
import { TrendingUp } from "lucide-react";

export default async function Trend(props) {

  const ul = 'https://test2-gold-phi.vercel.app/api/v2/hianime/home';
  const data = await fetch(ul);
  let res = await data.json();
  let trend = await res.data.trendingAnimes;
  
  return (
    <>
      <div className="bg-black text-white p-2 xl:p-5 md:p-5">
        <div className="flex justify-between p-2">
        <div className="flex gap-3 justify-center items-center">
          <TrendingUp/>
          <p>Trending Animes</p>
        </div>
        <div className="flex justify-center items-center text-xs">
          <Slidebtn view='trendingAnimes'/>
        </div>
        </div>
        <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
          {trend?.map((index)=>{return( <Card key={index.id} id={index.id} image={index.poster} name={index.name} /> )})}
        </div>
        </div>
    </>
  )
}
