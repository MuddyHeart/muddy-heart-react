import { useFrameAnimation } from "../../hooks/useFrameAnimation";
import useSkillStore from "../../stores/SkillStore";
import ProgressBar from "../loading/ProgressBar";
import Animation from "./Animation";

interface IAction {
  state: string;
  sprite: string;
  frame: {
    start: number;
    end: number;
  };
  height: number;
  width: number;
  fps: number;
}

interface IPlayer {
  sprites: { [key: string]: string; };
  scale?: number;
  startFrame?: number;
  endFrame?: number;
  startAnimate?: boolean;
  stopLastFrame?: boolean;
  actionConfig: IAction[];
  state: string;
  name?: string;
}

const Player = ({
  sprites,
  scale = 1,
  startAnimate = true,
  stopLastFrame,
  actionConfig,
  state,
  name = " ",
}: IPlayer) => {
  const {
    sprite,
    startFrame,
    endFrame,
    stopLastFrame: _stopLastFrame,
    width,
    height,
    fps
  } = useFrameAnimation({
    sprites,
    actionConfig,
    state,
  });

  const isSelectingTarget = useSkillStore(state => state.isSelectingTarget);
  const exectueTargetSkill = useSkillStore(state => state.exectueTargetSkill);

  const isMyCharacter = false;
  const isTargetable = isSelectingTarget && !isMyCharacter;

  const clickHandler = () => {
    if (isTargetable) exectueTargetSkill(name);
  }

  return (
    <div onClick={clickHandler} className={`flex flex-col items-center ${isTargetable ? "sword-cursor" : "cursor-default"} `}>
      <div className="flex flex-col items-center">
        <div className="text-white text-sm bit-font">{name}</div>
        <ProgressBar
          percentage={(state === "Idle") ? 80 : 0}
          barSize="w-16"
          bgBar="bg-main-purple"
          bgProgress="bg-main-green"
          border={false}
          duration="duration-1000"
        />
      </div>
      <Animation
        sprite={sprite}
        startFrame={startFrame}
        endFrame={endFrame}
        fps={fps}
        width={width}
        height={height}
        scale={scale}
        startAnimate={startAnimate}
        stopLastFrame={stopLastFrame !== undefined ? stopLastFrame : _stopLastFrame}
      />
    </div>
  );
};

export default Player;
