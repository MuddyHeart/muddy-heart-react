import {create} from "zustand";

type skillSlotType = "skill1"|"skill2"|"skill3";

export interface ISkillItem {
    name:string,
    isTargetType:boolean,
    cooldown:number,
    currentCooldown:number
}

const store = (set:any, get:any) => ({
    skill1 : {} as ISkillItem,
    skill2 : {} as ISkillItem,
    skill3 : {} as ISkillItem,
    selectingTargetSkill:"" as string,
    selectingTargetSkillName:"" as string,
    isSelectingTarget:false as boolean,
    setSkillSet:async(skills:ISkillItem[])=>{
        set({skill1:skills[0]});
        set({skill2:skills[1]});
        set({skill3:skills[2]});
    },
    setSkillCD:async(skill:skillSlotType) => {
        const skillTmp:ISkillItem = get()[skill];
        skillTmp.currentCooldown = new Date().valueOf() + skillTmp.cooldown;
        set({[skill]:skillTmp});
    },
    exectueSkill : async(skill:skillSlotType) => {
        if(get().isSelectingTarget) get().cancelTargetSkill();
        if(get()[skill].isTargetType) {
            set({selectingTargetSkill:skill});
            set({selectingTargetSkillName:get()[skill].name});
            set({isSelectingTarget:true});
        }else {
            //await execute skill onchain
            get().setSkillCD(skill);
        }
    },
    cancelTargetSkill: async() => {
        set({selectingTargetSkill:""});
        set({selectingTargetSkillName:""});
        set({isSelectingTarget:false});
    },
    exectueTargetSkill : async(player:string) => {
        //await execute skill onchain
        get().setSkillCD(get().selectingTargetSkill);
        get().cancelTargetSkill();
    }
})

type SkillStore = ReturnType<typeof store>;

const useSkillStore = create<SkillStore>(store);

export default useSkillStore;