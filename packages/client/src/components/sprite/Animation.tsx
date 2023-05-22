import { SpriteAnimator } from "react-sprite-animator";

interface ISpriteAnimation {
  sprite: string;
  fps?: number;
  width?: number;
  heigth?: number;
  scale?: number;
  startFrame?: number;
  endFrame?: number;
  startAnimate?: boolean;
  stopLastFrame?: boolean;
  onClick?: () => void;
  className?: string;
}

const SpriteAnimation = ({
  sprite,
  fps = 5,
  width = 32,
  heigth = 32,
  scale = 1,
  startFrame = 0,
  endFrame = 3,
  startAnimate = true,
  stopLastFrame = false,
  onClick,
  className = "",
}: ISpriteAnimation) => {
  return (
    <div onClick={onClick} className={className}>
      <SpriteAnimator
        sprite={sprite}
        shouldAnimate={startAnimate}
        fps={fps}
        width={width}
        height={heigth}
        startFrame={startFrame} // start frame [0]
        scale={scale} // scale is 1/5 => x5
        stopLastFrame={stopLastFrame}
        direction="horizontal"
        reset={!startAnimate}
        wrapAfter={endFrame}
        frameCount={endFrame}
      />
    </div>
  );
};

export default SpriteAnimation;
