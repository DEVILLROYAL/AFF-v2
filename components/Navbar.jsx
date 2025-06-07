import NavButton from './Buttons/NavButton';
import SearchScript from './SearchScript';

export default function Navbar() {
  return (
    <>
      <div className='h-16 flex gap-5 justify-between p-3 bg-black text-white'>
        <div className='h-[100%] w-16 flex justify-center items-center'>
          <NavButton/>
        </div>
          <SearchScript/>
      </div>
    </>
  )
}
