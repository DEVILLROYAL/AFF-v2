import TrailerPlayer from '@/components/Video/TrailerPlayer';
import AnimeDetail from '../../../components/Cards/AnimeDetail';
import Episodes from '@/components/Cards/Episodes';
import Slidebtn from '@/components/Buttons/Slidebtn';
import { Construction, ListVideo } from 'lucide-react';
import Showcase from '@/components/Cards/Showcase';


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
                <Showcase
                data={titles}
                tlr={tlr}
                slug={slug}
                epData={epData?.episodes[0]?.episodeId}
                alt={titles[0].title_english ?? titles[0].title}
                image={tlrImage.large_image_url}/>
                <div className='text-wrap w-auto max-h-36 overflow-auto text-center m-5'> 
                <p>{titles[0]?.synopsis}</p>
                </div>
                  <div>
                    {epData?.episodes.length > 0 &&
                            <div className='flex justify-between p-2 items-center w-full'>
                              <div className='flex justify-center items-center gap-2'>
                                <ListVideo/>
                                <h4>Episodes</h4>
                              </div>
                              <div>
                                <Slidebtn view='trendingAnimes' />
                              </div>
                            </div>}
                    <div className='overflow-auto p-2 xl:p-5 w-full max-h-[515px]'>
                      <div className='grid gap-2 md:grid-cols-4 xl:gap-5 xl:grid-cols-8 grid-cols-2'>
                        {epData?.episodes.map((item, index)=>{return(
                            <Episodes
                            epId={item.episodeId}
                            key={index}
                            name={item.title}
                            url={tlrImage.large_image_url}
                            rank={item.number}
                            />
                            )})}
                      </div>
                    </div>
                  </div>
                </div>
        </>
  )
}
