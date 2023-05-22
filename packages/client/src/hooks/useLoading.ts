import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "../MUDContext";
import { SyncState } from "@latticexyz/network";

export const useLoading = () => {
  const {
    components: { LoadingState },
    network: { singletonEntity },
  } = useMUD();

  const loadingState = useComponentValue(LoadingState, singletonEntity, {
    msg: "Connecting...",
    percentage: 0,
    state: SyncState.CONNECTING,
  });

  return {
    ...loadingState,
    isSyncStateLive: loadingState.state === SyncState.LIVE,
  };
};
