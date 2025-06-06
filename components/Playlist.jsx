'use client'

import YoutubePlayer from "./video/YoutubePlayer";
import { useState } from "react";

export default function Playlist(props) {
  const [ play, setPlay ] = useState(props.res[0]?.embedUrl);
  const handlePlaylistSelect = (url) => {
    setPlay(url);
    console.log(play);
  };
 
  return (
    <>
       <div id="watch-border">
         <div id="stream-border">
            <div id="previous-border"></div>
            <div id="current-border"> 
              <YoutubePlayer url={play} />
            </div>
            <div id="next-border">
              <div id="playlist-border">
                <div id='playlist-t-border'><p id='theTitle-playlist'>Playlist</p></div>
                  <div id="playlist-list">
                    {Array.isArray(props.res) && props.res.map((item, index)=>{return(
                      <a key={item.videoId} onClick={() => handlePlaylistSelect(item.embedUrl)} style={{cursor:'pointer'}} >
                      <div id='theplaylist'
                      style={{backgroundImage:`url(${item.thumbnails.maxres?.url})`}} >
                      </div>
                      </a>
                    )})}
                  </div>
              </div>
            </div>
         </div>
       </div>
    </>
  )
}
