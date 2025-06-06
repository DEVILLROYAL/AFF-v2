'use client'

import { useRouter } from "next/navigation"

export default function Card(props) {

  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/ytanime/${slug}`);
  };

  return (
    <>
         <div className="card" style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
            <div  id='card-image' style={{backgroundImage:`url(${props.image})`}}></div>
            <div id="card-title">
            <div id='trend-title' >{props.name}</div>
            </div>
            {props.rank && <p id='card-rank'>{props.rank}</p> }
          </div>
    </>
  )
}
