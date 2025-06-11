'use client'

import {useRouter} from "next/navigation"

export default function StreamButton(props) {
    const router = useRouter();

    const handleSelectClick = async (slug) => {
        router.push(`/stream/${encodeURIComponent(slug)}`);
    };
    
  return (
    <>
       <div className="border cursor-pointer text-white w-max p-2 text-xs bg-red-600">
        <button type="button" onClick={()=>handleSelectClick(props.epId)} > Watch Now </button>
       </div>
    </>
  )
}
