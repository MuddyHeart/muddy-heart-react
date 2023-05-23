// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

import { IBaseWorld } from "@latticexyz/world/src/interfaces/IBaseWorld.sol";

import { IAccountSystem } from "./IAccountSystem.sol";
import { IArenaSystem } from "./IArenaSystem.sol";
import { ISkillSystem } from "./ISkillSystem.sol";

/**
 * The IWorld interface includes all systems dynamically added to the World
 * during the deploy process.
 */
interface IWorld is IBaseWorld, IAccountSystem, IArenaSystem, ISkillSystem {

}
