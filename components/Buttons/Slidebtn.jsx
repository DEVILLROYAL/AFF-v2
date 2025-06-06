'use client'

import { useRouter } from "next/navigation"
export default function Slidebtn(props) {

    const router = useRouter();
    const handleView = (slug) => {
        router.push(`/viewpage/${slug}`);
    }

  return (
    <> 
       <div id="button-border">
        <button onClick={()=>handleView(props.view)} > View All </button>
        </div>
    </>
  )
}
