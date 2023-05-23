import victory from "../public/ending/victory.png";
import star from "../public/ending/victory-star.png";
import description from "../public/description.png";
import backButton from "../public/button/back_button.png";
import { Link } from "react-router-dom";

export default function Victory() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black space-y-3">
      <img src={star} />
      <img src={victory} className="" />
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
