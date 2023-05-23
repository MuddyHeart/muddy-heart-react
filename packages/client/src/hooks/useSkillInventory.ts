import { useEntityQuery } from "@latticexyz/react";
import { Entity, Has, HasValue, getComponentValue } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { useAccount } from "./useAccount";
import { bytes32ToEntity } from "../utils/bytes32ToEntity";
import { getSkillName, getSkillTargetType } from "../helpers/skills";

export const useSkillInventory = () => {
  const {
    components: { Skill },
  } = useMUD();

  const account = useAccount();

  const skillInventory = useEntityQuery([
    Has(Skill),
    HasValue(Skill, { owner: account, inUsed: false }),
  ]);

  const getSkillData = (id: string) => {
    return getComponentValue(Skill, bytes32ToEntity(id) as Entity);
  };

  return skillInventory.map((id) => {
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
