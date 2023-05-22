// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";

import { addressToEntityKey } from "../addressToEntryKey.sol";
import { Account, AccountData } from "../codegen/tables/Account.sol";

contract AccountSystem is System {
  function createAccount(string memory name) external {
    bytes32 account = addressToEntityKey(_msgSender());

    bytes32[] memory skillSet = new bytes32[](3);
    Account.set(account, AccountData({ name: name, skillSet: skillSet, areanaId: keccak256("0") }));
  }

  function updateName(string memory name) external {
    bytes32 account = addressToEntityKey(_msgSender());
    bytes32 arenaId = Account.getAreanaId(account);
    require(arenaId == keccak256("0"), "Cannot update during battle");
    Account.setName(account, name);
  }

  function setSkills(bytes32[] memory skills) external {
    bytes32 account = addressToEntityKey(_msgSender());
    bytes32 arenaId = Account.getAreanaId(account);
    require(arenaId == keccak256("0"), "Cannot update during battle");
    Account.setSkillSet(account, skills);
  }
}
