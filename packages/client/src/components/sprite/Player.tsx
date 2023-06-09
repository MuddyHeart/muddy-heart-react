import { useFrameAnimation } from "../../hooks/useFrameAnimation";
import useSkillStore from "../../stores/SkillStore";
import ProgressBar from "../loading/ProgressBar";
import Animation from "./Animation";

import Slash from "../../assets/effects/slash.png";
import SlashConfig from "../../assets/effects/slash.json";
import Buff from "../../assets/effects/buff.png";
import BuffConfig from "../../assets/effects/buff.json";
import Heal from "../../assets/effects/heal.png";
import HealConfig from "../../assets/effects/heal.json";

import { useCallback, useState } from "react";

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
  sprites: { [key: string]: string };
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
    fps,
  } = useFrameAnimation({
    sprites,
    actionConfig,
    state,
  });

  // Effect frame => Slash, Heal, Buff
  const [effectSkill, setEffect] = useState("");
  const {
    sprite: SpriteE,
    startFrame: startFrameE,
    endFrame: endFrameE,
    stopLastFrame: _stopLastFrameE,
    width: widthE,
    height: heightE,
    fps: fpsE,
    scale: scaleE,
  } = useFrameAnimation({
    sprites: { Slash, Buff, Heal },
    actionConfig: [...SlashConfig, ...BuffConfig, ...HealConfig],
    state: effectSkill,
  });

  const isSelectingTarget = useSkillStore((state) => state.isSelectingTarget);
  const exectueTargetSkill = useSkillStore((state) => state.exectueTargetSkill);

  const isMyCharacter = false;
  const isTargetable = isSelectingTarget && !isMyCharacter;

  const clickHandler = () => {
    setEffect("Slash");
    if (isTargetable) exectueTargetSkill(name);
  };
  console.log(SpriteE);

  const effectComponent = useCallback(() => {
    if (effectSkill.length <= 0) return;
    return (
      <Animation
        sprite={SpriteE}
        startFrame={startFrameE}
        endFrame={endFrameE}
        fps={fpsE}
        width={widthE}
        height={heightE}
        scale={scaleE || 1}
        startAnimate={true}
        stopLastFrame={true}
        onEnd={() => setEffect("")}
      />
    );
  }, [SpriteE, effectSkill.length, endFrameE, fpsE, heightE, scaleE, startFrameE, widthE]);

  return (
    <div
      onClick={clickHandler}
      className={`ralative flex flex-col items-center ${
        isTargetable ? "sword-cursor" : "cursor-default"
      } `}
    >
      <div className="flex flex-col items-center">
        <div className="text-white text-sm bit-font">{name}</div>
        <ProgressBar
          percentage={state === "Idle" ? 80 : 0}
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
        stopLastFrame={
          stopLastFrame !== undefined ? stopLastFrame : _stopLastFrame
        }
      />
      <div className="absolute top-[40px]">
        {effectComponent()}
      </div>
    </div>
  );
};

export default Player;
