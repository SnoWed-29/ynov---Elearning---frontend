import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LessonSectionProps {
  id: number; // Chapter ID
  title: string | number;
  courseId: number; // Add moduleId as a prop
}

const LessonSection: React.FC<LessonSectionProps> = ({
  id, // Chapter ID
  title,
  courseId, // Module ID
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 p-2">
      <Link
        to={`/courses/${courseId}/chapter/${id}`} // Dynamically construct the route
        className="w-full cursor-pointer py-3 px-4 flex items-center justify-between text-gray-800 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex text-justify items-start">
          {title}
        </span>
      </Link>
    </div>
  );
};

interface LessonsProps {
  courseId: number;
  sections: {
    id: number;
    title: string;
    totalDuration: string;
  }[];
}

const Lessons: React.FC<LessonsProps> = ({ sections, courseId }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-2/5 p-4">
      <div className="border-2 border-[#151314] rounded-4xl shadow-md">
        {sections.map((section, index) => (
          <LessonSection
            key={index}
            id={section.id} // Chapter ID
            title={section.title}
            courseId={courseId} 
            />
        ))}
      </div>
    </div>
  );
};

export { Lessons };