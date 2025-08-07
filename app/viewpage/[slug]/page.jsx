import React from 'react'
import SearchComponent from '@/components/SearchComponent';

export default async function StreamPage({ params }) {

    const { slug } = await params;

    const ul = 'https://test2-gold-phi.vercel.app/api/v2/hianime/home';
    const data = await fetch(ul);
    let res = await data.json();
    const viewRes = await res.data;

  return (
    <>
    <SearchComponent res={viewRes} slug={slug} />
    </>
  )
}
