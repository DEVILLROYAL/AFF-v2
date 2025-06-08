'use client'

import { useRouter } from "next/navigation"
export default function Slidebtn(props) {

    const router = useRouter();
    const handleView = (slug) => {
        router.push(`/viewpage/${slug}`);
    }

  return (
    <> 
        <button onClick={()=>handleView(props.view)} className="xl:hidden border opacity-50 p-2 rounded" style={{cursor:'pointer'}} > View all </button>
    </>
  )
}
