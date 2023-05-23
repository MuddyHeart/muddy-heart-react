import useSkillStore, { ISkillItem } from "../stores/SkillStore"
import { useNavigate } from "react-router-dom";
import BackButton from "../public/button/back_button.png";
import SaveButton from "../public/button/save_button.png";
import SkillItem from "../components/skill/SkillItem";
import { useState } from "react";

export default function SelectSkill() {
    const setSkillSet = useSkillStore((state => state.setSkillSet));
    const navigate = useNavigate();

    const skillInInventory = [
        {
            id: "1",
            name: "attack",
            isTargetType: true,
            cooldown: 3000,
            currentCooldown: 0
        },
        {
            id: "2",
            name: "bash",
            isTargetType: true,
            cooldown: 5000,
            currentCooldown: 0
        },
        {
            id: "3",
            name: "defense",
            isTargetType: false,
            cooldown: 10000,
            currentCooldown: 0
        },
        {
            id: "4",
            name: "heal",
            isTargetType: false,
            cooldown: 15000,
            currentCooldown: 0
        },
        {
            id: "5",
            name: "attack",
            isTargetType: true,
            cooldown: 3000,
            currentCooldown: 0
        },
        {
            id: "6",
            name: "defense",
            isTargetType: false,
            cooldown: 10000,
            currentCooldown: 0
        },
    ];

    const [selectedSkill, setSelectedSkill] = useState([
        {
            id: "1",
            name: "attack",
            isTargetType: true,
            cooldown: 3000,
            currentCooldown: 0
        },
        {
            id: "2",
            name: "bash",
            isTargetType: true,
            cooldown: 5000,
            currentCooldown: 0
        },
        {
            id: "3",
            name: "defense",
            isTargetType: false,
            cooldown: 10000,
            currentCooldown: 0
        }
    ])

    const handleSelectSkill = async () => {
        setSkillSet(selectedSkill);
        navigate("/home");
    };

    const changeSelectedSkill = (skill: ISkillItem) => {
        if (!selectedSkill.includes(skill) && selectedSkill.length >= 3) {
            const tmpSelectedSkill = selectedSkill;
            tmpSelectedSkill.shift();
            setSelectedSkill([...tmpSelectedSkill, skill]);
        }
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
                <div className="flex items-center justify-center h-full w-full space-x-3">
                    {skillInInventory.map((skillItem, index) => {
                        return (
                            <div key={index}>
                                <div onClick={() => changeSelectedSkill(skillItem)} className="w-[85px] h-[85px] relative">
                                    {selectedSkill.find(s => s.id === skillItem.id) ? (
                                        <div className="w-full h-full bg-black bg-opacity-50 absolute z-20 flex items-center justify-center">
                                            <p className="text-green-400 bit-font text-2xl cursor-default">E</p>
                                        </div>
                                    ) : null}
                                    <div className="z-10">
                                        <SkillItem skillItem={skillItem} handleSkillUse={() => { return; }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center space-x-5">
                    <button className={`${tmpCondition ? "" : "hover:scale-110 duration-200"}`} onClick={handleSelectSkill} disabled={tmpCondition}>
                        <img
                            src={SaveButton}
                            className={`-mt-8 animate-none ${tmpCondition ? "opacity-50" : "hover:animate-pulse"} `}
                        />
                    </button>
                    <button className={`${tmpCondition ? "" : "hover:scale-110 duration-200"}`} onClick={() => navigate("/home")} disabled={tmpCondition}>
                        <img
                            src={BackButton}
                            className={`-mt-8 animate-none ${tmpCondition ? "opacity-50" : "hover:animate-pulse"} `}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
