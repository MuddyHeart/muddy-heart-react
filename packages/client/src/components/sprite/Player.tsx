import { useFrameAnimation } from "../../hooks/useFrameAnimation";
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
    <div>
      <div>Progress Bar...</div>
      <Animation
        sprite={sprite}
        startFrame={startFrame}
        endFrame={endFrame}
        fps={fps}
        width={width}
        heigth={heigth}
        scale={scale}
        startAnimate={startAnimate}
        stopLastFrame={stopLastFrame ? stopLastFrame : _stopLastFrame}
      />
    </div>
  );
};

export default Player;
