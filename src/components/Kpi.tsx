import { Bookmark } from 'lucide-react'

function Kpi() {
  return (
    <div className="flex flex-col w-full">
        <div className="flex w-full p-4">
            <div className="flex justify-between w-full items-center">
                <h2 className="text-2xl font-semibold mr-6">My courses</h2>
                <div className="flex space-x-2">
                    <button className="bg-gray-900 text-white rounded-full px-4 py-2 text-sm font-medium focus:outline-none">
                    All courses
                    </button>
                    <button className="bg-white text-gray-700 rounded-full px-4 py-2 text-sm font-medium focus:outline-none border border-gray-300">
                    Marketing
                    </button>
                    <button className="bg-white text-gray-700 rounded-full px-4 py-2 text-sm font-medium focus:outline-none border border-gray-300">
                    Computer Science
                    </button>
                    <button className="bg-white text-gray-700 rounded-full px-4 py-2 text-sm font-medium focus:outline-none border border-gray-300">
                    Psychology
                    </button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-4 w-full'>
            <div className="flex flex-col space-y-6  border border-black rounded-4xl text-[#151314] py-2 px-4 bg-[#FCCC42]">
                {/* course  +  bookmark */}
                <div className="flex w-full justify-between secondFont">
                    <div className="flex text-[#f7f7f5] font-semibold bg-[#151314] rounded-2xl px-4 py-2">
                        <span>Developpement Frontend</span>
                    </div>
                    <div className="flex">
                        <Bookmark className='w-8 h-8' />
                    </div>
                </div>
                {/* title */}
                <div className="flex w-full justify-start">
                    <h2 className='text-xl font-light'>React Hooks : useEffect, useState, useRef </h2>
                </div>
                {/* Progress bar */}
                <div className="flex flex-col w-full space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                        <span>4/10</span>
                        <span>Progress</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2.5">
                        <div
                            className="bg-[#151314] h-2.5 rounded-full"
                            style={{ width: '40%' }} // 4/12 = 33.33%
                        ></div>
                    </div>
                </div>
                {/* continue */}
                <div className="flex justify-between">
                    <div className="flex -space-x-3">
                    <div className="z-30 bg-black border border-white text-white rounded-full w-10 h-10 ">

                    </div>
                    <div className="z-20 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-10 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-0 text-xs pl-2 bg-black border border-white text-white rounded-full w-10 h-10 flex justify-center items-center">+10</div>
                    </div>
                    <div className="flex h-fit text-[#f7f7f5] bg-[#ff5833] rounded-xl px-4 py-2">
                        <span>Continue</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-6  border border-black rounded-4xl text-[#151314] py-2 px-4 bg-[#BD94F4] ">
                {/* course  +  bookmark */}
                <div className="flex w-full justify-between secondFont">
                    <div className="flex text-[#151314] font-semibold bg-[#FCCC42] rounded-2xl px-4 py-2">
                        <span>Developpement Frontend</span>
                    </div>
                    <div className="flex">
                        <Bookmark className='w-8 h-8' />
                    </div>
                </div>
                {/* title */}
                <div className="flex w-full justify-start">
                    <h2 className='text-xl font-light'>React Hooks : useEffect, useState, useRef </h2>
                </div>
                {/* Progress bar */}
                <div className="flex flex-col w-full space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                        <span>18/20</span>
                        <span>Progress</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2.5">
                        <div
                            className="bg-[#151314] h-2.5 rounded-full"
                            style={{ width: '90%' }} // 4/12 = 33.33%
                        ></div>
                    </div>
                </div>
                {/* continue */}
                <div className="flex justify-between">
                    <div className="flex -space-x-3">
                    <div className="z-30 bg-black border border-white text-white rounded-full w-10 h-10 ">

                    </div>
                    <div className="z-20 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-10 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-0 text-xs pl-2 bg-black border border-white text-white rounded-full w-10 h-10 flex justify-center items-center">+10</div>
                    </div>
                    <div className="flex h-fit text-[#f7f7f5] bg-[#ff5833] rounded-xl px-4 py-2">
                        <span>Continue</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#bce7fe] flex flex-col space-y-6  border border-black rounded-4xl text-[#151314] py-2 px-4">
                {/* course  +  bookmark */}
                <div className="flex w-full justify-between secondFont">
                    <div className="flex text-[#151314] font-semibold bg-[#BD94F4] rounded-2xl px-4 py-2">
                        <span>Developpement Frontend</span>
                    </div>
                    <div className="flex">
                        <Bookmark className='w-8 h-8' />
                    </div>
                </div>
                {/* title */}
                <div className="flex w-full justify-start">
                    <h2 className='text-xl font-light'>React Hooks : useEffect, useState, useRef </h2>
                </div>
                {/* Progress bar */}
                <div className="flex flex-col w-full space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                        <span>4/12</span>
                        <span>Progress</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2.5">
                        <div
                            className="bg-[#151314] h-2.5 rounded-full"
                            style={{ width: '33.33%' }} // 4/12 = 33.33%
                        ></div>
                    </div>
                </div>
                {/* continue */}
                <div className="flex justify-between">
                    <div className="flex -space-x-3">
                    <div className="z-30 bg-black border border-white text-white rounded-full w-10 h-10 ">

                    </div>
                    <div className="z-20 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-10 bg-black border border-white text-white rounded-full w-10 h-10 ">
                        
                    </div>
                    <div className="z-0 text-xs pl-2 bg-black border border-white text-white rounded-full w-10 h-10 flex justify-center items-center">+10</div>
                    </div>
                    <div className="flex h-fit text-[#f7f7f5] bg-[#ff5833] rounded-xl px-4 py-2">
                        <span>Continue</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kpi