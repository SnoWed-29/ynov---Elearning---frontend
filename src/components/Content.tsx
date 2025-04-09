import { Share2 } from 'lucide-react';
import React from 'react';

interface ContentProps {
  description: string;
  tableOfContents: { time: string; title: string }[];
}

const Content: React.FC<ContentProps> = ({ description, tableOfContents }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5  p-4">
      <div className=" overflow-hidden ">
        <div className="relative">
          <iframe
            className="w-full aspect-video object-cover rounded-4xl border-2 border-[#151314] "
            src="https://www.youtube.com/embed/rfscVS0vtbw?si=1nLCxK4qi7szNNga"// Replace with your actual YouTube video URL
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" p-4">
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
            <div className="ml-auto text-gray-500 flex items-center">
              {/* You might want to use a share icon from Lucid Icons here */}
              <Share2 className='mx-2' />
              Share lesson
            </div>
          </div>
          <div className="py-4 text-gray-700">
            <p className='leading-8'>{description}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">What you'll learn</h3>
              <ul>
                {tableOfContents.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {item.time} {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;