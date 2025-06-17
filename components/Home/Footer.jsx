import React from 'react';
import Sociallinks from '../Buttons/Sociallinks';
import { Info, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-white rounded-t-3xl mt-5 p-6 md:px-10 md:py-6 text-xs md:text-sm'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        
        <div>
          <p>© 2025 AnimeForFree. All rights reserved.</p>
        </div>

        <div className='flex flex-col gap-4 items-center md:items-start'>

          <div className='flex flex-col w-full items-center md:items-end gap-2'>
            <a href="/dmca" className='flex items-center gap-1 hover:text-blue-400'>
              <Info size={16} /> DMCA
            </a>
            <Sociallinks />
          </div>

          <div className='flex items-center gap-2'>
            <div className='rounded-full border p-1'>
              <User size={16} />
            </div>
            <p>
              Contact: <a href="mailto:deepakyadav4014@gmail.com" className='text-blue-400 hover:underline'>deepakyadav4014@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
