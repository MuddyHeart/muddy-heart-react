// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";

import { addressToEntityKey } from "../addressToEntryKey.sol";
import { Skill, SkillData } from "../codegen/tables/Skill.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

contract SkillSystem is System {

  function createSkill() private {
    bytes32 id = getUniqueEntity();
    
  }

}
