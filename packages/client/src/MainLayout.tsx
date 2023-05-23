import { Outlet } from "react-router-dom";
import { useLoading } from "./hooks/useLoading";
import Loading from "./pages/Loading";

import ProfileBar from "./components/profile/ProfileBar";

import background from "./public/background.png";

export default function MainLayout() {
  const { isSyncStateLive } = useLoading();

  return (
    <div className="w-full h-screen bg-gray-100">
      {isSyncStateLive ? (
        <div className="bg-main-purple w-full h-screen overflow-x-scroll grid place-items-center">
          <div
            className="relative w-[1200px] h-[690px]"
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Outlet />
            {/* Fix: need to move */}
            <div className="absolute top-1 left-20">
              <ProfileBar />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
