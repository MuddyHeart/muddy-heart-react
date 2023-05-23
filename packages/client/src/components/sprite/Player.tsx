import { useFrameAnimation } from "../../hooks/useFrameAnimation";
import useSkillStore from "../../stores/SkillStore";
import ProgressBar from "../loading/ProgressBar";
import Animation from "./Animation";

interface IAction {
  name: string;
  frame: {
    start: number;
    end: number;
  };
}

interface IPlayer {
  sprite: string;
  fps?: number;
  width?: number;
  heigth?: number;
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
  sprite,
  fps = 5,
  width = 32,
  heigth = 32,
  scale = 1,
  startAnimate = true,
  stopLastFrame,
  actionConfig,
  state,
  name = " ",
}: IPlayer) => {
  const {
    startFrame,
    endFrame,
    stopLastFrame: _stopLastFrame,
  } = useFrameAnimation({
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
          percentage={80}
          barSize="w-16"
          bgBar="bg-main-purple"
          bgProgress="bg-main-green"
          border={false}
        />
      </div>
      <Animation
        sprite={sprite}
        startFrame={startFrame}
        endFrame={endFrame}
        fps={fps}
        width={width}
        heigth={heigth}
        scale={scale}
        startAnimate={startAnimate}
        stopLastFrame={stopLastFrame !== undefined ? stopLastFrame : _stopLastFrame}
      />
    </div>
  );
};

export default Player;
