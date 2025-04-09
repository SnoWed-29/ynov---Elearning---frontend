import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { User } from 'lucide-react';
import React from 'react';

function MainLayout() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <div className="h-screen bg-[#302e2d] flex items-center justify-center w-full">
      <div className="flex w-full h-full  overflow-hidden shadow-lg">
        <Sidebar />
        <div className="flex flex-col flex-1 py-4">

          <div className="px-6 py-2 overflow-y-auto bg-[#F7F7F5] flex-1 rounded-l-4xl rounded-r-4xl ">
            <div className="flex w-full justify-between">
              <h2 className="text-md font-bold text-[#8b8c89] ">Welcome To <span className='text-[#302e2d]'>Ynov Learning</span></h2>
              <div className="flex space-x-2 ">
                <User className='w-8 h-8 text-[#302e2d] ml-auto rounded-full border' />
                <div className="flex flex-col -center">
                  <span className='text-xs font-semibold '>Haitham Dihaji</span>
                  <span className='text-xs font-light text-[#302e2d] '>haitham.dihaji@ynov.com</span>
                </div>
              </div>
            </div>
            {pathSegments.length > 0 && (
              <div className="flex w-full py-2 text-sm items-center">
                {pathSegments.map((segment, index) => (
                  <React.Fragment key={index}>
                    <Link
                      to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                      className={`ml-1 hover:underline font-light text-[#302e2d] italic`}
                      >                    

                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      <span className={`mx-4 text-black font-semibold italic `}>/</span>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;