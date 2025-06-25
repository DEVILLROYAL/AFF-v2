'use client'

import AnimeDetail from "./AnimeDetail";
import dynamic from 'next/dynamic'
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function YouAnimeDetail(props) {
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
            url={item.slug} epId={props.epData}
            episodes={item.episodes} type={item.type}
            rating={item.rating}
            />)
            })
            }
            {props.tlr === null ?
            <>
            <div className="relative flex justify-end">
                <img className='w-full xl:h-screen md:h-screen xl:rounded-tl-4xl md:rounded-tl-4xl xl:w-auto' src={props.image} alt={props.alt}/>
                {props.tlr !== null &&
                <span className="absolute w-full bg-radial mask-radial-at-center to-black top-0 h-full"/>}
            </div>
            </>
            :
            <div className='overflow-hidden'>
                <div className='h-[600px] relative xl:h-[850] pointer-events-none m-[-120]'>
                    <span className="absolute w-full bg-radial mask-radial-at-center to-65% to-black top-0 h-full"></span>
                    <ReactPlayer
                    url={props.tlr}
                    playing
                    muted={isMute}
                    loop
                    height='100%'
                    width='100%'
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
            {props.tlr !== null &&
                        <button className='border opacity-50 z-5 p-2 m-2 absolute top-0 right-0 w-max flex justify-center items-center rounded-full cursor-pointer' onClick={handleMute}>
                    {isMute ? <Volume2 size={15}/> : <VolumeX size={15}/> }
            </button>
            }
    </div>
    </>
  )
}
