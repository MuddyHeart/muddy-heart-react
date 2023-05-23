import title from "../public/title.png";
import description from "../public/description.png";
import playButton from "../public/button/play_button.png";
import skillButton from "../public/button/skill_button.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black">
      <img src={title} className="" />
      <img src={description} className="mt-3" />
      <Link
        to={"/waiting"}
        relative="path"
        className="hover:scale-110 duration-200"
      >
        <img src={playButton} className="mt-10 hover:animate-pulse" />
      </Link>
      <Link
        to={"/select-skill"}
        relative="path"
        className="hover:scale-110 duration-200"
      >
        <img src={skillButton} className="mt-5 hover:animate-pulse" />
      </Link>
    </div>
  );
}
