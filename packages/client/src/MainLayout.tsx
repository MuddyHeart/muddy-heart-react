import { Outlet } from "react-router-dom";
import { useLoading } from "./hooks/useLoading";
import Loading from "./pages/Loading";

export default function MainLayout() {
  const { isSyncStateLive } = useLoading();

  return (
    <div className="w-full h-screen bg-gray-100">
      {isSyncStateLive ? (
        <div className="bg-main-purple h-full mx-auto">
          <Outlet />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
