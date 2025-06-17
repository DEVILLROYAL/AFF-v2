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

  useEffect(() => {
    setData(props.res);
  },[ props.res ]);


  return (
    <>
                          {data?.map((item, index)=>{ return (<div key={item.id} className="grid grid-rows-1">
                                <div className="border rounded-[10px] overflow-hidden xl:rounded-[10px] w-full relative"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(item.id)}>
                                  <div className="h-[65vw] md:h-[30vw] xl:h-[18vw] bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.img})`}}>
                                    <div className="border text-white rounded-[10px] xl:rounded-[10px] text-center text-sm h-full w-full bg-radial mask-radial-at-center to-black">
                                      <div className="w-full absolute bottom-0 p-2 xl:p-3">
                                        <p className="text-wrap text-shadow-black text-shadow-lg">{item.name}</p>
                                      </div>
                                      {item.rating && (<p className="w-max">{item.rating}</p>)}
                                      {item.episodes.dub && <div popoverTarget="deb-hover" className="p-2 opacity-25 absolute right-0">
                                        <Mic size={16} />
                                        </div>}
                                      {item.episodes.sub && <div className="p-2 absolute opacity-25 left-0">
                                        <Subtitles size={16}/>
                                        </div>}
                                    </div>
                                  </div>
                                </div>
                            </div>)})}
    </>
  )
}
