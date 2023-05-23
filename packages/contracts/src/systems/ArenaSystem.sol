// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";

import { addressToEntityKey } from "../addressToEntryKey.sol";
import { Player, PlayerData } from "../codegen/tables/Player.sol";
import { Arena, ArenaData } from "../codegen/tables/Arena.sol";
import { Account, AccountData } from "../codegen/tables/Account.sol";

import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

bytes32 constant WAITING = keccak256("waiting");
bytes32 constant PLAYING = keccak256("playing");
bytes32 constant COMPLETE = keccak256("complete");

bytes32 constant NO_ARENA = bytes32("0");

contract ArenaSystem is System {
  function createArena() external {
    bytes32 id = getUniqueEntity();
    bytes32 player = addressToEntityKey(_msgSender());

    bytes32[] memory players = new bytes32[](6);
    players[0] = initPlayer();

    Arena.set(id, ArenaData({ status: WAITING, players: players }));
    Account.setArena(player, id);
  }

  function joinArena(bytes32 id) external {
    bytes32[] memory players = Arena.getPlayers(id);
    bytes32 status = Arena.getStatus(id);

    uint8 currentPlayerAmount = getPlayerCount(players);

    require(currentPlayerAmount < 6, "Exceed maximum players");
    require(status == WAITING, "Can join only waiting room");

    bytes32 player = initPlayer();
    bytes32 currentPlayerArena = Account.getArena(player);

    require(currentPlayerArena == NO_ARENA, "Must not joining other arena");

    players[currentPlayerAmount] = player;

    Arena.setPlayers(id, players);
    Account.setArena(player, id);
  }

  function exitArena() external {
    bytes32 player = addressToEntityKey(_msgSender());
    bytes32 arena = Account.getArena(player);
    require(arena != NO_ARENA, "Must joining in an arena");

    bytes32 status = Arena.getStatus(arena);
    require(status != PLAYING, "Cannot exit during playing");

    bytes32[] memory players = Arena.getPlayers(arena);

    uint8 found = 0;
    for (uint8 i = 0; i < players.length; i++) {
      if (players[i] == player) {
        found = i;
        break;
      }
    }
    players[found] = players[players.length - 1];
    delete players[players.length - 1];

    Arena.setPlayers(arena, players);
    Account.setArena(player, NO_ARENA);
  }

  function startBattle() external {
    bytes32 player = addressToEntityKey(_msgSender());
    bytes32 arena = Account.getArena(player);
    require(arena != NO_ARENA, "No arena to start");

    bytes32[] memory players = Arena.getPlayers(arena);
    uint8 currentPlayerAmount = getPlayerCount(players);

    require(currentPlayerAmount >= 2, "Require at least 2 players");

    Arena.setStatus(arena, PLAYING);
  }

  function initPlayer() private returns (bytes32) {
    bytes32 player = addressToEntityKey(_msgSender());

    uint32[] memory nextCasts = new uint32[](3);
    for (uint8 i = 0; i < 3; i++) {
      nextCasts[i] = 0;
    }

    Player.set(player, PlayerData({ hp: 200, atk: 10, def: 3, nextCasts: nextCasts }));

    return player;
  }

  function getPlayerCount(bytes32[] memory players) private pure returns (uint8) {
    uint8 currentPlayerAmount = 0;
    for (uint8 i = 0; i < players.length; i++) {
      if (players[i] != bytes32(0)) currentPlayerAmount++;
    }
    return currentPlayerAmount;
  }
}
