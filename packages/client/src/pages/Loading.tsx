import loadingMonster from "../public/loadingMonster.png";
import { useLoading } from "../hooks/useLoading";
import ProgressBar from "../components/loading/ProgressBar";

export default function Loading() {
  const { msg, percentage } = useLoading();

  return (
    <div className="text-white flex justify-center items-center h-full bg-main-purple">
      <div className="flex flex-col items-center space-y-2">
        <img src={loadingMonster} alt="loading icon..." />
        <div className="font-bold text-2xl mb-3">Loading . . .</div>
        <ProgressBar percentage={percentage} />
        <div>{msg}</div>
      </div>
    </div>
  );
}
