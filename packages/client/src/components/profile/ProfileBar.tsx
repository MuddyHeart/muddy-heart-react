import WarriorProfile from "../../assets/profiles/warrior-profile.png";
import HPBar from "./HPBar";

const ProfileBar = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={WarriorProfile} width={64} height={64} />
      <div className="">
        <div className="bit-font text-white">SatoSheep</div>
        <HPBar currentHP={20} maxHP={85} />
      </div>
    </div>
  );
};

export default ProfileBar;
