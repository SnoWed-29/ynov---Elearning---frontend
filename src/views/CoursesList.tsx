import { useEffect, useState } from 'react';
import { Bookmark } from 'lucide-react';
import { fetchAndDisplayModules } from '../services/course'; // Import the service function
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';

interface Module {
  id: string;
  moduleName: string;
  description: string;
  estimatedTime: string | null;
  niveauId: number;
  isGlobal: boolean;
  createdAt: string;
  updatedAt: string;
}

function CoursesList() {
  const [specializedCourses, setSpecializedCourses] = useState<Module[]>([]);
  const [globalCourses, setGlobalCourses] = useState<Module[]>([]);
  const { additionalUserData } = useUser();
  const userId = additionalUserData?.id; // Extract userId from additionalUserData
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      if (!userId) {
        console.error('User ID is not available');
        return;
      }

      try {
        const { relatedModules, globalModules } = await fetchAndDisplayModules(userId); // Call the service function
        setSpecializedCourses(relatedModules);
        setGlobalCourses(globalModules);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, [userId]);

  return (
    <div className="flex flex-col">
      <div className="flex w-full p-4">
        <h1 className="text-2xl font-bold">Courses List</h1>
      </div>

      {/* Specialized Courses Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Specialized Courses</h2>
        <div className="grid grid-cols-4 gap-4 w-full">
          {specializedCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col space-y-6 border border-black rounded-4xl text-[#151314] py-2 px-4 bg-[#FCCC42]"
            >
              <div className="flex w-full justify-between secondFont">
                <div className="flex text-[#f7f7f5] font-semibold bg-[#151314] rounded-2xl px-4 py-2">
                  <span>{course.moduleName}</span>
                </div>
                <div className="flex">
                  <Bookmark className="w-8 h-8" />
                </div>
              </div>
              <div className="flex w-full justify-end">
                <button
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className="flex h-fit text-[#f7f7f5] bg-[#ff5833] rounded-xl px-4 py-2"
                >
                  <span>Continue</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Courses Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Global Courses</h2>
        <div className="grid grid-cols-4 gap-4 w-full">
          {globalCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col space-y-6 border border-black rounded-4xl text-[#151314] py-2 px-4 bg-[#BD94F4]"
            >
              <div className="flex w-full justify-between secondFont">
                <div className="flex text-[#151314] font-semibold bg-[#FCCC42] rounded-2xl px-4 py-2">
                  <span>{course.moduleName}</span>
                </div>
                <div className="flex">
                  <Bookmark className="w-8 h-8" />
                </div>
              </div>
              <div className="flex w-full justify-end">
                <button
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className="flex h-fit text-[#f7f7f5] bg-[#ff5833] rounded-xl px-4 py-2"
                >
                  <span>Continue</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesList;