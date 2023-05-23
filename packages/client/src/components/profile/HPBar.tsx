import ProgressBar from "../loading/ProgressBar";

interface IHPBar {
  maxHP: number;
  currentHP: number;
}

const HPBar = ({ maxHP, currentHP }: IHPBar) => {
  return (
    <div className="relative">
      <ProgressBar
        percentage={currentHP * 100 / maxHP}
        bgBar="bg-slate-900"
        borderStyle="border border-slate-700 border-2"
        roundedStyle="rounded-none"
        bgProgress="bg-main-green"
        height="h-3"
        barSize="w-64"
      />
      <div className="absolute top-0 w-full text-center bit-font text-white text-sm">
        {`${currentHP}/${maxHP}`}
      </div>
    </div>
  );
};

export default HPBar;
