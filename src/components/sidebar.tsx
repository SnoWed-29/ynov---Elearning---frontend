import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, LogOut, User, Award, Folder, ListTodo } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-14 text-white flex flex-col justify-center items-center pt-16 pb-4">
      <div className="mb-auto">
        {/* Home Icon */}
        <div className="relative group">
          <Link
            to="/"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <Home className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </div>
        </div>

        {/* Course */}
        <div className="relative group">
          <Link
            to="/courses"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/courses') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <Folder className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Courses
          </div>
        </div>

        {/* Certificates */}
        <div className="relative group">
          <Link
            to="/certificates"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/certificates') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <Award className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Certificates
          </div>
        </div>

        {/* Courses */}
        <div className="relative group">
          <Link
            to="/quiz"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/quiz') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <ListTodo className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Quiz
          </div>
        </div>
      </div>
      <div>
        {/* User */}
        <div className="relative group">
          <Link
            to="/profile"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/profile') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <User className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Profile
          </div>
        </div>

        {/* Settings */}
        <div className="relative group">
          <Link
            to="/settings"
            className={`w-10 h-10 mb-4 flex items-center justify-center rounded ${
              isActive('/settings') ? 'bg-[#fbcc3e] text-[#302e2d]' : 'hover:bg-[#fbcc3e] hover:text-[#302e2d]'
            }`}
          >
            <Settings className="w-6 h-6" />
          </Link>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Settings
          </div>
        </div>
      </div>
      <div className="mt-auto">
        {/* Logout */}
        <Link to="/logout" className="w-10 h-10 mb-4 hover:bg-[#ff5833] hover:text-[#302e2d] flex items-center justify-center rounded">
          <LogOut className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;