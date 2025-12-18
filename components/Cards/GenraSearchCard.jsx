'use client'

import { useRouter } from "next/navigation"
import { Mic, Subtitles, CircleArrowLeft, CircleArrowRight, } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";

export default function SearchComponent(props) {
  const[ data, setData ] = useState();
  const dispatch = useDispatch();
  
  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  useEffect(() => {
    setData(props.res);
  },[ props.res ]);

  return (
    <>
    <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:grid-cols-8">
                          {data?.results?.map((item, index)=>{ return (<div key={item.id} className="">
                                <div className="border rounded-[10px] overflow-hidden xl:rounded-[10px] w-full relative"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(item.id)}>
                                  <div className="h-[65vw] md:h-[30vw] xl:h-[18vw] bg-cover bg-no-repeat" style={{backgroundImage:`url(${item.image})`}}>
                                    <div className="border text-white rounded-[10px] xl:rounded-[10px] text-center text-sm h-full w-full bg-radial mask-radial-at-center to-black">
                                      <div className="w-full absolute bottom-0 p-2 xl:p-3">
                                        <p className="text-wrap text-shadow-black text-shadow-lg">{item.title}</p>
                                      </div>
                                      <div className="">
                                        <div className="p-2 opacity-50 absolute top-0 flex w-full items-center justify-center center">
                                          <p className="">{item.type}</p>
                                          </div>
                                      {Number(item.dub) > 0 && (<div className="p-2 opacity-25 absolute right-0">
                                        <Mic size={16} />
                                        </div>)}
                                      <div className="p-2 absolute opacity-25 left-0">
                                        <Subtitles size={16}/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>)})}
                            </div>
    </div>
    </>
  )
}
