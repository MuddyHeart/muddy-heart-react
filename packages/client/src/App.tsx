import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import MainLayout from './MainLayout';

export const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home />} />
        <Route path='game' element={<Game />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};
