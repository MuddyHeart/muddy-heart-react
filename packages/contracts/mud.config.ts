import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Account: {
      schema: {
        name: "string",
        skillSet: "bytes32[]",
        areanaId: "bytes32"
      }
    },
    Player: {
      schema: {
        hp: "uint32",
        mp: "uint32",
        atk: "uint32",
        def: "uint32",
        nextCasts: "uint8[]"
      }
    },
    Skill: {
      schema: {
        name: "string",
        atk: "uint32",
        def: "uint32",
        heal: "uint32",
        castTime: "uint32",
        cooldown: "uint32"
      }
    }
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: []
    }
  ]
});