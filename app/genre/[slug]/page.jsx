import GenraSearchCard from '@/components/Cards/GenraSearchCard';

export default async function Page({ params }) {

    const { slug } = await params;

    const url = `https://yuma-anime-api-one.vercel.app/genre/${slug}`;
    const data = await fetch(url);
    const searchData = await data.json();
    console.log(searchData);

  return (
    <>
       <GenraSearchCard res={searchData}  />
    </>
  );
}
