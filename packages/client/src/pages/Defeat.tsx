import defeat from "../public/ending/defeat.png";
import description from "../public/description.png";
import backButton from "../public/button/back_button.png";
import { Link } from "react-router-dom";

export default function Defeat() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black space-y-3">
      <img src={defeat} className="" />
      <img src={description} className="mt-3" />
      <Link
        to={"/home"}
        relative="path"
        className="hover:scale-110 duration-200"
      >
        <img src={backButton} className="mt-10 hover:animate-pulse" />
      </Link>
    </div>
  );
}