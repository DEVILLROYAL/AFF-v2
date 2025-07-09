import Playlist from '@/components/Playlist';

export default async function WatchPage({params}) {
    const {slug} = await params;

        const ul = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
        const data = await fetch(ul);
        let res = await data.json();

  return (
    <>
    <Playlist res={res} />
    </>
  )
}
