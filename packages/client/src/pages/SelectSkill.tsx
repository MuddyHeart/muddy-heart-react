import useSkillStore from "../stores/SkillStore"
import { useNavigate } from "react-router-dom";

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
        navigate("/game");
    };

    return (
        <div className="text-red-400" onClick={handleSelectSkill}>SelectSkill</div>
    )
}
