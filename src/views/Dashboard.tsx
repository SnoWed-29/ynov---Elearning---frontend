import { MessageCircle } from 'lucide-react'
import Kpi from '../components/Kpi'
import CoursesSection from '../components/CoursesSection'


function Dashboard() {
  return (
    <div className='w-full h-screen ' >
        <div className="flex flex-col w-full my-3 ">
            <Kpi />
            <div className="grid grid-cols-3 gap-3 my-4">
                <div className="col-span-2">
                    <CoursesSection />
                </div>
                <div className="col-span-1 flex flex-col p-4 bg-gradient-to-br from-blue-900/50 to-[#BD94F4]/50  border rounded-4xl text-[#f7f7f5]">
                    <div className="flex w-full p-4">
                        <h2 className='text-xl font-semibold flex items-center'><MessageCircle className='w-10 h-10 text-[##FCCC42]'/> Chat Rooms</h2>
                    </div>
                    <div className="flex w-full p-4 my-3 flex-col space-y-1">
                        <span className='text-center'>Join the conversation with your classmates</span>
                        <span className='text-center'>and teachers in our chat rooms.</span>
                        <span className='text-center'>Ask questions, share ideas, and get help.</span>
                        <div className="flex -space-x-3 justify-center my-3">
                            <div className="z-30 bg-[#bce7fd] border border-white text-white rounded-full w-18 h-18 ">

                            </div>
                            <div className="z-20 bg-[#FCCC42] border border-white text-white rounded-full w-18 h-18 ">
                                
                            </div>
                            <div className="z-10 bg-[#BD94F4] border border-white text-white rounded-full w-18 h-18 ">
                                
                            </div>
                            <div className="z-0 text-xs pl-2 bg-black border border-white text-white rounded-full w-18 h-18 flex justify-center items-center">+10</div>
                        </div>
                       <div className="flex w-full justify-center">
                       <a href="" className='text-[#151314] bg-[#FCCC42] px-4 py-2 rounded-md w-fit float-right'>Start chatting now!</a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard