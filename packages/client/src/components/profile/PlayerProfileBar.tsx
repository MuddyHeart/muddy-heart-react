import WarriorProfile from "../../assets/profiles/warrior-profile.png";
import HPBar from "./HPBar";
import { useAccountData } from "../../hooks/useAccountData";

const PlayerBar = () => {
  const accountData = useAccountData();

  if (!accountData) return <></>;

  return (
    <div className="flex items-center space-x-2">
      <img src={WarriorProfile} width={64} height={64} />
      <div className="">
        <div className="bit-font text-white">{accountData.name}</div>
        <HPBar currentHP={20} maxHP={85} />
      </div>
    </div>
  );
};

export default PlayerBar;
