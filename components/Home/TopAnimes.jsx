import Card from "../Cards/Card"
import Slidebtn from "../Buttons/Slidebtn";
import { Calendar, Flame, List, SunDim } from "lucide-react";

export default async function TopAnimes() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json(); 
    const topDay = await res.top10Animes.day;
    const topWeek = await res.top10Animes.week;
    const topMonth = await res.top10Animes.month;

  return (
    <>
            <div className="bg-black text-white p-2 xl:p-5 md:p-5">
              <div className="flex justify-center p-2">
                <div className="flex gap-3 justify-center items-center">
                <Flame/>
                <p>
                  Top 10 Animes
                </p>
              </div>
              </div>
              <div className="flex justify-between p-2">
              <div className="flex gap-3 justify-center items-center">
                <SunDim/>
                <p>Day</p>
              </div>
              <div className="flex justify-center items-center text-xs">
                <Slidebtn view='top10Animes.day'/>
              </div>
              </div>
              <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
                {topDay.map((item,index)=>{return( <Card key={item.id} id={item.id} dub={item.episodes.dub} sub={item.episodes.sub} image={item.img} name={item.name} /> )})}
              </div>
            </div>
            
            <div className="bg-black text-white p-2 xl:p-5 md:p-5">
              <div className="flex justify-between p-2">
              <div className="flex gap-3 justify-center items-center">
                <List/>
                <p>Week</p>
              </div>
              <div className="flex justify-center items-center text-xs">
                <Slidebtn view='top10Animes.week'/>
              </div>
              </div>
              <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
                {topWeek.map((item,index)=>{return( <Card key={item.id} id={item.id} dub={item.episodes.dub} sub={item.episodes.sub} image={item.img} name={item.name} /> )})}
              </div>
            </div>
            
            <div className="bg-black text-white p-2 xl:p-5 md:p-5">
              <div className="flex justify-between p-2">
              <div className="flex gap-3 justify-center items-center">
                <Calendar/>
                <p>Month</p>
              </div>
              <div className="flex justify-center items-center text-xs">
                <Slidebtn view='top10Animes.month'/>
              </div>
              </div>
              <div className="overflow-auto scroll-smooth inset-shadow-black overflow-y-hidden w-full h-[250px] md:h-[250px] whitespace-nowrap">
                {topMonth.map((item,index)=>{return( <Card key={item.id} id={item.id} dub={item.episodes.dub} sub={item.episodes.sub} image={item.img} name={item.name} /> )})}
              </div>
            </div>
    </>
  )
}
