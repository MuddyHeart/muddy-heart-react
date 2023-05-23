import { useCallback, useEffect } from "react";
import WarriorProfile from "../../assets/profiles/warrior-profile.png";
import { useCurrentArena } from "../../hooks/useCurrentArena";

const PlayerList = () => {
  // Mock => "enter", "wait", "accept"

  const currentArena = useCurrentArena();

  const players = currentArena
    ? currentArena.players.map((player) => {
        return Number(player) !== 0 ? "enter" : "wait";
      })
    : ["enter", "enter", "wait", "wait", "wait", "wait"];

  const activePlayers = currentArena ? currentArena.players.filter((player) => Number(player) !== 0) : [];

  useEffect(() => {
    if (currentArena) {
      console.log(currentArena.status);
    }
  }, [currentArena])

  const playerComponent = useCallback(() => {
    return players.map((player, key: number) => {
      return (
        <div
          key={key}
          className={`${
            player !== "wait"
              ? "border bottom-2 border-yellow-500 bg-yellow-600 bg-opacity-10"
              : "bg-black bg-opacity-50"
          }`}
        >
          <div className="relative">
            <img
              src={WarriorProfile}
              width={72}
              height={72}
              className={`${player === "wait" && "opacity-50"}`}
            />
            {player === "accept" && (
              <div
                className="top-0 absolute bg-yellow-500 opacity-25"
                style={{ width: 72, height: 72 }}
              />
            )}
          </div>
        </div>
      );
    });
  }, [players]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex space-x-5">{playerComponent()}</div>
      <div className="bit-font text-white text-xs text-end w-full">
        {activePlayers.length}/{players.length} players in the room.
      </div>
    </div>
  );
};

export default PlayerList;
