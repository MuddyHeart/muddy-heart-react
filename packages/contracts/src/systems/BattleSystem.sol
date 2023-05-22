// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";

import { addressToEntityKey } from "../addressToEntryKey.sol";
import { Player, PlayerData, PlayerTableId } from "../codegen/tables/Player.sol";

bytes32 constant SetAction = keccak256("set");
bytes32 constant IncAction = keccak256("inc");
bytes32 constant DecAction = keccak256("dec");

contract BattleSystem is System {
  function joinBattle(bytes32[] memory skillSet) external {
    require(skillSet.length == 3, "Please pickup only 3 skills");

    bytes32 player = addressToEntityKey(_msgSender());

    uint8[] memory nextCasts = new uint8[](3);

    Player.set(
      player,
      PlayerData({
        hp: uint32(100),
        mp: uint32(100),
        atk: uint32(5),
        def: uint32(3),
        nextCasts: nextCasts
      })
    );
  }

  function useSkill(address[] memory targets, uint8 skillIndex) external {
    
  }

  function attack(address target) external {
    bytes32 attacker = addressToEntityKey(_msgSender());
    bytes32 targetPlayer = addressToEntityKey(target);

    require(attacker != targetPlayer, "Cannot attack yourself");

    uint32 targetHp = Player.getHp(targetPlayer);
    uint32 atk = Player.getAtk(attacker);
    uint32 def = Player.getDef(targetPlayer);
    uint32 damage = _calculateDamage(atk, def);

    if (damage > targetHp) {
      Player.setHp(targetPlayer, uint32(0));
    } else {
      Player.setHp(targetPlayer, targetHp - damage);
    }
  }

  function defense() external {}

  function heal(address target) external {
    bytes32 targetPlayer = addressToEntityKey(target);

    uint32 targetHp = Player.getHp(targetPlayer);
    uint32 healValue = 5;

    Player.setHp(targetPlayer, targetHp + healValue);
  }

  function _calculateDamage(uint32 atk, uint32 def) private pure returns (uint32) {
    return def > atk ? 0 : atk - def;
  }

  function _executeQueue(bytes32 action, bytes32 target, uint8 fieldIndex, bytes memory data) private {
    bytes32[] memory key = new bytes32[](1);
    key[0] = target;

    if (action == SetAction) {
      StoreSwitch.setField(PlayerTableId, key, fieldIndex, data);
    } else if (action == IncAction) {
      bytes memory _blob = StoreSwitch.getField(PlayerTableId, key, fieldIndex);
      uint32 numBlob = (uint32(Bytes.slice4(_blob, 0)));
      uint32 numData = (uint32(Bytes.slice4(data, 0)));
      StoreSwitch.setField(PlayerTableId, key, fieldIndex, abi.encodePacked(uint32(numBlob + numData)));
    } else if (action == DecAction) {
      bytes memory _blob = StoreSwitch.getField(PlayerTableId, key, fieldIndex);
      uint32 numBlob = (uint32(Bytes.slice4(_blob, 0)));
      uint32 numData = (uint32(Bytes.slice4(data, 0)));
      if (numData > numBlob) {
        StoreSwitch.setField(PlayerTableId, key, fieldIndex, abi.encodePacked(uint32(0)));
      } else {
        StoreSwitch.setField(PlayerTableId, key, fieldIndex, abi.encodePacked(uint32(numBlob - numData)));
      }
    }
  }
}
