import SearchComponent from "../../../components/SearchComponent";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.animes;

return(
      <>
          <div  className="container" id="search-result-control">
            <div className="row" id="search-result">
              {searchData.map((item, index)=>{ return (<div key={item.id} className="col my-1" id="search-col" >
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
