import { useComponentValue } from "@latticexyz/react";
import { Entity } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { useAccount } from "./useAccount";

export const useAccountData = () => {
  const {
    components: { Account },
    network: { network },
  } = useMUD();

  const account = useAccount();
  const accountData = useComponentValue(Account, account);
  return accountData;
};
