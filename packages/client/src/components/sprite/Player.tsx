import { useFrameAnimation } from "../../hooks/useFrameAnimation";
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
  name=" ",
}: IPlayer) => {
  const {
    startFrame,
    endFrame,
    stopLastFrame: _stopLastFrame,
  } = useFrameAnimation({
    actionConfig,
    state,
  });
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="font-medium text-white text-sm">{name}</div>
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
