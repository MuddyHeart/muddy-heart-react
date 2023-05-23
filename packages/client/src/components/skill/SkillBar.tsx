import SkillItem from './SkillItem';
import useSkillStore from '../../stores/SkillStore';

export default function SkillBar() {
    const exectueSkill = useSkillStore((state => state.exectueSkill));
    const skill1 = useSkillStore(state => state.skill1);
    const skill2 = useSkillStore(state => state.skill2);
    const skill3 = useSkillStore(state => state.skill3);

    return (
        <div className='absolute bottom-5 right-0 mr-[120px] flex justify-center items-center space-x-5'>
            <SkillItem skillItem={skill1} handleSkillUse={() => exectueSkill("skill1")} />
            <SkillItem skillItem={skill2} handleSkillUse={() => exectueSkill("skill2")} />
            <SkillItem skillItem={skill3} handleSkillUse={() => exectueSkill("skill3")} />
        </div>
    )
}
