import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';

interface LessonItem {
  title: string;
  duration: string;
  subtopics?: { title: string; duration: string }[];
}

interface LessonSectionProps {
  title: string;
  totalDuration: string;
  items: LessonItem[];
}

const LessonSection: React.FC<LessonSectionProps> = ({
  title,
  totalDuration,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 p-2">
      <button
        className="w-full py-3 px-4 flex items-center justify-between text-gray-800 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          {title}
        </span>
        <span className="flex items-center">
          {totalDuration}
          {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </span>
      </button>
      {isOpen && (
        <ul className="bg-gray-50">
          {items.map((item, index) => (
            <li key={index} className="p-4 text-gray-700 flex items-center justify-between hover:bg-gray-100">
              <div className="flex items-center ">
                <Play className="h-4 w-4 mr-2 text-gray-500" />
                <span>{item.title}</span>
              </div>
              <span className="text-gray-500 text-sm">{item.duration}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface LessonsProps {
  sections: {
    title: string;
    totalDuration: string;
    items: LessonItem[];
  }[];
}

const Lessons: React.FC<LessonsProps> = ({ sections }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-2/5 p-4">
      <div className="border-2 border-[#151314] rounded-4xl shadow-md">
        {sections.map((section, index) => (
          <LessonSection
            key={index}
            title={section.title}
            totalDuration={section.totalDuration}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export {  Lessons };