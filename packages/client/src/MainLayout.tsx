import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='w-full h-screen bg-gray-100'>
        <div className='bg-gray-900 h-full mx-auto'><Outlet/></div>
    </div>
  )
}
