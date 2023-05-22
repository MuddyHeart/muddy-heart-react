import background from "../public/background.png"
import title from "../public/title.png"
import description from "../public/description.png"
import playButton from "../public/play_button.png"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-main-purple w-full h-screen overflow-x-scroll grid place-items-center">
      <div className="w-[1200px] h-[690px]" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black">
          <img src={title} className="" />
          <img src={description} className="mt-3" />
          <Link to={"/game"} relative="path" className="hover:scale-110 duration-200">
            <img src={playButton} className="mt-10 animate-bounce" />
          </Link>
        </div>
      </div>
    </div>
  )
}
