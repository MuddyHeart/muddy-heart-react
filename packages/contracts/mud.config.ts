import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Avatar: {
      schema: {
        inUsed: "bool",
        owner: "address",
        url: "string",
      },
    },
    Skill: {
      schema: {
        name: "bytes32",
        category: "bytes32",
        atk: "uint32",
        def: "uint32",
        hp: "uint32",
        castTime: "uint32",
        cooldown: "uint32",
        duration: "uint32",
        inUsed: "bool",
        owner: "address",
      },
    },
    Account: {
      schema: {
        initialized: "bool",
        avatar: "bytes32",
        arena: "bytes32",
        name: "string",
        skillSet: "bytes32[]",
      },
    },
    Arena: {
      schema: {
        status: "bytes32",
        players: "bytes32[]",
      },
    },
    Player: {
      schema: {
        hp: "uint32",
        atk: "uint32",
        def: "uint32",
        nextCasts: "uint32[]",
      },
    },
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    },
  ],
});
