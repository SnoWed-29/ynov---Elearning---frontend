import { ChevronLeft,Edit, Clock, Star } from 'lucide-react';
import React from 'react'
import { Lessons } from '../components/Lessons';
import Content from '../components/Content';

function Course() {
    const tableOfContentsData = [
        { time: "0:00", title: "Introduction to Public Speaking" },
        { time: "2:34", title: "The Importance of Public Speaking" },
        { time: "5:46", title: "Types of Public Speaking" },
        { time: "7:12", title: "Key Elements of Effective Public Speaking" },
      ];
    
      const lessonsData = [
        {
          title: "01. Introduction to Public Speaking ",
          totalDuration: "40 min",
          items: [
            { title: "Overview of public speaking", duration: "8 min" },
            { title: "Effective communication", duration: "15 min" },
            { title: "Personal leadership assessment", duration: "11 min" },
            { title: "Understanding audience dynamics", duration: "6 min" },
          ],
        },
        {
          title: "02. Foundations of Public Speaking",
          totalDuration: "36 min",
          items: [], // Add items for this section
        },
        {
          title: "03. Creating clear and engaging messages",
          totalDuration: "24 min",
          items: [
            { title: "Overview of public speaking", duration: "8 min" },
            { title: "Effective communication", duration: "15 min" },
            { title: "Personal leadership assessment", duration: "11 min" },
            { title: "Understanding audience dynamics", duration: "6 min" },
        ], // Add items
        },
        {
          title: "04. Mastering Non-Verbal Communication",
          totalDuration: "55 min",
          items: [], // Add items
        },
        {
          title: "05. Persuasion Techniques in Public Speaking",
          totalDuration: "32 min",
          items: [], // Add items
        },
        {
          title: "06. Advanced Speaking Techniques",
          totalDuration: "18 min",
          items: [], // Add items
        },
      ];
      const courseDescription =
    "Public speaking is an essential skill that plays a significant role in both personal and professional development. Whether you're delivering a speech at a conference, giving a presentation at work, or speaking at a social event, being able to communicate effectively in front of an audience is invaluable.";

  return (
    <div className=' w-full'>
        <div className="flex w-full justify-between w-full">
            <div className="flex ">
                <h1 className='text-2xl font-sembold italic flex items-center'><ChevronLeft className='w-8 h-8 -ml-2 mr-2' />Développement Front Avancé</h1>
            </div>
            <div className="flex space-x-4">
                <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
                    <Edit className="h-5 w-5" />
                    <span>6 lessons</span>
                </button>
                <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>3h 25min</span>
                </button>
                <button className="bg-[#FCCC42] text-[#151314] border border-[#151314] rounded-full px-4 py-2 flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>4.8 (86 reviews)</span>
                </button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <Content description={courseDescription} tableOfContents={tableOfContentsData} />
            <Lessons sections={lessonsData} />
        </div>
    </div>
  )
}

export default Course