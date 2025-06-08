import LatestEpisodes from "@/components/Home/LatestEpisodes";
import Slider from "@/components/Home/Slider";
import Trend from "@/components/Home/Trend";


export default function Home() {
  return (
    <>
       <Slider/>
       <Trend/>
       <LatestEpisodes/>
    </>
  );
}
