'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function TrailerPlayer(props) {
  const [isMute, setIsMute] = useState(true);

const handleMute = () => {
  setIsMute(prev => !prev);
};

  return (
    <>
       <div className='relative h-[600px] m-[-120]'>
               <ReactPlayer
      url={props.url}
      playing
      muted={isMute}                     
      loop
      height='100%'                 
          config={{youtube: {
            playerVars: {
              autoplay: 1,
              encrypted_media:1,                  
              rel: 0,
              picture_in_picture:1,
              modestbranding: 1,
              controls: 0, 
              showinfo: 0,
              frameborder: 0,
              showsearch:0,
              rel:0,
              cc_load_policy:0,
              fs:0,
              },
              },
             }}/>
             
             <div>
              <button className='border cursor-pointer p-2 absolute bottom-0 rounded-full' onClick={handleMute}>
                {isMute ? <Volume2/> : <VolumeX/> }
              </button>
             </div>
       </div>
    </>
  )
}
