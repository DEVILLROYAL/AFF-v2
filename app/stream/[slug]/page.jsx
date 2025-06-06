import Server from '@/components/Cards/Server';
import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  // const ul = `https://test-delta-eight-77.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=${decodeURIComponent(slug)}&server=hd-2&category=sub`;
  // const data = await fetch(ul);
  // const res = await data.json();
  // const stream = await res?.data?.sources[0].url;

  // const jikanUl = `https://api.jikan.moe/v4/anime/${res.data.malID}`;
  // const jikanData = await fetch(jikanUl);
  // const jikanRes = await jikanData.json();
  // console.log(jikanRes.data.title_english);

  return (
    <>
        <div>
          <div>
            <StreamPlayer/>
          </div>
          <div id='anime-title'>
            <p>
              Anime title
            </p>
          </div>
        </div>
    </>
  );
}