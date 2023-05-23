// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";

import { Account, AccountData } from "../codegen/tables/Account.sol";
import { Avatar, AvatarData } from "../codegen/tables/Avatar.sol";
import { Skill, SkillData } from "../codegen/tables/Skill.sol";

import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";
import { addressToEntityKey } from "../addressToEntryKey.sol";

// Skill categories
bytes32 constant ATTACK = keccak256("attack");
bytes32 constant BUFF = keccak256("buff");

// Attack skills
bytes32 constant TACKLE = keccak256("Tackle");
bytes32 constant SLASH = keccak256("Slash");
bytes32 constant BASH = keccak256("Bash");

// Buff skills
bytes32 constant GUARD = keccak256("Guard");
bytes32 constant HEAL = keccak256("Heal");
bytes32 constant PARRY = keccak256("Parry");
bytes32 constant RUSH = keccak256("Rush");

contract SkillSystem is System {
  function createRandomSkill() external {
    bytes32 id = getUniqueEntity();
    uint8 index = uint8(uint256(keccak256(abi.encode(block.timestamp, block.difficulty, _msgSender(), address(this)))));
    SkillData memory skillData = getSkillProtoType(index);
    skillData.owner = _msgSender();
    Skill.set(id, skillData);
  }

  function getSkillProtoType(uint8 index) public pure returns (SkillData memory) {
    uint8 skillAmount = 7;
    index = index % skillAmount;
    if (index == 0) {
      return
        SkillData({
          name: TACKLE,
          category: ATTACK,
          atk: 3,
          def: 0,
          hp: 0,
          castTime: 0,
          cooldown: 5,
          duration: 0,
          owner: address(0),
          inUsed: false
        });
    } else if (index == 1) {
      return
        SkillData({
          name: SLASH,
          category: ATTACK,
          atk: 5,
          def: 0,
          hp: 0,
          castTime: 0,
          cooldown: 8,
          duration: 0,
          owner: address(0),
          inUsed: false
        });
    } else if (index == 2) {
      return
        SkillData({
          name: BASH,
          category: ATTACK,
          atk: 20,
          def: 0,
          hp: 0,
          castTime: 0,
          cooldown: 30,
          duration: 0,
          owner: address(0),
          inUsed: false
        });
    } else if (index == 3) {
      return
        SkillData({
          name: GUARD,
          category: BUFF,
          atk: 0,
          def: 5,
          hp: 0,
          castTime: 0,
          cooldown: 5,
          duration: 10,
          owner: address(0),
          inUsed: false
        });
    } else if (index == 4) {
      return
        SkillData({
          name: HEAL,
          category: BUFF,
          atk: 0,
          def: 0,
          hp: 10,
          castTime: 0,
          cooldown: 30,
          duration: 0,
          owner: address(0),
          inUsed: false
        });
    } else if (index == 5) {
      return
        SkillData({
          name: PARRY,
          category: BUFF,
          atk: 0,
          def: 1000,
          hp: 0,
          castTime: 0,
          cooldown: 300,
          duration: 2,
          owner: address(0),
          inUsed: false
        });
    } else {
      return
        SkillData({
          name: RUSH,
          category: BUFF,
          atk: 5,
          def: 0,
          hp: 0,
          castTime: 0,
          cooldown: 60,
          duration: 10,
          owner: address(0),
          inUsed: false
        });
    }
  }
}
