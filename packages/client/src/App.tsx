import WaitArena from "./pages/WaitArena";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import MainLayout from './MainLayout';
import SelectSkill from './pages/SelectSkill';
import CreateUser from './pages/CreateUser';
import Defeat from "./pages/Defeat";
import Victory from "./pages/Victory";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CreateUser />} />
        <Route path="game" element={<Game />} />
        <Route path="waiting" element={<WaitArena />} />
        <Route path='select-skill' element={<SelectSkill />} />
        <Route path="home" element={<Home />} />
        <Route path="defeat" element={<Defeat />} />
        <Route path="victory" element={<Victory />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
