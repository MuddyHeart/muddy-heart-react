import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Account, Skill }: ClientComponents
) {

  const createAccount = async (name: string) => {
    const tx = await worldSend("createAccount", [name]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Account, singletonEntity);
  }

  const setName = async (name: string) => {
    const tx = await worldSend("setName", [name]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Account, singletonEntity);
  }

  const setSkill = async (id: string, slotIndex: number) => {
    const tx = await worldSend("setSkill", [id, slotIndex]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Account, singletonEntity);
  }

  const createRandomSkill = async () => {
    const tx = await worldSend("createRandomSkill", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Skill, singletonEntity);
  }

  const createArena = async () => {
    const tx = await worldSend("createArena", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Skill, singletonEntity);
  }

  const joinArena = async (id: string) => {
    const tx = await worldSend("joinArena", [id]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Skill, singletonEntity);
  }

  const exitArena = async () => {
    const tx = await worldSend("exitArena", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Skill, singletonEntity);
  }

  const startBattle = async () => {
    const tx = await worldSend("startBattle", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Skill, singletonEntity);
  }

  return {
    createAccount,
    setName,
    setSkill,

    createRandomSkill,

    createArena,
    joinArena,
    exitArena,
    startBattle
  };
}
