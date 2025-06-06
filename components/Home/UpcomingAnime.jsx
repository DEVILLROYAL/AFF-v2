import Card from "../Cards/Card";
import Slidebtn from "../Buttons/Slidebtn";

export default async function UpcomingAnime(props) {

  const ul = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(ul);
  let res = await data.json();
  let upanime = res.topUpcomingAnimes;

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <div id='lib-child'>
        <h4>Upcoming Animes</h4>
        </div>
        <div id='lib-child'>
          <Slidebtn view='topUpcomingAnimes' />
          </div>
        </div>
        <div id="container">
          {upanime.map((item,index)=>{return( <Card key={`${item.id}-${index}`} id={item.id} image={item.img} name={item.name} rank={item.format} /> )})}
        </div>
        </div>
    </>
  )
}
