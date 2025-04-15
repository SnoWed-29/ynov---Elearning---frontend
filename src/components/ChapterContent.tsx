import React, { useEffect, useState } from 'react';
import { fetchChapterContent } from '../services/course'; // Adjust the import path as needed

interface ContentProps {
  chapterId: number;
  moduleId: number;
}

const ChapterContent: React.FC<ContentProps> = ({ chapterId, moduleId }) => {
  const [chapterContent, setChapterContent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadChapterContent = async () => {
      try {
        setLoading(true);
        const content = await fetchChapterContent(chapterId, moduleId);
        setChapterContent(content);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch chapter content');
      } finally {
        setLoading(false);
      }
    };

    loadChapterContent();
  }, [chapterId]);

  if (loading) {
    return <div>Loading chapter content...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full w-4/5 mx-auto p-4">
      <div className="overflow-hidden">
        <div className="relative">
          <iframe
            className="w-full h-96 aspect-video object-cover rounded-4xl border-2 border-[#151314]"
            src={chapterContent?.videoUrl || ''} 
            title="Course video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <div className="flex border-b border-gray-200">
            <button className="py-2 px-4 text-[#151314] border-b-2 border-[#151314] font-semibold focus:outline-none">
              Description
            </button>
            <button className="py-2 px-4 text-gray-500 focus:outline-none">
              Materials
            </button>
            <button className="py-2 px-4 text-gray-500 focus:outline-none">
              Home task
            </button>
          </div>
          <div className="mt-4">
            <p>{chapterContent?.description || 'No description available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;