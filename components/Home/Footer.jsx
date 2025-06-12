import React from 'react'
import Sociallinks from '../Buttons/Sociallinks'
import { Info } from 'lucide-react'

export default function Footer() {
  return (
    <div className='text-white text-xs flex justify-between w-full items-center md:text-sm p-2 md:p-5 xl:p-5 bg-gray-900'>
        <div>
            <p>© 2025 AnimeForFree. All rights reserved.</p>
        </div>
        <div className='flex flex-col justify-center gap-2 md:flex-row md:justify-between items-end md:items-center md:gap-[25px]'>
          <div>
            <a href="/dmca" className='flex hover:text-blue-400 gap-1 justify-center items-center'>
            <Info size={15}/>
            DMCA
            </a>
          </div>
          <Sociallinks/>
        </div>
    </div>
  )
}
