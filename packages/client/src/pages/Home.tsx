import title from "../public/title.png";
import description from "../public/description.png";
import playButton from "../public/button/play_button.png";
import skillButton from "../public/button/skill_button.png";
import { Link, useNavigate } from "react-router-dom";
import { useMUD } from "../MUDContext";
import { useArenas } from "../hooks/useArenas";
import { entityToBytes32 } from "../utils/entityToBytes32";
import { useCurrentArena } from "../hooks/useCurrentArena";
import { useEffect } from "react";

export default function Home() {
  const {
    systemCalls: { createArena, joinArena },
  } = useMUD();

  const navigate = useNavigate();
  const currentArena = useCurrentArena();
  const arenas = useArenas();

  const handleJoinArena = () => {
    const arenaList = arenas.filter((arena) => {
      if (!arena || !arena.players) return false;
      const players = arena.players.filter((player) => Number(player) !== 0);
      return players.length < 6;
    });

    if (arenaList.length === 0) {
      createArena();
    } else {
      const rand = Math.floor(Math.random() * arenaList.length);
      joinArena(entityToBytes32(arenaList[rand].id));
    }
  };

  useEffect(() => {
    if (currentArena) {
      navigate("/waiting");
    }
  }, [currentArena]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black">
      <img src={title} className="" />
      <img src={description} className="mt-3" />
      <div
        className="hover:scale-110 duration-200 cursor-pointer"
        onClick={handleJoinArena}
      >
        <img src={playButton} className="mt-10 hover:animate-pulse" />
      </div>
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
