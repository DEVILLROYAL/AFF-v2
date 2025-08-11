import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import { Suspense } from 'react';
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import UpcomingAnime from "@/components/Home/UpcomingAnime";
import Loading from "./loading";
import HindiAnime from "@/components/Home/HindiAnime";


export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading/>} >
          <Slider/>
          <Trend/>
          <HindiAnime/>5
          <LatestEpisodes/>
          <LatestCompleted/>
          <UpcomingAnime/>
          <TopAnimes/>
      </Suspense>
    </>
  );
}
