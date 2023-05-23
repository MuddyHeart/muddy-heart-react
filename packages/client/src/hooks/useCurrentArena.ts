import { useComponentValue } from "@latticexyz/react";
import { Entity, getComponentValue } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { useAccountData } from "./useAccountData";
import { bytes32ToEntity } from "../utils/bytes32ToEntity";
import { getArenaStatus } from "../helpers/arenas";

export const useCurrentArena = () => {
  const {
    components: { Arena, Player, Account },
  } = useMUD();

  const accountData = useAccountData();
  const currentArena = useComponentValue(
    Arena,
    bytes32ToEntity(accountData?.arena) as Entity
  );

  if (!currentArena) return null;

  return {
    ...currentArena,
    status: getArenaStatus(currentArena.status),
    playerDataList: currentArena.players.map((player) =>
      getComponentValue(Player, player as Entity)
    ),
    accountDataList: currentArena.players.map((player) =>
      getComponentValue(Account, player as Entity)
    ),
  };
};
