import { useEntityQuery } from "@latticexyz/react";
import { Entity, Has, HasValue, getComponentValue } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { useAccount } from "./useAccount";
import { bytes32ToEntity } from "../utils/bytes32ToEntity";
import { getSkillName, getSkillTargetType } from "../helpers/skills";
import { useAccountData } from "./useAccountData";

export const useSkillset = () => {
  const {
    components: { Skill },
  } = useMUD();
  const accountData = useAccountData();

  if (!accountData || !accountData.skillSet) return [];

  const getSkillData = (id: string) => {
    return getComponentValue(Skill, bytes32ToEntity(id) as Entity);
  };

  return accountData.skillSet.map((id) => {
    const skillData = getSkillData(id);
    const nameHash = skillData?.name || "";
    const name = getSkillName(nameHash);
    const isTargetType = getSkillTargetType(nameHash);
    return {
      ...skillData,
      id,
      name,
      isTargetType,
    };
  });
};
