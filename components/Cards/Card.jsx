'use client'

import { useRouter } from "next/navigation"

export default function Card(props) {

  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  return (
    <>
         <div className="inline-block w-[125px] p-2 xl:w-[175px] h-full " style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
          <div className="relative border rounded-[10px] overflow-hidden w-full bg-no-repeat bg-cover h-full" style={{backgroundImage:`url(${props.image})`}}>
            <div className="w-full bg-radial mask-radial-at-center to-black h-full">
              <div className="p-2 absolute bottom-0 text-xs md:text-sm text-wrap text-center">
                <p>{props.name}</p>
              </div>
            </div>
          </div>
         </div>
    </>
  )
}
