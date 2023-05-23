interface IProgressBar {
  percentage: number | string;
  border?: boolean;
  borderStyle?: string;
  bgProgress?: string;
  bgBar?: string;
  barSize?: string;
  duration?: string;
}

const ProgressBar = ({
  percentage,
  border = true,
  borderStyle = "border border-white",
  bgProgress = "bg-white",
  bgBar = "bg-neutral-700",
  barSize = "w-56",
  duration = "duration-300"
}: IProgressBar) => {
  return (
    <div
      className={`${border && borderStyle} ${bgBar} ${barSize} rounded-full`}
    >
      <div
        className={`${bgProgress} ${duration} py-1 rounded-full transition-all`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
