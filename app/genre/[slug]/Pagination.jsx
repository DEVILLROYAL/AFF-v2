'use client';

import { useRouter } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Pagination({ query, page, hasNext }) {
  const router = useRouter();

  const handleNextPage = () => {
    router.push(`/genre/${query}?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/genre/${query}?page=${page - 1}`);
  };

  return (
    <section className="w-max text-white">
      <div className="flex gap-5 p-2 items-center">

        <div>
          {page > 1 && (
            <button
              onClick={handlePrevPage}
              className="flex rounded-[10px] gap-3 hover:bg-gray-800 transition"
            >
              <ArrowLeftIcon />
            </button>
          )}
        </div>

        <div>
          {hasNext && (
            <button
              onClick={handleNextPage}
              className="flex rounded-[10px] gap-3 hover:bg-gray-800 transition"
            >
              <ArrowRightIcon />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
