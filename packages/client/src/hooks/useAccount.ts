import { useComponentValue } from "@latticexyz/react";
import { Entity } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";

export const useAccount = () => {
  const {
    components: { Account },
    network: { network },
  } = useMUD();

  const address = network.connectedAddress.get();
  const account = address as Entity;
  return account;
};
