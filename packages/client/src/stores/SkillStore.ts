import { create } from "zustand";

type skillSlotType = "skill1" | "skill2" | "skill3";

export interface ISkillItem {
  id: string;
  name: string;
  category: string;
  atk: number;
  def: number;
  hp: number;
  castTime: number;
  cooldown: number;
  duration: number;
  inUsed: boolean;
  owner: string;
  isTargetType: boolean;
}

const store = (set: any, get: any) => ({
  skill1: {} as ISkillItem,
  skill2: {} as ISkillItem,
  skill3: {} as ISkillItem,
  selectingTargetSkill: "" as string,
  selectingTargetSkillId: "" as string,
  isSelectingTarget: false as boolean,
  setSkillSet: async (skills: ISkillItem[]) => {
    set({ skill1: skills[0] });
    set({ skill2: skills[1] });
    set({ skill3: skills[2] });
  },
  setSkillCD: async (skill: skillSlotType) => {
    const skillTmp: ISkillItem = get()[skill];
    // skillTmp.currentCooldown = new Date().valueOf() + skillTmp.cooldown;
    set({ [skill]: skillTmp });
  },
  exectueSkill: async (skill: any) => {
    if (get().isSelectingTarget) get().cancelTargetSkill();
    if (get()[skill].isTargetType) {
      set({ selectingTargetSkill: skill });
      set({ selectingTargetSkillId: get()[skill].id });
      set({ isSelectingTarget: true });
    } else {
      //await execute skill onchain
      get().setSkillCD(skill);
    }
  },
  cancelTargetSkill: async () => {
    set({ selectingTargetSkill: "" });
    set({ selectingTargetSkillId: "" });
    set({ isSelectingTarget: false });
  },
  exectueTargetSkill: async (player: string) => {
    //await execute skill onchain
    get().setSkillCD(get().selectingTargetSkill);
    get().cancelTargetSkill();
  },
});

type SkillStore = ReturnType<typeof store>;

const useSkillStore = create<SkillStore>(store);

export default useSkillStore;
