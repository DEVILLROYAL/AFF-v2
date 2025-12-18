'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function GenraCard(props) {
    const router = useRouter();
    const handleGenre = async (slug) => {
        router.push(`/genre/${slug}`);
    };

  return (
    <>
       <div style={{backgroundImage:`url(${props.url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}} onClick={() => handleGenre(props.id)} className="border flex rounded-[5px] cursor-pointer p-5 justify-center items-center">
                    <div href="#" className='flex justify-center items-center w-full text-md'>
                        <p className='text-shadow-black text-shadow-2xl'>{props.name}</p>
                    </div>
                </div>
    </>
  )
}
