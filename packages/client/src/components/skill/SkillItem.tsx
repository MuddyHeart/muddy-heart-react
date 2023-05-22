import { useEffect, useState } from "react";

interface ISkillItem {
    imgSrc: string
    handleSkillUse: () => void
    cooldownTimeEnd: number
}

export default function SkillItem({ imgSrc, handleSkillUse, cooldownTimeEnd }: ISkillItem) {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const iv = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(iv);
    }, []);

    const currentCD = Math.round(Math.max(cooldownTimeEnd - now.valueOf(), 0) / 1000);
    const isCooldown = currentCD > 0;

    const skillHandler = () => {
        if (!isCooldown) handleSkillUse();
    }

    return (
        <div onClick={skillHandler} className="hover:scale-110 duration-200 cursor-pointer w-[85px] h-[85px] relative select-none" >
            {
                isCooldown ? (<div className="bg-opacity-50 bg-black w-full h-full absolute flex justify-center items-center cursor-not-allowed" >
                    <p className="text-white text-xl bit-font">{currentCD}</p>
                </div>) : null}
            <img src={imgSrc} className="w-full h-full" />
        </div >
    )
}
