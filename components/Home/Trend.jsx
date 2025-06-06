import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";

export default async function Trend(props) {

  const ul = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(ul);
  let res = await data.json();
  let trend = res.trendingAnimes;

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <div id='lib-child'>
        <h4>Trending Animes</h4>
        </div>
        <div id="lib-child">
        <Slidebtn view='trendingAnimes' />
        </div>
        </div>
        <div id="container">
          {trend.map((index)=>{return( <Card key={index.id} id={index.id} image={index.img} name={index.name} /> )})}
        </div>
        </div>
    </>
  )
}
