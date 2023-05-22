import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import MainLayout from './MainLayout';
import { GameDraft } from './pages/GameDraft';

export const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home />} />
        <Route path='game' element={<Game />} />
        <Route path='game-draft' element={<GameDraft />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};
