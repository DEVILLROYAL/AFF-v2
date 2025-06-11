import StreamButton from "../Buttons/StreamButton";

export default function AnimeDetail(props) {
  return (
    <>
       <div className="absolute bg-gradient-to-b from-transparent to-black bottom-0 h-max  p-2 w-full z-1 gap-2 flex flex-col justify-center items-center">
        <div className="border w-max p-1 text-xs rounded">
          {props.rating && 
        <p className="text-shadow-md text-shadow-black">{props.rating}</p>
          }
        </div>
        <div className="w-full text-center">
        <p className="text-wrap text-xl text-shadow-lg text-shadow-black">{props.name}</p>
        </div>
        <div className="flex flex-row-reverse text-xs w-max gap-2">
        <div className="items-center gap-2 h-max flex w-max">
          <p className="border p-1">{props.type}</p>
        </div>
        <div className="gap-2 h-max flex w-max">
          {props.episodes && 
          <p className="border p-1">Episodes {props.episodes}</p>
          }
        </div>
        <div className="gap-2 h-max flex w-max">
          {props.duration && 
          <p className="border p-1">Duration {props.duration}</p>
          }
        </div>
        </div>
       </div>
    </>
  )
}
