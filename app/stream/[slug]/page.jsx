import Server from '@/components/Cards/Server';
import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const ul = `https://test2-gold-phi.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=${decodeURIComponent(slug)}&server=hd-1&category=dub`;
  const data = await fetch(ul);
  const res = await data.json();
  const stream = await res?.data?.sources[0]?.url;

  console.log(stream);

  const jikanUl = `https://api.jikan.moe/v4/anime/${res.data.malID}`;
  const jikanData = await fetch(jikanUl);
  const jikanRes = await jikanData.json();
  console.log(jikanRes.data.title_english);

  return (
    <>
        <div>
          <div>
            <StreamPlayer url={stream} />
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