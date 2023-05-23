import Arena from "../components/arena/Arena";
import SkillBar from "../components/skill/SkillBar";

export default function Game() {
  return (
    <div className="w-full h-full relative">
      <Arena />
      <SkillBar />
    </div>
  );
}
