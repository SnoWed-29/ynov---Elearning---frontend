import { ChevronLeft, Edit, Clock, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Lessons } from '../components/Lessons';
import Content from '../components/Content';
import { fetchModuleById } from '../services/course';
import { useUser } from '@/contexts/UserContext';
import { log } from 'console';

interface Chapter {
  id: number;
  chapterName: string;
  description: string;
  order: number;
}

interface Module {
  id: number;
  moduleName: string;
  description: string;
  estimatedTime: number | null;
  niveauId: number;
  isGlobal: boolean;
  createdAt: string;
  updatedAt: string;
  chapters: Chapter[];
}

const Course: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, additionalUserData, loading } = useUser();
  const [module, setModule] = useState<Module | null>(null);
  const [error, setError] = useState<string | null>(null); // Track if the minimum time has passed

  useEffect(() => {
    console.log('Params id:', id);
    console.log('User:', user, 'AdditionalUserData:', additionalUserData, 'Loading:', loading);
    
    const loadModule = async () => {
      try {
        if (loading) return;
        if (!id) {
          setError('Module ID missing');
          return;
        }
        if (!additionalUserData?.id) {
          setError('User not authenticated');
          return;
        }
        const data = await fetchModuleById( Number(id));
        setModule(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load module');
      }
    };
    loadModule();
  }, [id, additionalUserData, loading]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!module) {
    return <div className="p-4">Loading module...</div>;
  }

  const tableOfContents = module.chapters.map((chapter, index) => ({
    time: `${index + 1}:00`,
    title: chapter.chapterName,
  }));

  const lessons = module.chapters.map((chapter) => ({
    title: `0${chapter.order}. ${chapter.chapterName}`,
    id: chapter.id,
    totalDuration: 'N/A',
    items: [
      {
        title: chapter.chapterName,
        duration: 'N/A',
      },
    ],
  }));

  const courseDescription = module.description;

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <div className="flex">
          <h1 className="text-2xl font-semibold italic flex items-center">
            <ChevronLeft className="w-8 h-8 -ml-2 mr-2" />
            {module.moduleName}
          </h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Edit className="h-5 w-5" />
            <span>{module.chapters.length} lessons</span>
          </button>
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>{module.estimatedTime ? `${module.estimatedTime} min` : 'N/A'}</span>
          </button>
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>4.8 (86 reviews)</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Content description={courseDescription} tableOfContents={tableOfContents} />
        <Lessons sections={lessons} courseId={module.id} />
      </div>
    </div>
  );
};

export default Course;