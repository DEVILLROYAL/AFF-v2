'use client'

import { useRouter } from "next/navigation";

export default function Episodes(props) {
  const router = useRouter();
    
const handleSelectClick = async (slug) => {
    router.push(`/stream/${encodeURIComponent(slug)}`);
};

  return (
    <>
         <div className="border rounded overflow-hidden text-center h-[250px]">
            <div className="h-full bg-cover bg-no-repeat" onClick={()=>handleSelectClick(props.epId)} style={{backgroundImage:`url(${props.url})`,cursor:'pointer'}} >
                <div className="relative h-full w-full">
                  <div className="p-2 rounded-br-md bg-red-600 absolute top-0">
                    <p>{props.rank}</p>
                  </div>
                  <div className="absolute bg-gradient-to-b from-transparent to-50% to-black p-2 w-full bottom-0">
                    <h1 >{props.name}</h1>
                  </div>
                </div>
            </div>
         </div>
    </>
  )
}
