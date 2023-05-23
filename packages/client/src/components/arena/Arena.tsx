import Player from "../sprite/Player";

import Golem from "../../assets/sprites/golem/golem.png";
import GolemConfig from "../../assets/sprites/golem/golem.json";

import DefaultConfig from "../../assets/sprites/default/default.json";
import Default from "../../assets/sprites/default/default.png";
export default function Arena() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-[330px] h-[280px] mt-28 relative">
        <div className="absolute">
          {/* Player 1 */}
          <Player
            scale={3}
            sprites={{ Default }}
            actionConfig={DefaultConfig}
            state="Idle"
            name="Warrior"
            stopLastFrame={false}
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute right-0">
          {/* Player 2 */}
          <Player
            scale={3}
            sprites={{ Default }}
            actionConfig={DefaultConfig}
            state="Idle"
            stopLastFrame={false}
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute left-0 bottom-0">
          {/* Player 3 */}
          <Player
            scale={3}
            sprites={{ Default }}
            actionConfig={DefaultConfig}
            state="Idle"
            stopLastFrame={false}
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
        <div className="absolute right-0 bottom-0">
          {/* Player 4 */}
          <Player
            scale={3}
            sprites={{ Default }}
            actionConfig={DefaultConfig}
            state="Idle"
            name="Golem"
          />
          {/* <div className="w-14 h-14 rounded-full bg-gray-400" /> */}
        </div>
      </div>
    </div>
  );
}
