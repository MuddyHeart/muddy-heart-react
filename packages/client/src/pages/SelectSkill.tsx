import useSkillStore from "../stores/SkillStore"
import { useNavigate } from "react-router-dom";
import StartButton from "../public/button/start_button.png"

export default function SelectSkill() {
    const setSkillSet = useSkillStore((state => state.setSkillSet));
    const navigate = useNavigate();

    const handleSelectSkill = async () => {
        setSkillSet([
            {
                name: "attack",
                isTargetType: true,
                cooldown: 3000,
                currentCooldown: 0
            },
            {
                name: "defense",
                isTargetType: false,
                cooldown: 10000,
                currentCooldown: 0
            },
            {
                name: "heal",
                isTargetType: false,
                cooldown: 15000,
                currentCooldown: 0
            }
        ])
        navigate("/waiting");
    };

    const tmpCondition = false;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black px-36">
            <div className="relative w-[900px] h-[270px] bg-black bg-opacity-40 border border-orange-500 border-opacity-20 rounded-md">
                <div className="absolute -top-4 w-full">
                    <div className="text-center bit-font text-white text-2xl">
                        Select 3 Skill
                    </div>
                </div>
                <div className="flex items-center justify-center h-full">
                </div>
                <div className="flex justify-center">
                    <button className={`${tmpCondition ? "" : "hover:scale-110 duration-200"}`} onClick={handleSelectSkill} disabled={tmpCondition}>
                        <img
                            src={StartButton}
                            className={`-mt-8 animate-none ${tmpCondition ? "opacity-50" : "hover:animate-pulse"} `}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
