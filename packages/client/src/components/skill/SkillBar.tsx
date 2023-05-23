import SkillItem from "./SkillItem";
import useSkillStore from "../../stores/SkillStore";
import { useSkillset } from "../../hooks/useSkillset";

export default function SkillBar() {
  const skills = useSkillset();
  const exectueSkill = useSkillStore((state) => state.exectueSkill);

  return (
    <div className="absolute bottom-5 right-0 mr-[120px] flex justify-center items-center space-x-5">
      {skills.map((skill, index) => (
        <SkillItem
          key={skill.id}
          skillItem={skill}
          handleSkillUse={() => exectueSkill(`skill${index+1}`)}
        />
      ))}
    </div>
  );
}
