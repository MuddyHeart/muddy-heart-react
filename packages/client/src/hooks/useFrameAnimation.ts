import { useMemo } from "react";

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

interface IUseFrameAnimation {
  sprites: { [key: string]: string };
  actionConfig: IAction[];
  state: string;
}

export const useFrameAnimation = ({
  sprites,
  actionConfig,
  state,
}: IUseFrameAnimation) => {
  const currentAction = useMemo(() => {
    const action = actionConfig.find((action) => action.state === state);
    if (!action || !sprites[action.sprite])
      return {
        ...action,
        startFrame: 0,
        endFrame: 0,
        stopLastFrame: true,
        sprite: sprites[0],
      };
    return {
      ...action,
      startFrame: action.frame.start - 1,
      endFrame: action.frame.end,
      stopLastFrame: action.state !== "Idle",
      sprite: sprites[action.sprite],
    };
  }, [actionConfig, sprites, state]);

  return {
    ...currentAction,
  };
};
