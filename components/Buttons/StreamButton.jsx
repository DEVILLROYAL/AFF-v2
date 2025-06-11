'use client'

import { Play } from "lucide-react";
import {useRouter} from "next/navigation"

export default function StreamButton(props) {
    const router = useRouter();

    const handleSelectClick = async (slug) => {
        router.push(`/stream/${encodeURIComponent(slug)}`);
    };
    
  return (
    <>
       <div className="cursor-pointer shadow-md shadow-black flex justify-between items-center gap-2 text-white w-max rounded p-2 text-xs bg-red-600">
        <Play size={15}/>
        <button type="button" onClick={()=>handleSelectClick(props.epId)} > Watch Now </button>
       </div>
    </>
  )
}
