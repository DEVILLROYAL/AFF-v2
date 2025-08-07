'use client'

import { useRouter } from "next/navigation"
import { Mic, Subtitles } from "lucide-react";
import { useEffect, useState } from "react";
export default function SearchComponent(props) {
  const[ data, setData ] = useState();
  
  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  const slug = props.slug;
  useEffect(() => {
    if ( slug === "trendingAnimes" ) {
      setData(props.res.trendingAnimes);
    }
    if ( slug === "featuredAnimes" ) {
      setData(props.res.featuredAnimes.latestCompletedAnimes)
    }
        if ( slug === "latestEpisodes" ) {
      setData(props.res.latestEpisodeAnimes)
    }
        if ( slug === "topUpcomingAnimes" ) {
      setData(props.res.topUpcomingAnimes)
    }
        if ( slug === "top10Animes.day" ) {
      setData(props.res.top10Animes.today)
    }
            if ( slug === "top10Animes.week" ) {
      setData(props.res.top10Animes.week)
    }
            if ( slug === "top10Animes.month" ) {
      setData(props.res.top10Animes.month)
    }
  },[ slug, props.res ]);

  console.log(data);
  console.log(slug);

  return (
    <>
                          <div className='h-auto min-h-screen'>
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5">
                          {data?.map((item, index)=>{ return (<div key={item.id} className="grid grid-rows-1">
                                <div className="border rounded-[10px] overflow-hidden xl:rounded-[10px] w-full relative"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(item.id)}>
                                  <div className="h-[65vw] md:h-[30vw] xl:h-[18vw] bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.poster})`}}>
                                    <div className="border text-white rounded-[10px] xl:rounded-[10px] text-center text-sm h-full w-full bg-radial mask-radial-at-center to-black">
                                      <div className="w-full absolute bottom-0 p-2 xl:p-3">
                                        <p className="text-wrap text-shadow-black text-shadow-lg">{item.name}</p>
                                      </div>
                                      {item.rating && (<p className="w-max">{item.rating}</p>)}
                                      {item.dub && <div popoverTarget="deb-hover" className="p-2 opacity-25 absolute right-0">
                                        <Mic size={16} />
                                        </div>}
                                      {item.sub && <div className="p-2 absolute opacity-25 left-0">
                                        <Subtitles size={16}/>
                                        </div>}
                                    </div>
                                  </div>
                                </div>
                            </div>)})}
                          </div>
                      </div>
    </>
  )
}
