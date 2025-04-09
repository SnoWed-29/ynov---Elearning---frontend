

function CoursesSection() {
    const lessonsData = [
        {
          lessonNumber: '01',
          lessonTitle: 'Introduction to Creative Writing',
          lessonDescription: 'Creative writing for beginners',
          teacherName: 'Conner Garcia',
          teacherImage: 'https://via.placeholder.com/40/FFC107/000000?Text=CG', // Placeholder image
          duration: '22 min',
        },
        {
          lessonNumber: '03',
          lessonTitle: 'Foundations of Public Speaking',
          lessonDescription: 'Public Speaking and Leadership',
          teacherName: 'Saira Goodman',
          teacherImage: 'https://via.placeholder.com/40/4CAF50/FFFFFF?Text=SG', // Placeholder image
          duration: '40 min',
        },
        {
          lessonNumber: '05',
          lessonTitle: 'Getting to know the tool Adobe Illustrator',
          lessonDescription: 'Digital Illustration with Adobe Illustrator',
          teacherName: 'Tony Ware',
          teacherImage: 'https://via.placeholder.com/40/2196F3/FFFFFF?Text=TW', // Placeholder image
          duration: '1h 08 min',
        },
        {
          lessonNumber: '11',
          lessonTitle: 'Understanding audience psychology',
          lessonDescription: 'Public Speaking: Basic course',
          teacherName: 'Mya Guzman',
          teacherImage: 'https://via.placeholder.com/40/F44336/FFFFFF?Text=MG', // Placeholder image
          duration: '26 min',
        }
      ];
      
  return (
    <div className='bg-white border border-[] rounded-4xl flex'>
        <div className="flex flex-col  w-full py-2 px-6">
            <div className="flex w-full justify-between py-2">
                <div className="flex items-center">
                    <h2 className='text-2xl font-light'>My Courses</h2>
                </div>
                <div className="flex items-center">
                    <a href="" className='text-underline text-sm text-[#f6806a]'>view all lessons</a>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table-auto w-full border-collapse">
                    <thead>
                    <tr className="text-left">
                        <th className="py-2 font-normal text-gray-600">Lesson</th>
                        <th className="py-2 font-normal text-gray-600">Teacher</th>
                        <th className="py-2 font-normal text-right text-gray-600">Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lessonsData.map((lesson, index) => (
                        <tr
                        key={index}
                        className={`border-b border-gray-200 ${index === 0 ? '' : ''}`}
                        >
                        <td className="py-3">
                            <div className="font-semibold">{lesson.lessonNumber}. {lesson.lessonTitle}</div>
                            <div className="text-sm text-gray-500">{lesson.lessonDescription}</div>
                        </td>
                        <td className="py-3">
                            <div className="flex items-center">
                            <img
                                src={lesson.teacherImage}
                                alt={lesson.teacherName}
                                className="rounded-full w-8 h-8 mr-2"
                            />
                            <span>{lesson.teacherName}</span>
                            </div>
                        </td>
                        <td className="py-3 text-right">{lesson.duration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default CoursesSection