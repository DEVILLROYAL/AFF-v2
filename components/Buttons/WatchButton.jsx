'use client'

import {useRouter} from "next/navigation"

export default function WatchButton(props) {
    const router = useRouter();

    const handleSelectClick = async (slug) => {
        router.push(`/youtube/${slug}`);
    };
  return (
    <>
       <div id="watchButton-border">
        <button type="button" onClick={()=>handleSelectClick(props.id)} > Watch Now </button>
       </div>
    </>
  )
}
