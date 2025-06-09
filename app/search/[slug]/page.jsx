import SearchComponent from "../../../components/SearchComponent";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.animes;

return(
      <>
          <div  className="border p-2 md:p-2 xl:p-5">
            <div className="grid border w-full grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-2">
              {searchData.map((item, index)=>{ return (<div key={item.id} className="grid border grid-rows-1">
                <SearchComponent
                name={item.name}
                id={item.id}
                image={item.img}
                duration={item.duration}
                pg={item.rated}
                dub={item.episodes.dub}
                sub={item.episodes.sub}
                /></div>)})}
              </div>
           </div>
      </>
  )  
}
