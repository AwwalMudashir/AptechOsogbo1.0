import React from 'react'
import ScholarshipWinnerSection from './Winners'

const event ={
  name: "Aptech Osogbo Career Quest",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe sequi ad, quos, fuga tempora aliquid aperiam, esse quisquam officiis aliquam similique quo? Tempora possimus nostrum ducimus, sequi natus voluptatum deserunt accusamus. Perspiciatis illum provident esse, pariatur quia harum, earum corrupti id iusto accusantium natus minima. Id pariatur eius mollitia.",
  eventImages:['/cq1.jpg','/cq2.jpg','/cq3.jpg','/cq5.jpg','/cq6.jpg']
} 

const CareerQuest = () => {
  return (
    <div className="pt-[120px] p-6 bg-gray-100 min-h-screen scroll-element">
      <h2 className="text-6xl font-bold text-[#A60000] mb-4">{event.name}</h2>
      <p className="text-lg text-gray-700 mb-8">{event.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.eventImages.map((image) => (
          <img
            src={image}
            alt={`${event.name}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
      <ScholarshipWinnerSection/>
    </div>
  )
}

export default CareerQuest
