import GenraSearchCard from '@/components/Cards/GenraSearchCard';
import { ScanSearch, Construction } from 'lucide-react';
import Pagination from './Pagination';

export default async function Page({ params, searchParams }) {

    const slug = params.slug;
    const page = Number(searchParams?.page || 1);

    const url = `https://yuma-anime-api-one.vercel.app/genre/${slug}?page=${page}`;
    const data = await fetch(url);
    const searchData = await data.json();

    const currentPage = searchData.current_page;
    const hasNextPage = searchData.has_next_page;
    const totalPage = searchData.total_pages;

  return (
    <>
       <section className='text-white flex flex-col gap-5 p-5'>
                <div className="flex w-full justify-between items-center gap-3 p-2">
          <Pagination
            query={slug}
            page={currentPage}
            hasNext={hasNextPage}
            totalPage={totalPage}
          />
          <div className="flex justify-center items-center p-2 gap-2">
            {searchData.length === 0 ? <Construction size={20} /> : <ScanSearch size={20} />}
          <p>
            {searchData.length === 0 ? "Sorry, no results for " : "Search results for "}
            <span className="text-blue-500 font-bold underline">{slug}</span>
          </p>
          </div>
        </div>
               <GenraSearchCard res={searchData}  />
       </section>
    </>
  );
}
