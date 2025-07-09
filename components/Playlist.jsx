'use client'

import { useState } from "react";
import YouTubePlayer from "./Video/YoutubePlayer";
import { ListVideo, Play } from "lucide-react";

export default function Playlist(props) {
  const [ play, setPlay ] = useState(props.res[0]?.embedUrl);
  const [ title, setTitle ] = useState(props.res[0]?.title);

  const handlePlaylistSelect = (url, title) => {
    setPlay(url);
    setTitle(title);
  };
 
  return (
    <>
       <div className="text-white w-full text-sm xl:h-[100vh] md:h-[100vh] flex flex-col xl:flex-row md:flex-row gap-5">
            <div className="h-[26vh] w-full xl:h-[75vh]">
              <YouTubePlayer url={play} />
              <div className="p-5 flex items-center gap-2 justify-center">
                <Play/>
                {title}
              </div>
            </div>
              <div className="w-full xl:w-[75vh] md:w-[25vh] xl:h-[100vh]">
                  <div className="w-full p-5 bg-gray-800 rounded-3xl xl:rounded-2xl flex flex-col xl:h-[100vh] md:h-[100vh] gap-5 overflow-auto">
                    <div className='text-lg flex items-center justify-center gap-2 rounded-t-3xl bg-gray-800'>
                      <ListVideo/>
                      <p>Playlist</p>
                      </div>
                    {Array.isArray(props.res) && props.res.map((item, index)=>{return(
                      <a key={item.videoId} className="bg-black relative rounded-2xl xl:rounded-lg" onClick={() => handlePlaylistSelect(item.embedUrl, item.title)} style={{cursor:'pointer'}} >
                      <div
                      className="h-[25vh] md:h-[20vw] xl:h-[15vw] rounded-2xl xl:rounded-lg bg-no-repeat w-full bg-cover"
                      style={{backgroundImage:`url(${item.thumbnails.maxres?.url})`}} >
                        <div className="bg-radial h-full rounded-2xl xl:rounded-lg p-5 w-full mask-radial-at-center absolute to-black to-90% ">
                          <p>{item.title}</p>
                        </div>
                      </div>
                      </a>
                    )})}
                  </div>
              </div>
       </div>
    </>
  )
}
