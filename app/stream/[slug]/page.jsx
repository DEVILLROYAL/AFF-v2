import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const ul = `https://test2-gold-phi.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=${decodeURIComponent(slug)}&server=hd-1&category=dub`;
  const data = await fetch(ul);
  const res = await data.json();
  const stream = await res?.data?.sources[0]?.url;

  const jikanUl = `https://api.jikan.moe/v4/anime/${res.data.malID}/episodes`;
  const jikanData = await fetch(jikanUl);
  const jikanRes = await jikanData.json();
  console.log(jikanRes);

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