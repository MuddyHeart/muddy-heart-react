import SkillItem from './SkillItem';
import attackImg from '../../public/attack.png';
import defenseImg from '../../public/defense.png';
import healImg from '../../public/heal.png';
import { useState } from 'react';

export default function SkillBar() {

    const [attackCD, setAttackCD] = useState(new Date().valueOf() + 3000)
    const [defenseCD, setDefenseCD] = useState(new Date().valueOf() + 15000)
    const [healCD, setHealCD] = useState(new Date().valueOf() + 10000)

    return (
        <div className='absolute bottom-5 right-0 mr-[120px] flex justify-center items-center space-x-5'>
            <SkillItem imgSrc={attackImg} handleSkillUse={() => {
                setAttackCD(new Date().valueOf() + 3000)
            }} cooldownTimeEnd={attackCD} />
            <SkillItem imgSrc={defenseImg} handleSkillUse={() => {
                setDefenseCD(new Date().valueOf() + 15000)
            }} cooldownTimeEnd={defenseCD} />
            <SkillItem imgSrc={healImg} handleSkillUse={() => {
                setHealCD(new Date().valueOf() + 10000)
            }} cooldownTimeEnd={healCD} />
        </div>
    )
}
