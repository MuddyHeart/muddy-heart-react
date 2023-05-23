interface IProgressBar {
  percentage: number | string;
  border?: boolean;
  borderStyle?: string;
  bgProgress?: string;
  bgBar?: string;
  barSize?: string;
  duration?: string;
  roundedStyle?: string;
  height?: string;
}

const ProgressBar = ({
  percentage,
  border = true,
  borderStyle = "border border-white",
  bgProgress = "bg-white",
  bgBar = "bg-neutral-700",
  barSize = "w-56",
  duration = "duration-300",
  roundedStyle = "rounded-full",
  height = "h-2",
}: IProgressBar) => {
  return (
    <div
      className={`${border && borderStyle} ${bgBar} ${barSize} ${roundedStyle}`}
    >
      <div
        className={`${bgProgress} ${duration} ${roundedStyle} ${height} transition-all`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
