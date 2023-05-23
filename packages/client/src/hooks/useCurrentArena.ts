import { useComponentValue } from "@latticexyz/react";
import { Entity } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { useAccountData } from "./useAccountData";
import { bytes32ToEntity } from "../utils/bytes32ToEntity";
import { getArenaStatus } from "../helpers/arenas";

export const useCurrentArena = () => {
  const {
    components: { Arena },
  } = useMUD();

  const accountData = useAccountData();
  const currentArena = useComponentValue(
    Arena,
    bytes32ToEntity(accountData?.arena) as Entity
  );

  if (!currentArena) return null;

  return { ...currentArena, status: getArenaStatus(currentArena.status) };
};
