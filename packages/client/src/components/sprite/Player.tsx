import { useFrameAnimation } from "../../hooks/useFrameAnimation";
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
  return (
    <div className="flex flex-col items-center sword-cursor">
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
