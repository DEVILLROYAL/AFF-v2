'use client'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function YoutubePlayer(props) {
  return (
    <>
          <ReactPlayer
          controls
          url={props.url}
          height={'100%'}
          width={'100%'} 
          config={{youtube: {
            playerVars: {
              autoplay: 1,
              encrypted_media:1,                  
              rel: 0,
              modestbranding: 1,
              showinfo: 0,
              frameborder: 0,
              showsearch:0,
              rel:0,
              cc_load_policy:0,
              fs:1,
              },
              },
             }}
           />
    </>
  )
}
