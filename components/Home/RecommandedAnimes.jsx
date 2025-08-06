'use client'

export default function RecommandedAnimes(props) {

  return (
    <>
              <div className="card"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
            <div  id='card-image' style={{backgroundImage:`url(${props.image})`}}></div>
            <div id="card-title">
            <div id='trend-title' >{props.name}</div>
            </div>
            <p id='card-duration'>{props.format}</p>
            {props.pg !== false && (<p id='card-pg'>{props.pg}</p>)}
          </div>
    </>
  )
}






