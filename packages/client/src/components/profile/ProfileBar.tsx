import WarriorProfile from "../../assets/profiles/warrior-profile.png";
import { useAccountData } from "../../hooks/useAccountData";

const ProfileBar = () => {
  const accountData = useAccountData();

  if (!accountData) return <></>;

  return (
    <div className="flex items-center space-x-2">
      <img src={WarriorProfile} width={64} height={64} />
      <div className="">
        <div className="bit-font text-white">{accountData.name}</div>
      </div>
    </div>
  );
};

export default ProfileBar;
