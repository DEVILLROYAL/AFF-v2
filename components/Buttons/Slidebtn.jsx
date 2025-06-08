'use client'

import { useRouter } from "next/navigation"
export default function Slidebtn(props) {

    const router = useRouter();
    const handleView = (slug) => {
        router.push(`/viewpage/${slug}`);
    }

  return (
    <> 
        <button onClick={()=>handleView(props.view)} className="border xl:hidden p-2 rounded" style={{cursor:'pointer'}} > View All </button>
    </>
  )
}
