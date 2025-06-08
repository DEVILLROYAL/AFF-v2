import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";

export default async function Trend(props) {

  const ul = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(ul);
  let res = await data.json();
  let trend = res.trendingAnimes;

  return (
    <>
      <div className="bg-black text-white p-2 xl:p-5">
        <div className="flex justify-between p-2">
        <div className="flex justify-center items-center">
          <p>Trending Animes</p>
        </div>
        <div className="flex justify-center items-center text-xs">
          <Slidebtn view='trendingAnimes'/>
        </div>
        </div>
        <div className="overflow-auto inset-shadow-black overflow-y-hidden w-full h-[175px] xl:h-[250px] whitespace-nowrap">
          {trend.map((index)=>{return( <Card key={index.id} id={index.id} image={index.img} name={index.name} /> )})}
        </div>
        </div>
    </>
  )
}
