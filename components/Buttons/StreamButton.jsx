'use client'

import {useRouter} from "next/navigation"

export default function StreamButton(props) {
    const router = useRouter();

    const handleSelectClick = async (slug) => {
        router.push(`/stream/${encodeURIComponent(slug)}`);
    };
    
  return (
    <>
       <div id="watchButton-border">
        <button type="button" id="watch-btn" onClick={()=>handleSelectClick(props.epId)} > Watch Now </button>
       </div>
    </>
  )
}
