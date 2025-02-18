import React, { useState } from "react";

const CourseOutline = () => {
  const [activeTab, setActiveTab] = useState("AI");

  // Course data
  const courseData = {
    AI: [
      { module: "Introduction to AI & Machine Learning", hours: 8 },
      { module: "Programming with Python for AI", hours: 36 },
      { module: "Large Data Management with MongoDB", hours: 40 },
      { module: "Emerging Job Areas SMAC (Social, Mobile, Analytics & Cloud)", hours: 8 },
      { module: "R Programming", hours: 40 },
      { module: "AI Primer (ML,DL, Neural Networks)", hours: 16 },
      { module: "Natural Language Processing (NLP)", hours: 28 },
      { module: "Deep Learning and Machine Learning APIs", hours: 56 },
      { module: "Project Chatbot and Recommendation Engine", hours: 2 },
    ],
    DS: [
      { module: "Introduction to Data Science", hours: 8 },
      { module: "Programming with Python", hours: 36 },
      { module: "Large Data Management with MongoDB", hours: 40 },
      { module: "R Programming", hours: 40 },
      { module: "Foundation of Big Data Systems", hours: 44 },
      { module: "Processing Big Data (Hadoop MapReduce, Hive, Pig)", hours: 36 },
      { module: "Visual Analytics with Tableau", hours: 40 },
      { module: "Web and Social Media Analytics (Google Analytics and SAS)", hours: 40 },
      { module: "Project Big Data", hours: 2 },
    ],
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-100 scroll-element">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#A60000] mb-10 text-center">Course Outline</h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "AI" ? "bg-[#FFB900] text-white" : "bg-white text-[#A60000] border border-[#A60000]"
            }`}
            onClick={() => setActiveTab("AI")}
          >
            AI
          </button>
          <button
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "DS" ? "bg-[#FFB900] text-white" : "bg-white text-[#A60000] border border-[#A60000]"
            }`}
            onClick={() => setActiveTab("DS")}
          >
            Data Science
          </button>
        </div>

        {/* Course Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-lg">
            <thead className="bg-[#FFB900] text-white">
              <tr>
                <th className="p-4">Module</th>
                <th className="p-4">Hours</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#A60000]">
              {courseData[activeTab].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{item.module}</td>
                  <td className="p-4">{item.hours}</td>
                </tr>
              ))}
              <tr>
                <td className="p-4 font-bold">Total Hours</td>
                <td className="p-4 font-bold">
                  {courseData[activeTab].reduce((sum, item) => sum + item.hours, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;
