import React from 'react'
import SearchComponent from '@/components/SearchComponent';

export default async function StreamPage({ params }) {

    const { slug } = await params;

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json();
    let viewData = await res;

  return (
    <>
          <div  className="container" id="search-result-control">
            <div className="row" id="search-result">
              {viewData[slug]?.map((item, index)=>{ return (<div key={item.id} className="col my-1" id="search-col" >
                <SearchComponent
                name={item.name}
                id={item.id}
                image={item.img}
                format={item.duration}
                pg={item.rated}
                /></div>)})}
              </div>
           </div>
    </>
  )
}
