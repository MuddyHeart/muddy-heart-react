import Player from "../sprite/Player";

import Golem from "../../assets/sprites/golem/golem.png";
import GolemConfig from "../../assets/sprites/golem/golem.json";

import Warrior from "../../assets/sprites/warrior/warrior.png";
import WarriorConfig from "../../assets/sprites/warrior/warrior.json";
import WarriorHit from "../../assets/sprites/warrior/warrior-hit.png";
import { useState } from "react";

export default function Arena() {
  const [state, setState] = useState(false);
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-[330px] h-[280px] mt-28 relative">
        <div className="absolute">
          {/* Player 1 */}
          <Player
            scale={2.5}
            sprites={{ Warrior, WarriorHit }}
            actionConfig={WarriorConfig}
            state={state ? "Idle" : "Hit"}
            name="Warrior"
            stopLastFrame={false}
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute right-0">
          {/* Player 2 */}
          <Player
            scale={1 / 2}
            sprites={{Golem}}
            actionConfig={GolemConfig}
            state="Attack"
            stopLastFrame={false}
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute left-0 bottom-0">
          {/* Player 3 */}
          <Player
            scale={1 / 2}
            sprites={{Golem}}
            actionConfig={GolemConfig}
            state="Die"
            stopLastFrame={false}
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute right-0 bottom-0">
          {/* Player 4 */}
          <Player
            scale={1 / 2}
            sprites={{Golem}}
            actionConfig={GolemConfig}
            state="Idle"
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
      </div>
    </div>
  );
}
