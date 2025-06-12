import StreamButton from "../Buttons/StreamButton";

export default function AnimeDetail(props) {
  return (
    <>
       <div className="absolute xl:h-full bg-gradient-to-b xl:p-5 from-transparent to-black bottom-0 h-max  p-2 w-full z-1 gap-2 flex flex-col xl:gap-5 justify-center items-center xl:items-start">
        <div className="w-full text-center xl:text-left">
        <p className="text-wrap text-xl xl:text-5xl text-shadow-lg text-shadow-black">{props.name}</p>
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start gap-2">
          <div className="xl:block hidden md:block">
            <StreamButton/>
            </div>
                    <div className="border h-max w-max text-xs rounded xl:rounded-none">
              {props.rating && 
            <p className="text-shadow-md p-1 xl:p-2 text-shadow-black">{props.rating}</p>
              }
            </div>
            <div className="flex flex-row-reverse text-xs w-max gap-2">
            <div className="items-center gap-2 h-max flex w-max">
              <p className="border p-1 xl:p-2">{props.type}</p>
            </div>
            <div className="h-max w-max">
              {props.episodes && 
              <p className="border p-1 xl:p-2">Episodes {props.episodes}</p>
              }
            </div>
            <div className="h-max w-max">
              {props.duration && 
              <p className="border p-1 xl:p-2">Duration {props.duration}</p>
              }
            </div>
            </div>
        </div>
       </div>
    </>
  )
}
