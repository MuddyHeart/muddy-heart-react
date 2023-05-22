import Arena from "../components/arena/Arena"
import SkillBar from "../components/skill/SkillBar"
import background from "../public/background.png"

export default function Game() {
  return (
    <div className="bg-main-purple w-full h-screen overflow-x-scroll grid place-items-center">
      <div className="w-[1200px] h-[690px] relative" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <Arena />
        <SkillBar />
      </div>
    </div>
  )
}
