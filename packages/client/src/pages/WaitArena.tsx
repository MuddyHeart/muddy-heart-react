import { useNavigate } from "react-router-dom";
import PlayerList from "../components/waiting/PlayerList";
import acceptButton from "../public/button/accept_button.png";
import { useState } from "react";

export default function WaitArena() {
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);

  const onAccept = () => {
    setAccept(true);
    navigate("/game");
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black px-36">
      <div className="relative w-[900px] h-[270px] bg-black bg-opacity-40 border border-orange-500 border-opacity-20 rounded-md">
        <div className="absolute -top-4 w-full">
          <div className="text-center bit-font text-white text-2xl">
            Waiting for Player
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <PlayerList />
        </div>
        <div className="flex justify-center">
          <button className={`${accept ? "" : "hover:scale-110 duration-200"}`} onClick={onAccept} disabled={accept}>
            <img
              src={acceptButton}
              className={`-mt-8 animate-none ${accept ? "opacity-50" : "hover:animate-pulse"} `}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
