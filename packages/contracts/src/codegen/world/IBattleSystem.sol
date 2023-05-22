// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IBattleSystem {
  function joinBattle(bytes32[] memory skillSet) external;

  function useSkill(address[] memory targets, uint8 skillIndex) external;

  function attack(address target) external;

  function defense() external;

  function heal(address target) external;
}