'use client'

import { useRouter } from "next/navigation"

export default function NavButton() {
    const router = useRouter();
    const handleHomeClick = (home) => {
    router.push('/');
    };

  return (
    <>
       <div>
            <button style={{cursor:'pointer'}} onClick={()=>handleHomeClick()} >
                <p className="text-lg">AFF</p>
            </button>
       </div>
    </>
  )
}
