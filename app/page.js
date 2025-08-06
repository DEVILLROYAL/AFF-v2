import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import { Suspense } from 'react';
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import HindiAnimes from "@/components/Home/HindiAnime";
import UpcomingAnime from "@/components/Home/UpcomingAnime";
import Loading from "./loading";


export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading/>} >
          <Slider/>
          <Trend/>
          <LatestEpisodes/>
          <LatestCompleted/>
          <UpcomingAnime/>
          <TopAnimes/>
      </Suspense>
    </>
  );
}
