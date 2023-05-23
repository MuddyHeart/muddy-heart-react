import { useEffect, useState } from "react";
import useSkillStore, { ISkillItem } from "../../stores/SkillStore";

interface SkillItemProps {
    skillItem: ISkillItem;
    handleSkillUse: () => void;
}

export default function SkillItem({ skillItem, handleSkillUse }: SkillItemProps) {

    const [isSelectingTargetSkill, setIsSelectingTargetSkill] = useState(false);
    const selectingTargetSkillId = useSkillStore(state => state.selectingTargetSkillId);
    const cancelTargetSkill = useSkillStore(state => state.cancelTargetSkill);

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const iv = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(iv);
    }, []);

    const currentCD = Math.round(Math.max(skillItem.currentCooldown - now.valueOf(), 0) / 1000);
    const isCooldown = currentCD > 0;

    const clickHandler = () => {
        if (!isCooldown) handleSkillUse();
        if (isSelectingTargetSkill) cancelTargetSkill();
    }

    useEffect(() => {
        if (selectingTargetSkillId === skillItem.id) {
            setIsSelectingTargetSkill(true)
        } else setIsSelectingTargetSkill(false);
    }, [selectingTargetSkillId, skillItem])

    return (
        <div onClick={clickHandler} className="hover:scale-110 duration-200 cursor-pointer w-[85px] h-[85px] relative select-none" >
            {
                isCooldown ? (<div className="bg-opacity-50 bg-black w-full h-full absolute flex justify-center items-center cursor-not-allowed" >
                    <p className="text-white text-xl bit-font">{currentCD}</p>
                </div>) : isSelectingTargetSkill ? (
                    <div className="bg-opacity-50 bg-black w-full h-full absolute flex justify-center items-center cursor-pointer" >
                        <p className="text-red-500 text-xl bit-font">x</p>
                    </div>
                ) : null}
            <img src={`src/public/skills/${skillItem.name}.png`} className="w-full h-full" />
        </div >
    )
}
