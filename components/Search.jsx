import { SearchIcon } from "lucide-react"

export default function Search(props) {

  const val = props.value;
  console.log(val);

  return (
    <>
         <div className='flex p-2 rounded'>
           <input className='w-[150px] text-sm xl:text-sm outline-0 p-3' type='text' value={props.value} onChange={props.onChange} placeholder='Search Here...'/>
           <div className='flex cursor-pointer'>
              <button type='button' onClick={props.onClick} style={{cursor:'pointer'}} >
                <SearchIcon/>
            </button>
           </div>
         </div>
    </>   
  )
}
