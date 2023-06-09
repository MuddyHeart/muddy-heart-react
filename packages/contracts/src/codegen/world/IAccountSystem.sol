// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IAccountSystem {
  function createAccount(string memory name) external;

  function setName(string memory name) external;

  function setAvatar(bytes32 id) external;

  function setSkill(bytes32 id, uint8 slotIndex) external;
}
