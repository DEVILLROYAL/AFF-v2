'use client'

import { useRouter } from "next/navigation";

export default function YtEpisodes(props) {
  const router = useRouter();
    
const handleSelectClick = async (slug) => {
    router.push(`/youwatch/${encodeURIComponent(slug)}`);
};

  return (
    <>
         <div className="rounded-lg overflow-hidden text-center h-[65vw] md:h-[30vw] xl:h-[18vw] ">
            <div className="h-full bg-cover bg-no-repeat" onClick={()=>handleSelectClick(props.epId)} style={{backgroundImage:`url(${props.url})`,cursor:'pointer'}} >
                <div className="relative bg-radial mask-radial-at-center to-black h-full w-full">
                  <div className="p-2 rounded-br-md xl:p-2 xl:text-xl bg-red-600 absolute top-0">
                    <p>{props.rank}</p>
                  </div>
                  <div className="absolute bg-black p-2 xl:p-5 w-full bottom-0">
                    <h1 >{props.name}</h1>
                  </div>
                </div>
            </div>
         </div>
    </>
  )
}
