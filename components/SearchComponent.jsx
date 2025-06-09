'use client'

import { useRouter } from "next/navigation"
import { Mic, Subtitles } from "lucide-react";
export default function SearchComponent(props) {
  
  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  return (
    <>
      <div className="border rounded-[10px] overflow-hidden xl:rounded-[10px] w-full relative"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} >
        <div className="h-[250px] sm:h-[300px] bg-cover bg-no-repeat" style={{backgroundImage:`url(${props.image})`}}>
          <div className="border text-white rounded-[10px] xl:rounded-[10px] text-center text-sm h-full w-full bg-radial mask-radial-at-center to-black">
            <div className="w-full absolute bottom-0 p-2">
              <p className="text-wrap text-shadow-black text-shadow-lg">{props.name}</p>
            </div>
                {props.pg && (<p className="w-max">{props.pg}</p>)}
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
