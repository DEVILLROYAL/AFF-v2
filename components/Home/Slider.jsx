import { Rss } from "lucide-react";

export default async function Slider() {
  const url = 'https://test2-gold-phi.vercel.app/api/v2/hianime/home';
  const data = await fetch(url);
  let res = await data.json();
  const slider = await res.data.spotlightAnimes;

  console.log(res);

  return (
    <>
         <div className="overflow-auto overflow-y-hidden h-[50vw] w-full whitespace-nowrap">
          { slider?.map((item, index)=>{return(<div className="inline-block relative h-full w-full" key={item.id} >
             <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.poster})`}}>
              <div className="w-full bg-radial mask-radial-at-center to-black h-full">
              <div className="text-white bg-linear-to-b text-sm to-black to-60% flex w-full flex-col gap-3 absolute bottom-0 p-5 xl:text-xl" >
                <p className="w-full text-wrap">{item.name}</p>
                <p className="w-full text-wrap hidden text-xs md:block xl:block">{item.description}</p>
              </div>
              <div className='flex justify-center opacity-50 items-center text-white p-2 md:p-2 xl:p-5 text-xs xl:text-sm absolute top-0 left-0'>
                <div className="font-extralight gap-2 flex justify-center items-center text-xs xl:text-sm text-white">
                  <Rss/>
                <p>Spotlight {item.rank}</p>
              </div>
              </div>
              <div className="flex justify-center opacity-50 items-center flex-row-reverse  text-white p-1 md:p-2 md:gap-3 xl:gap-5 xl:p-5 gap-2 text-xs xl:text-sm absolute top-0 right-0">
              <div className="flex justify-center p-1 items-center font-extralight" >
                <p>
                   {item.quality}
                </p>
              </div>
              |
              <div className="font-extralight p-1 flex justify-center items-center" >
                <p>
                   {item.category}
                </p>
              </div>
              </div>
             </div>
             </div>
          </div>)})}
         </div>
    </>
  )
}
