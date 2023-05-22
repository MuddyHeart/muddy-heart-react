import { useMemo } from "react";

interface IAction {
  name: string;
  frame: {
    start: number;
    end: number;
  };
}

interface IUseFrameAnimation {
  actionConfig: IAction[];
  state: string;
}

export const useFrameAnimation = ({
  actionConfig,
  state,
}: IUseFrameAnimation) => {
  const currentAction = useMemo(() => {
    const action = actionConfig.find((action) => action.name === state);
    if(!action) return;
    return {
      ...action,
      startFrame: action.frame.start - 1,
      endFrame: action.frame.end,
      stopLastFrame: action.name !== "Idle"
    }
  }, [actionConfig, state]);

  return {
    ...currentAction,
  };
};
