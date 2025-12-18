import React from 'react'
import genreData from '@/app/Data/genre.json';
import { Leaf } from 'lucide-react';
import GenraCard from '../Cards/GenraCard';

export default async function Genera() {

  return (
    <>
    <section className='text-white w-full border+ p-2 flex flex-col rounded-t-3xl gap-2'>
                    <div className='w-full flex justify-center items-center gap-2 p-2'>
                <h1>Genre</h1> <Leaf/>
            </div>
        <div className='rounded-3xl grid p-5 grid-cols-2 md:grid-cols-4 gap-5 xl:grid-cols-8'>
            {genreData.genres.map((genre,index) =>(
                <GenraCard key={index} name={genre.name} id={genre.name} url={genre.url} />
            ))}
        </div>
    </section>
    </>
  )
}
