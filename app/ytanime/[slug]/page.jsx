import YouAnimeDetail from "@/components/Cards/YouAnimeDetail";
import { ListVideo } from "lucide-react";
import YtEpisodes from "@/components/Cards/YtEpisodes";

export default async function AnimePage({ params }) {
    const { slug } = await params;

    const lnk = `https://youtubeapi-tmc9.onrender.com/api/anime?playlistId=${slug}&limit=1`
    const info = await fetch(lnk);
    const cmData = await info.json();

    const ul = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
    const data = await fetch(ul);
    const res = await data.json();

  return (
        <>
             <div className="bg-black text-white">
                <YouAnimeDetail
                data={cmData}
                tlr={cmData[0]?.trailer}
                slug={cmData[0]?.playlistId}
                // epData={epData?.episodes[0]?.episodeId}
                alt={cmData[0]?.engTitle ?? cmData.animeTitle}
                image={cmData[0]?.image}/>
                <div className='text-wrap w-auto max-h-36 overflow-auto text-center m-5'> 
                <p>{cmData[0]?.description}</p>
                </div>
                  <div>
                    {res?.length > 0 &&
                            <div className='flex justify-between p-2 items-center w-full'>
                              <div className='flex justify-center items-center gap-2'>
                                <ListVideo/>
                                <h4>Episodes</h4>
                              </div>
                              <div>
                                {/* <Slidebtn view='trendingAnimes' /> */}
                              </div>
                            </div>}
                    <div className='overflow-auto bg-gray-900 rounded-2xl p-2 xl:p-5 w-full max-h-screen'>
                      <div className='grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5'>
                        {res?.map((item, index)=>{return(
                            <YtEpisodes
                            epId={item.videoId}
                            key={index}
                            name={item.title}
                            url={cmData[0]?.image}
                            rank={index}
                            />
                            )})}
                      </div>
                    </div>
                  </div>
                </div>
        </>
  )
}
