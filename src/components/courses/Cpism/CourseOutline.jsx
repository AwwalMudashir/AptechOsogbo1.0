import React from 'react';
import './cpism.css'

function CourseOutline() {
  const courses = [
    { title: 'Programming Principles and Techniques', hours: 16 },
    { title: 'Logic Building and Elementary Programming', hours: 32 },
    { title: 'Building Modern Websites', hours: 40 },
    { title: 'AngularJS', hours: 16 },
    { title: 'eProject Website Development', hours: 2 },
    { title: 'UI/UX for Responsive Design', hours: 12 },
    { title: 'Object Oriented Programming (OOP) Concepts', hours: 16 },
    { title: 'Data Management with SQL Server', hours: 32 },
    { title: 'Total Hours', hours: 166 }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-yellow-50 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#A60000] text-white text-center py-8 px-6">
          <h1 className="text-4xl font-bold">Course Outline</h1>
          <p className="text-lg mt-2 opacity-90">Comprehensive Learning Path for Success</p>
        </div>

        {/* Course Outline Table */}
        <div className="p-6 md:p-10 scroll-element">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#FFB900]">
                <th className="px-4 py-4 text-left font-semibold text-white">Course Title</th>
                <th className="px-4 py-4 text-right font-semibold text-white">Hours</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-4 text-left text-gray-700 font-medium">
                    {course.title}
                  </td>
                  <td className="px-4 py-4 text-right text-gray-700 font-medium">
                    {course.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CourseOutline;
