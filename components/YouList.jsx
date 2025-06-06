import YouCard from "./Cards/YouCard";
import Slidebtn from "./Buttons/Slidebtn";

export default async function YouList() {

  const ul = 'https://youtubeapi-tmc9.onrender.com/api/home';
  const data = await fetch(ul);
  let res = await data.json();

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <div id='lib-child'>
        <h4>Hindi Dubbed Animes</h4>
        </div>
        <div id="lib-child">
        <Slidebtn view='trendingAnimes'/>
        </div>
        </div>
        <div id="container">
          {res.map((item, index)=>{return( <YouCard key={item.playlistId} id={item.playlistId} image={item.image} name={item.engTitle ?? item.animeTitle} /> )})}
        </div>
        </div>
    </>
  )
}
