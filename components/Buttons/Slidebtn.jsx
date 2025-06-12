'use client'

import { useRouter } from "next/navigation"
export default function Slidebtn(props) {

    const router = useRouter();
    const handleView = (slug) => {
        router.push(`/viewpage/${slug}`);
    }

  return (
    <> 
        <button onClick={()=>handleView(props.view)} className="opacity-50 p-2" style={{cursor:'pointer'}} > View all </button>
    </>
  )
}
