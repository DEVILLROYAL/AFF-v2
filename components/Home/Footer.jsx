import React from 'react';
import Sociallinks from '../Buttons/Sociallinks';
import { Info, User } from 'lucide-react';

export default function Footer() {

  const Mail = "deepakyadav4014@gmail.com";
  return (
    <footer className='w-full flex-col bg-gray-900 md:flex-row gap-5 text-white rounded-t-2xl mt-0 p-6 md:px-10 md:py-6 text-xs md:text-sm flex justify-between'>
      <div className='flex flex-col gap-2'>
          <p className='hover:bg-blue-600 rounded-2xl border p-2 w-max'>© 2025 animeforfree. All rights reserved.</p>
          <a href="/dmca" className="hover:text-blue-500 rounded-2xl hover:underline border p-2 w-max">DMCA</a>
        </div>
        <div className='border p-3 hover:bg-black rounded-2xl w-max'>
          <Sociallinks/>
        </div>
    </footer>
  );
}
