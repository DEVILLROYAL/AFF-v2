import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";

export default async function LatestCompleted() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json();
    const lcAnime = await res.featuredAnimes.latestCompletedAnimes;

  return (
    <>
            <div id="libraury-border">
              <div id="libraury-title" >
              <div id='lib-child' >
                <h4>Trending Animes</h4>
                </div>
                <div id='lib-child'>
                  <Slidebtn view='featuredAnimes.latestCompletedAnimes' />
                </div>
                </div>
                <div id="container">
                  {lcAnime.map((index)=>{return( <Card key={index.id} id={index.id} image={index.img} name={index.name} /> )})}
                </div>
                </div>
    </>
  )
}
