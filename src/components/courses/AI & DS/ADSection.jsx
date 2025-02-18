import React from 'react'
import './AI.css'
import AIAdoptionChart from './Chart'
import CourseOutline from './CourseOutline'

const ADSection = () => {
  return (
    <div className='ad-section bg-gray-100 p-8'>
      <div className='ai-s w-[100%] flex flex-col md:flex-row justify-between gap-5 scroll-element'>
        <img src='/AI.jpg' className='w-[100%] md:w-[50%] h-auto md:h-[350px]' />
        <div>
          <h1 className='text-3xl text-[#A60000]'>Artificial Intelligence</h1>
          <p className='text-gray-500 mt-6'>
          Artificial Intelligence (AI) is revolutionizing industries by enabling machines to think, learn, and make intelligent decisions. It powers automation, enhances efficiency, and drives innovation across sectors like healthcare, finance, and robotics. AI leverages machine learning, natural language processing, and neural networks to analyze vast data, recognize patterns, and solve complex problems. From self-driving cars to personalized recommendations, AI is transforming how we work and live. As technology advances, AI continues to shape the future, redefining possibilities and human-machine interactions.
          </p>
        </div>
      </div>
      <div className='ds-s w-[100%] flex flex-col md:flex-row justify-between gap-8 scroll-element'>
        <div className='mt-10'>
          <h1 className='text-3xl text-[#A60000] '>Data Science</h1>
          <p className='text-gray-500 mt-6'>
          Data Science is the field of extracting meaningful insights from raw data using statistical analysis, machine learning, and programming. It helps businesses make informed decisions, predict trends, and optimize operations. By leveraging tools like Python, R, and AI algorithms, data scientists analyze complex datasets to uncover patterns and correlations. Data Science is transforming industries like healthcare, finance, and marketing, enabling data-driven innovations. As data continues to grow, its role in shaping technology and decision-making becomes increasingly crucial and impactful.
          </p>
        </div>
        <img src='/DS.jpg'  className='hidden md:block w-[50%] h-[350px]' />
      </div>

        <h1 className='text-[#A60000] text-5xl pt-[80px] text-center'>Advantages of AI & Data Science</h1>
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-10  space-y-6 lg:space-y-0 items-center mt-8 mb-12 scroll-element">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full lg:w-1/3 text-center p-6 h-[250px]">
                <i class="fa-solid fa-gear" style={{color:"#A60000",fontSize:"30px"}}></i>
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Automation & Efficiency</h3>
                    <p className="text-gray-500 text-md leading-relaxed">
                    AI automates repetitive tasks, enhances productivity, reduces errors, and allows humans to focus on complex problem-solving.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden w-full lg:w-1/3 text-center p-6 h-[250px]">
                <i class="fa-solid fa-chart-simple" style={{color:"#A60000",fontSize:"30px"}}></i>
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Data-Driven Decision Making</h3>
                    <p className="text-gray-500 text-md leading-relaxed">
                    AI analyzes large datasets, identifies patterns, and helps businesses make informed, accurate, and strategic decisions for growth.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full lg:w-1/3 text-center p-6 h-[250px]">
                <i class="fa-solid fa-star-of-david" style={{color:"#A60000",fontSize:"30px"}}></i>
                    <h3 className="text-2xl font-semibold text-[#FFB900]  mb-4">Predictive Analytics</h3>
                    <p className="text-gray-500 text-md leading-relaxed">
                    AI predicts future trends, behaviors, and risks by analyzing historical data, enabling proactive decision-making in various industries.
                    </p>
                </div>
       </div>


      <div className='p-6 pt-15'>
      <AIAdoptionChart/>
      </div>

      <CourseOutline/>

    </div>
  )
}

export default ADSection
