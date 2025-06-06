'use client'
import {useState} from "react";
import { useRouter } from "next/navigation"
import Search from "./Search";

export default function SearchScript() {

  const router = useRouter();
  const [quary, setQuary] = useState("");

  const handleSearchClick = async (slug) => {
    router.push(`/search/${slug}`);
  }; 

  return (
    <>
        <Search onClick={() => handleSearchClick(quary)} onChange={e => setQuary(e.target.value)} value={quary} />
    </>   
  )
}
