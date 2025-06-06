'use client'
import SearchScript from './SearchScript';
import { useRouter } from 'next/navigation';

export default function Navbar() {

  const router = useRouter();
  const handleHomeClick = (home) => {
    router.push('/');
  };


  return (
    <>
      <div className='h-16 flex gap-5 justify-between p-3 bg-black text-white'>
        <div className='h-[100%] w-16 flex justify-center items-center'>
          <p className=''>AFF</p>
        </div>
          <SearchScript/>
      </div>
    </>
  )
}
