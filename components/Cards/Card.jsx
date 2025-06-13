'use client'

import { Mic, Subtitles } from "lucide-react";
import { useRouter } from "next/navigation"

export default function Card(props) {

  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  return (
    <>
         <div className="inline-block p-2 w-[175px] h-full " style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
          <div className="relative border rounded-[10px] overflow-hidden w-full bg-no-repeat bg-cover h-full" style={{backgroundImage:`url(${props.image})`}}>
            <div className="w-full bg-radial mask-radial-at-center to-black h-full">
              <div className="p-2 absolute text-shadow-lg text-shadow-black w-full bottom-0 text-sm md:text-sm text-wrap text-center">
                <p>{props.name}</p>
              </div>
              {props.dub && <div popoverTarget="deb-hover" className="p-2 opacity-25 absolute right-0">
                               <Mic size={16} />
                            </div>}
               {props.sub && <div className="p-2 absolute opacity-25 left-0">
                               <Subtitles size={16}/>
                            </div>}             
            </div>
          </div>
         </div>
    </>
  )
}
