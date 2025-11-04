import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const ul = `https://yuma-anime-api-one.vercel.app/watch?episodeId=${decodeURIComponent(slug)}`;
  const data = await fetch(ul);
  const res = await data.json();
  const epUrl = await res?.sources?.[0];
  const corsUl = await epUrl?.url;

  const stream = `https://gogoanime-and-hianime-proxy-ten-murex.vercel.app/m3u8-proxy?url=${corsUl}`;

  const jikanUl = `https://api.jikan.moe/v4/anime/${res.data?.malID}/episodes`;
  const jikanData = await fetch(jikanUl);
  const jikanRes = await jikanData.json();

  return (
    <>
        <div className='text-white'>
          <div className='m-10 rounded '> 
            <StreamPlayer url={stream} />
          </div>
          <div className='border m-10 h-16'>
            <p>
            </p>
          </div>
        </div>
    </>
  );
}