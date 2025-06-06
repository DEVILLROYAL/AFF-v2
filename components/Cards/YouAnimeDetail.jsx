import React from 'react'
import WatchButton from '../Buttons/WatchButton'

export default function YouAnimeDetail(props) {
  return (
    <>
       <div id="animedetail-border">
        <div id="detail-rating">
          {props.rating && 
        <p>{props.rating}</p>
          }
        </div>
        <div id="detail-title">
        <h1>{props.name}</h1>
        </div>
        <WatchButton id={props.id} />
        <div id="detail-detail">
        <div id="detail-type">
        <h4>{props.type}</h4>
        </div>
        <div id="detail-episodes">
          {props.episodes && 
        <p>Episodes- {props.episodes}</p>
          }
        </div>
        <div id="detail-duration">
          {props.duration && 
        <p>Duration- {props.duration}</p>
          }
        </div>
        </div>
       </div>
    </>
  )
}
