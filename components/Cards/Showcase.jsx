'use client'

import TrailerPlayer from "../Video/TrailerPlayer";
import AnimeDetail from "./AnimeDetail";
import dynamic from 'next/dynamic'
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function Showcase(props) {
const [isMute, setIsMute] = useState(true);

const handleMute = () => {
  setIsMute(prev => !prev);
};
  return (
    <>
    <div className='relative w-full'>
        {props.data.map((item,index)=>{return(
            <AnimeDetail
            key={index}
            name={props.alt}
            duration={item.duration}
            url={props.slug} epId={props.epData}
            episodes={item.episodes} type={item.type}
            rating={item.rating}
            />)
            })
            }
            {props.tlr.embed_url === null ?
            <>
            <div className="relative">
                <img className='w-full' src={props.image} alt={props.alt}/>
                <span className="absolute w-full bg-radial mask-radial-at-center to-black top-0 h-full"/>
            </div>
            </>
            :
            <div className='overflow-hidden'>
                <div className='h-[600px] pointer-events-none m-[-120]'>
                    <ReactPlayer
                    url={props.tlr.embed_url}
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
                </div>
            </div>
            }
            <button className='border z-5 p-2 m-2 absolute top-0 right-0 w-max flex justify-center items-center rounded cursor-pointer' onClick={handleMute}>
                    {isMute ? <Volume2 size={15}/> : <VolumeX size={15}/> }
            </button>
    </div>
    </>
  )
}
