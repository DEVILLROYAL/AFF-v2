import React from 'react'

export default async function EpisodePage({params}) {
    const {slug} = await params;
    console.log(slug);

    // const ul = `https://myanime-dun.vercel.app/aniwatch/episode-srcs?id=${slug}&server=megacloud&category=dub`;
    // const data = await fetch(ul);
    // let res = await data.json();
    // const source = await res.sources;
    // console.log(source.url);

  return (
    <>
       <div id="anime-border">
       </div>
    </>
  )
}
