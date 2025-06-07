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
            <button onClick={()=>handleHomeClick()} >
                <p>AFF</p>
            </button>
       </div>
    </>
  )
}
