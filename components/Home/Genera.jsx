import React from 'react'
import genreData from '@/app/Data/genre.json';
import { Leaf } from 'lucide-react';

export default async function Genera() {

    // const url = "https://yuma-anime-api-one.vercel.app/genre/list";
    // const data = await fetch(url);
    // const res = await data.json();
    // console.log(res);

  return (
    <>
    <section className='text-white w-full p-2 flex flex-col rounded-t-3xl gap-5 border-2 border-red-700'>
                    <div className='w-full flex justify-center items-center gap-2 p-2'>
                <h1>Sorry this feature is currently broke</h1> <Leaf/>
            </div>
        <div className='rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-5 xl:grid-cols-8'>
            {genreData.genres.map((genre,index) =>(
                <div key={genre.name} style={{backgroundImage:`url(${genre.url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className="border flex rounded-[5px] cursor-pointer p-5 justify-center items-center">
                    <div href="#" className='flex justify-center items-center w-full text-md'>
                        <p className='text-shadow-black text-shadow-2xl'>{genre.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}
