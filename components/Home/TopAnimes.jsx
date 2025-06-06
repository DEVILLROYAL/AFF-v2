import Card from "../Cards/Card"
import Slidebtn from "../Buttons/Slidebtn";

export default async function TopAnimes() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json(); 
    const topDay = await res.top10Animes.day;
    const topWeek = await res.top10Animes.week;
    const topMonth = await res.top10Animes.month;

  return (
    <>
             <div id="libraury-border">
                <div id="libraury-header">
             <div id="libraury-title">
              <div id='lib-child'>
               <h4>Top 10 Animes</h4>
               </div>
                 <div id='lib-child'>
                     <Slidebtn view='top10Animes.day' />
                    </div>
                 </div>
               </div>
               <div id="libraury-title">
                {topDay.length !== 0 && 
                <div id='lib-child'>
               <h4>Day</h4>
               </div>
                 }
               </div>
               <div id="container">
                 {topDay.map((item, index)=>{return( <Card key={item.id} id={item.id} image={item.img} name={item.name} rank={item.rank} /> )})}
               </div>
               <div id="libraury-title" >
                {topWeek.length !== 0 &&
                <div id="lib-child">
               <h4>Week</h4>
               </div>
                }
               </div>
               <div id="container">
                 {topWeek.map((item, index)=>{return( <Card key={item.id} id={item.id} image={item.img} name={item.name} rank={item.rank} /> )})}
               </div>
               <div id="libraury-title">
               {topMonth.length !== 0 &&
               <div id="lib-child">
               <h4>Month</h4>
               </div>
                 }
               </div>
               <div id="container">
                 {topMonth.map((item, index)=>{return( <Card key={item.id} id={item.id} image={item.img} name={item.name} rank={item.rank} /> )})}
               </div>
               </div>
    </>
  )
}
