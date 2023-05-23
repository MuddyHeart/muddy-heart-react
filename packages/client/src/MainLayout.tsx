import { Outlet } from "react-router-dom";
import { useLoading } from "./hooks/useLoading";
import Loading from "./pages/Loading";

import background from "./public/background.png";

export default function MainLayout() {
  const { isSyncStateLive } = useLoading();

  return (
    <div className="w-full h-screen bg-gray-100">
      {isSyncStateLive ? (
        <div className="bg-main-purple w-full h-screen overflow-x-scroll grid place-items-center">
          <div
            className="w-[1200px] h-[690px]"
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Outlet />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
