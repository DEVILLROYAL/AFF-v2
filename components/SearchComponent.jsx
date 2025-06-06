'use client'

import { useRouter } from "next/navigation"

export default function SearchComponent(props) {
  
  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  return (
    <>
              <div className="card"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
            <div  id='card-image' style={{backgroundImage:`url(${props.image})`}}></div>
            <div id="card-title">
            <div id='trend-title' >{props.name}</div>
            </div>
            {props.format && 
            <p id='card-duration'>{props.format}</p> }
            {props.pg && (<p id='card-pg'>{props.pg}</p>)}
          </div>
    </>
  )
}
