export default async function Slider() {
  const url = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(url);
  let res = await data.json();
  const slider = await res.spotLightAnimes;

  return (
    <>
         <div className="overflow-auto overflow-y-hidden h-[50vw] w-full whitespace-nowrap">
          { slider.map((item, index)=>{return(<div className="inline-block relative h-full w-full" key={item.id} >
             <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.img})`}}>
              <div className="w-full bg-radial mask-radial-at-center to-black h-full">
              <div className="text-white bg-linear-to-b text-sm to-black to-60% flex w-full flex-col gap-3 absolute bottom-0 p-5 xl:text-xl" >
                <p className="w-full text-wrap">{item.name}</p>
                <p className="w-full text-wrap hidden text-xs md:block xl:block">{item.description}</p>
              </div>
              <div className="p-1 md:p-2 md:m-2 xl:p-2 xl:rounded m-1 absolute xl:m-5 text-xs xl:text-sm text-white top-0 left-0 bg-gray-600" >
                <p>Spotlight {item.rank}</p>
              </div>
              <div className="flex flex-row-reverse  text-white p-1 md:p-2 md:gap-3 xl:gap-5 xl:p-5 gap-2 text-xs xl:text-sm absolute top-0 right-0">
              <div className="w-max p-1 md:p-2 opacity-50 xl:rounded xl:p-2 bg-gray-600" >
                <p>
                   {item.quality}
                </p>
              </div>
              <div className="w-max p-1 xl:rounded md:p-2 opacity-50 xl:p-2 bg-gray-600" >
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
