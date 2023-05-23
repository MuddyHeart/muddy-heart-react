import Player from "../sprite/Player";
// import Golem from "../../assets/sprites/golem/golem.png";
// import GolemConfig from "../../assets/sprites/golem/golem.json";
import DefaultConfig from "../../assets/sprites/default/default.json";
import Default from "../../assets/sprites/default/default.png";
import { useCurrentArena } from "../../hooks/useCurrentArena";
export default function Arena() {
  const currentArena = useCurrentArena();

  const players = currentArena?.players
    .filter((p) => Number(p) !== 0)
    .map((p, index) => {
      const player = currentArena?.accountDataList[index];
      return (
        <Player
          key={index}
          scale={3}
          sprites={{ Default }}
          actionConfig={DefaultConfig}
          state="Idle"
          name={player?.name}
        />
      );
    });

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-[520px] h-[280px] mt-28 relative">
        <div className="absolute left-0 top-24">{players[0]}</div>
        <div className="absolute right-0 top-24">{players[1]}</div>
        <div className="absolute right-28">{players[2]}</div>
        <div className="absolute left-28">{players[3]}</div>
        <div className="absolute left-28 bottom-0">{players[4]}</div>
        <div className="absolute right-28 bottom-0">{players[5]}</div>
      </div>
    </div>
  );
}
