import TrailerPlayer from '@/components/Video/TrailerPlayer';
import AnimeDetail from '../../../components/Cards/AnimeDetail';
import Episodes from '@/components/Episodes';
import Slidebtn from '@/components/Buttons/Slidebtn';


export default async function AnimePage({ params }) {
    const { slug } = await params;

    const lnk = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`
    const info = await fetch(lnk);
    const cmData = await info.json();
    const tlr = await cmData.data[0].trailer;
    const titles = await cmData.data;
    const tlrImage = await cmData.data[0].images.webp;
    
      const ul = `https://test-delta-eight-77.vercel.app/api/v2/hianime/anime/${slug}/episodes`;
      const data = await fetch(ul);
      let res = await data.json();
      const epData = await res.data;

  return (
        <>
               <div className="bg-black text-white">
                <div className='relative w-full'>
                    {titles.map((item,index)=>{return(<AnimeDetail key={index} name={titles[0].title_english ?? titles[0].title} duration={item.duration} url={slug} epId={epData?.episodes[0]?.episodeId} episodes={item.episodes} type={item.type} rating={item.rating} />)})}
                    {tlr.embed_url === null ? <div id="trailerImg-border">
                      <img src={tlrImage.large_image_url} id='trailerImage'/>
                      <div  id='trailerImage-2'></div>
                    </div> : 
                    <div className='overflow-hidden relative'>
                       <TrailerPlayer url={tlr.embed_url} />
                    </div>
                      }
                    </div>
                <div className='text-wrap text-center p-2'> 
                <p>{titles[0]?.synopsis}</p>
                </div>
                  {/* <div className="container">
                            <div id="libraury-title" >
                              <div id='lib-child'>
                              <h4>Episodes</h4>
                              </div>
                              <div id="lib-child">
                              <Slidebtn view='trendingAnimes' />
                              </div>
                              </div>
                    <div className="contailer" id="search-result-control" >
                      <div className="row" id="search-result" >
                        {epData?.episodes.map((item, index)=>{return(<div className="col my-1 mx-1" id='search-col' key={index} >
                          <Episodes epId={item.episodeId} name={item.title} url={tlrImage.large_image_url} order={item.number} /></div>)})}
                      </div>
                    </div>
                  </div> */}
                </div>
        </>
  )
}
