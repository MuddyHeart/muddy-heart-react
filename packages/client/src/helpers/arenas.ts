import * as ethers from "ethers";

export const getArenaStatus = (nameHash: string) => {
  switch (nameHash) {
    case ethers.utils.solidityKeccak256(["string"], ["waiting"]):
      return "waiting";
    case ethers.utils.solidityKeccak256(["string"], ["playing"]):
      return "playing";
    case ethers.utils.solidityKeccak256(["string"], ["complete"]):
      return "complete";
    default:
      return "N/A";
  }
};
