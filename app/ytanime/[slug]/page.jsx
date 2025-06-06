import TrailerPlayer from '@/components/Video/TrailerPlayer';
import YouAnimeDetail from '@/components/Cards/YouAnimeDetail';


export default async function AnimePage({ params }) {
    const { slug } = await params;

    const lnk = `https://youtubeapi-tmc9.onrender.com/api/anime?playlistId=${slug}&limit=1`
    const info = await fetch(lnk);
    const cmData = await info.json();

  return (
        <>
               <div id="detail-border">
                <div id="detail-player">
                    {cmData.map((item,index)=>{return(<YouAnimeDetail key={index} name={item.engTitle ?? item.animeTitle} duration={item.duration} id={item.playlistId} episodes={item.episodes} type={item.type} rating={item.rating} />)})}
                    {cmData[0]?.trailer === null ? <div id="trailerImg-border">
                      <img src={cmData[0]?.image} id='trailerImage' />
                      <div  id='trailerImage-2'></div>
                    </div> : 
                    <div id="youtube-player">
                       <TrailerPlayer url={cmData[0]?.trailer} />
                       <div id="black-filter"></div>
                    </div>
                      }
                    </div>
                <div id="detail-desc"> 
                <p>{cmData[0]?.description}</p>
                </div>
                </div>
        </>
  )
}
