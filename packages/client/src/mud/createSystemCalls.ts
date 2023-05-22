import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Player }: ClientComponents
) {

  const joinBattle = async () => {
    const tx = await worldSend("joinBattle", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Player, singletonEntity);
  }

  const attack = async (target: string) => {
    const tx = await worldSend("attack", [target]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Player, singletonEntity);
  }

  return {
    joinBattle,
    attack
  };
}
