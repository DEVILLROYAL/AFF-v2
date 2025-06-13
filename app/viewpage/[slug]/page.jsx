import React from 'react'
import SearchComponent from '@/components/SearchComponent';

export default async function StreamPage({ params }) {

    const { slug } = await params;

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json();

  return (
    <>
    <SearchComponent res={res} slug={slug} />
    </>
  )
}
