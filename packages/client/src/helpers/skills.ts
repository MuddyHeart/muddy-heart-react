import * as ethers from "ethers";

export const getSkillName = (nameHash: string) => {
  switch (nameHash) {
    case ethers.utils.solidityKeccak256(["string"], ["Tackle"]):
      return "tackle";
    case ethers.utils.solidityKeccak256(["string"], ["Guard"]):
      return "guard";
    case ethers.utils.solidityKeccak256(["string"], ["Heal"]):
      return "heal";
    case ethers.utils.solidityKeccak256(["string"], ["Slash"]):
      return "slash";
    case ethers.utils.solidityKeccak256(["string"], ["Bash"]):
      return "bash";
    case ethers.utils.solidityKeccak256(["string"], ["Parry"]):
      return "parry";
    case ethers.utils.solidityKeccak256(["string"], ["Rush"]):
      return "rush";
    default:
      return "N/A";
  }
};

export const getSkillTargetType = (nameHash: string) => {
  switch (nameHash) {
    case ethers.utils.solidityKeccak256(["string"], ["Tackle"]):
      return true;
    case ethers.utils.solidityKeccak256(["string"], ["Guard"]):
      return false;
    case ethers.utils.solidityKeccak256(["string"], ["Heal"]):
      return false;
    case ethers.utils.solidityKeccak256(["string"], ["Slash"]):
      return true;
    case ethers.utils.solidityKeccak256(["string"], ["Bash"]):
      return true;
    case ethers.utils.solidityKeccak256(["string"], ["Parry"]):
      return false;
    case ethers.utils.solidityKeccak256(["string"], ["Rush"]):
      return false;
    default:
      return false;
  }
};
