import useSkillStore, { ISkillItem } from "../stores/SkillStore";
import { useNavigate } from "react-router-dom";
import BackButton from "../public/button/back_button.png";
import SaveButton from "../public/button/save_button.png";
import SkillItem from "../components/skill/SkillItem";
import { useEffect, useState } from "react";
import { useSkillInventory } from "../hooks/useSkillInventory";
import { useSkillset } from "../hooks/useSkillset";
import { useMUD } from "../MUDContext";
import { entityToBytes32 } from "../utils/entityToBytes32";

export default function SelectSkill() {
  const navigate = useNavigate();

  const {
    systemCalls: { createRandomSkill, setSkill },
  } = useMUD();

  const skillInInventory = useSkillInventory();
  const selectedSkill = useSkillset();

  const [latestSkill, setLatestSkillIndex] = useState(0);

  const handleSelectSkill = async () => {
    navigate("/home");
  };

  const changeSelectedSkill = (index: number) => {
    const allSkills = [...selectedSkill, ...skillInInventory];

    const selected = allSkills[index];

    if (!selected.inUsed) {
      setSkill(entityToBytes32(selected.id), latestSkill);
      setLatestSkillIndex((latestSkill + 1) % 3);
    }
  };

  const handleRandomSkill = () => {
    const len = [...skillInInventory, ...selectedSkill].length;
    if (len < 6) {
      createRandomSkill();
    }
  };

  const tmpCondition = false;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black px-36">
      <div className="relative w-[900px] h-[270px] bg-black bg-opacity-40 border border-orange-500 border-opacity-20 rounded-md">
        <div className="absolute -top-4 w-full">
          <div
            className="text-center bit-font text-white text-2xl"
            onClick={handleRandomSkill}
          >
            Select 3 Skill
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-full space-x-3">
          {[...selectedSkill, ...skillInInventory].map((skillItem, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => changeSelectedSkill(index)}
                  className="w-[85px] h-[85px] relative"
                >
                  {skillItem.inUsed ? (
                    <div className="w-full h-full bg-black bg-opacity-50 absolute z-20 flex items-center justify-center">
                      <p className="text-green-400 bit-font text-2xl cursor-default">
                        E
                      </p>
                    </div>
                  ) : null}
                  <div className="z-10">
                    <SkillItem
                      skillItem={skillItem}
                      handleSkillUse={() => {
                        return;
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center space-x-5">
          <button
            className={`${tmpCondition ? "" : "hover:scale-110 duration-200"}`}
            onClick={handleSelectSkill}
            disabled={tmpCondition}
          >
            <img
              src={SaveButton}
              className={`-mt-8 animate-none ${
                tmpCondition ? "opacity-50" : "hover:animate-pulse"
              } `}
            />
          </button>
          <button
            className={`${tmpCondition ? "" : "hover:scale-110 duration-200"}`}
            onClick={() => navigate("/home")}
            disabled={tmpCondition}
          >
            <img
              src={BackButton}
              className={`-mt-8 animate-none ${
                tmpCondition ? "opacity-50" : "hover:animate-pulse"
              } `}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
