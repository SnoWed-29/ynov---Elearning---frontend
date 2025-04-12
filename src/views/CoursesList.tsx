import React from 'react';
import { Link } from 'react-router-dom';

function CoursesList() {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="p-4 grid grid-cols-3 space-y-4 col-span-3 gap-4 my-2 ">
        <Link
          to="/courses/01"
          className="relative h-[165px]  transition-transform delay-50 duration-300 hover:scale-110 transition w-full  rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>

        <Link
          to="/courses/01"
          className="relative h-[165px] transition-transform delay-50 duration-300 hover:scale-110 transition w-full bg-white rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>

        <Link
          to="/courses/01"
          className="relative h-[165px] transition-transform delay-50 duration-300 hover:scale-110 transition w-full bg-white rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>

        <Link
          to="/courses/01"
          className="relative h-[165px] transition-transform delay-50 duration-300 hover:scale-110 transition w-full bg-white rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>
        <Link
          to="/courses/01"
          className="relative h-[165px] transition-transform delay-50 duration-300 hover:scale-110 transition w-full bg-white rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>
        <Link
          to="/courses/01"
          className="relative h-[165px] transition-transform delay-50 duration-300 hover:scale-110 transition w-full bg-white rounded-br-md rounded-bl-md shadow-[4px_4px_7px_rgba(0,0,0,0.59)] py-2 px-4 flex justify-around items-center flex-col"
        >
          <h2 className="w-[10em] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            Gestion des Bases de Données - SQL
          </h2>
          <div className="absolute top-[-13px] left-[-1px] w-[50%] h-3 rounded-tr-[20px] bg-white border-t border-l border-r border-b-0 border-t-gray-300 border-l-gray-300 border-r-gray-300"></div>
          <div className="absolute left-[0.8em] top-[-0.8em] w-[4em] h-[5px] bg-[#BD94F4] rounded-b-md"></div>
        </Link>
      </div>
      <div className="col-span-2 bg-gradient-to-br from-blue-900/50 to-[#BD94F4]/50 rounded-4xl p-4 my-2"></div>
    </div>
  );
}

export default CoursesList;