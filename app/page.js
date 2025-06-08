import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import RecommandedAnimes from "@/components/Home/RecommandedAnimes";
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import UpcomingAnime from "@/components/Home/UpcomingAnime";


export default function Home() {
  return (
    <>
       <Slider/>
       <Trend/>
       <LatestEpisodes/>
       <LatestCompleted/>
       <UpcomingAnime/>
       <TopAnimes/>
    </>
  );
}
