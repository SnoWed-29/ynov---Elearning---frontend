import { ChevronLeft, Edit, Clock, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Lessons } from '../components/Lessons';
import Content from '../components/Content';
import { fetchModuleById, fetchChapterById } from '../services/course'; // Import the function
import { useUser } from '@/contexts/UserContext';
import ChapterContent from '@/components/ChapterContent';

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

const ChapterPage: React.FC = () => {
  const { courseId: moduleId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const { user, additionalUserData, loading } = useUser();
  const [module, setModule] = useState<Module | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [error, setError] = useState<string | null>(null);
  const courseId = moduleId ? Number(moduleId) : null;
  useEffect(() => {
    console.log('Params id:', courseId);
    console.log('User:', user, 'AdditionalUserData:', additionalUserData, 'Loading:', loading);

    const loadModule = async () => {
      try {
        if (loading) return;
        if (!courseId) {
          setError('Module ID missing');
          return;
        }
        if (!additionalUserData?.id) {
          setError('User not authenticated');
          return;
        }
        const data = await fetchModuleById( Number(courseId));
        setModule(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load module');
      }
    };
    loadModule();
  }, [courseId, additionalUserData, loading]);

  useEffect(() => {
    const loadChapter = async () => {
      try {
        if (loading) return;
        if (!moduleId || !chapterId) {
          setError('Invalid module or chapter ID');
          return;
        }

        // Fetch the chapter using the function
        const fetchedChapter = await fetchChapterById(Number(moduleId), Number(chapterId));
        setChapter(fetchedChapter);
      } catch (err: any) {
        setError(err.message || 'Failed to load chapter');
      }
    };

    loadChapter();
  }, [moduleId, chapterId, loading]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!module) {
    return <div className="p-4">Loading module...</div>;
  }

  if (!chapter) {
    return <div>No chapter found</div>;
  }

  const tableOfContents = module.chapters.map((chapter, index) => ({
    time: `${index + 1}:00`,
    title: chapter.chapterName,
  }));

  const lessons = module.chapters.map((chapter) => ({
    id: chapter.id,
    title: `0${chapter.order}. ${chapter.chapterName}`,
    totalDuration: 'N/A',
  }));

  const courseDescription = module.description;

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <div className="flex">
          <h1 className="text-2xl font-semibold italic flex items-center">
            <ChevronLeft className="w-8 h-8 -ml-2 mr-2" />
            {module?.moduleName || 'Module Name'}
          </h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Edit className="h-5 w-5" />
            <span>{module?.chapters?.length || 0} lessons</span>
          </button>
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>{module?.estimatedTime ? `${module.estimatedTime} min` : 'N/A'}</span>
          </button>
          <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>4.8 (86 reviews)</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <ChapterContent
          chapterId={chapter.id}
          moduleId={module.id}
        />
        {/* <Lessons sections={lessons || []} courseId={module.id} /> */}
      </div>
      <div className="chapter-page">
        <h1 className="text-2xl font-bold">{chapter?.chapterName || 'Chapter Name'}</h1>
        <p className="text-gray-700">{chapter?.description || 'No description available'}</p>
        {/* Add more chapter details here if needed */}
      </div>
    </div>
  );
};

export default ChapterPage;