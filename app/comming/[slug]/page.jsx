import { Hammer, Hourglass, Lightbulb, Mail, Rocket } from "lucide-react";

export default async function page({params}) {
    const {slug} = await params;
    
  return (
    <>
    <div className="text-white h-[100vh]">
      <div className="p-2 md:p-5 h-full xl:p-5 flex flex-col justify-center items-center gap-2 md:gap-5 xl:gap-5 text-xs md:text-lg xl:text-xl">
        <div className="flex justify-center gap-2 md:gap-5 xl:gap-5 items-center">
          <Rocket/>
          <h1>Streaming service is coming soon !</h1>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center text-xs md:text-sm">
          <div className="p-2">
            <p>
            We're working hard behind the scenes to bring you an experience that's worth the wait. Whether you're looking for cutting-edge features, fresh content, or something totally unique — it's all in the works.
            </p>
          </div>
          <div className="flex text-xs flex-col gap-2">
            <div className="flex gap-2 md:gap-5 xl:gap-5">
              <Hammer size={15}/>
              <p>
                Currently Under Development
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 xl:gap-5">
              <Lightbulb size={15}/>
              <p>
                Packed With Innovation
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 xl:gap-5">
              <Hourglass size={15}/>
              <p>
                Launching Soon — Stay Tuned!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 md:gap-5 xl:gap-5">
              <p>
                Don't miss out! Be the first to know when we go live.
              </p>
            </div>
            <div className="flex gap-2 md:gap-5 xl:gap-5">
              <Mail size={20}/>
              <p>
                Subscribe or follow us for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
