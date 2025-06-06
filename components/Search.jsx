import { SearchIcon } from "lucide-react"

export default function Search(props) {

  return (
    <>
         <div className='flex p-2 rounded'>
           <input className='w-[150px] outline-0 p-3' type='text' value={props.value} onChange={props.onChange} placeholder='Search Here...'/>
           <div className='flex cursor-pointer'>
              <button type='button' onClick={props.onClick} style={{cursor:'pointer'}} >
                <SearchIcon/>
            </button>
           </div>
         </div>
    </>   
  )
}
