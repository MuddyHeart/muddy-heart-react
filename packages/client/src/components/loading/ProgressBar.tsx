interface IProgressBar {
  percentage: number | string;
  border?: boolean;
  borderColor?: string;
  bgProgress?: string;
  bgBar?: string;
  barSize?: string;
}

const ProgressBar = ({
  percentage,
  border = true,
  borderColor = "border-white",
  bgProgress = "bg-white",
  bgBar = "bg-neutral-700",
  barSize = "w-56",
}: IProgressBar) => {
  return (
    <div
      className={`${border} ${borderColor} ${bgProgress} ${barSize} rounded-full`}
    >
      <div
        className={`${bgBar} py-1 rounded-full transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
