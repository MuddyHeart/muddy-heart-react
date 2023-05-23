// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";

import { Account, AccountData } from "../codegen/tables/Account.sol";
import { Avatar, AvatarData } from "../codegen/tables/Avatar.sol";
import { Skill, SkillData } from "../codegen/tables/Skill.sol";

import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";
import { addressToEntityKey } from "../addressToEntryKey.sol";

import { ATTACK, BUFF, TACKLE, GUARD, HEAL } from "./SkillSystem.sol";
import { NO_ARENA } from './ArenaSystem.sol';

string constant DEFAULT_URL = "mud.png";

contract AccountSystem is System {
  function createAccount(string memory name) external {
    bytes32 account = addressToEntityKey(_msgSender());
    bool initialized = Account.getInitialized(account);
    require(!initialized, "The account has been initialized");

    bytes32 avatar = createDefaultAvatar();
    bytes32[] memory skillSet = new bytes32[](3);
    for (uint8 i = 0; i < 3; i++) {
      skillSet[i] = createDefaultSkill(i);
    }
    Account.set(
      account,
      AccountData({ initialized: true, name: name, avatar: avatar, skillSet: skillSet, arena: NO_ARENA })
    );
  }

  function setName(string memory name) external {
    bytes32 account = addressToEntityKey(_msgSender());
    Account.setName(account, name);
  }

  function setAvatar(bytes32 id) external {
    address owner = Avatar.getOwner(id);
    require(owner == _msgSender(), "Unauthorized");

    bytes32 account = addressToEntityKey(_msgSender());
    bytes32 targetAvatar = Account.getAvatar(account);

    Avatar.setInUsed(targetAvatar, false);
    Avatar.setInUsed(id, true);

    Account.setAvatar(account, id);
  }

  function setSkill(bytes32 id, uint8 slotIndex) public {
    bool isSkillInUsed = Skill.getInUsed(id);
    address owner = Skill.getOwner(id);
    require(!isSkillInUsed, "Cannot place in used skill");
    require(owner == _msgSender(), "Unauthorized");

    bytes32 account = addressToEntityKey(_msgSender());
    bytes32 targetSkill = Account.getItemSkillSet(account, slotIndex);

    Skill.setInUsed(targetSkill, false);
    Skill.setInUsed(id, true);

    Account.updateSkillSet(account, slotIndex, id);
  }

  function createDefaultAvatar() private returns (bytes32) {
    bytes32 id = getUniqueEntity();
    Avatar.set(id, AvatarData({ inUsed: true, owner: _msgSender(), url: DEFAULT_URL }));
    return id;
  }

  function createDefaultSkill(uint8 index) private returns (bytes32) {
    bytes32 id = getUniqueEntity();
    if (index == 0) {
      Skill.set(
        id,
        SkillData({
          name: TACKLE,
          category: ATTACK,
          atk: 3,
          def: 0,
          hp: 0,
          castTime: 0,
          cooldown: 5,
          duration: 0,
          owner: _msgSender(),
          inUsed: true
        })
      );
    } else if (index == 2) {
      Skill.set(
        id,
        SkillData({
          name: GUARD,
          category: BUFF,
          atk: 0,
          def: 3,
          hp: 0,
          castTime: 0,
          cooldown: 5,
          duration: 0,
          owner: _msgSender(),
          inUsed: true
        })
      );
    } else {
      Skill.set(
        id,
        SkillData({
          name: HEAL,
          category: BUFF,
          atk: 0,
          def: 0,
          hp: 5,
          castTime: 0,
          cooldown: 5,
          duration: 0,
          owner: _msgSender(),
          inUsed: true
        })
      );
    }
    return id;
  }
}
