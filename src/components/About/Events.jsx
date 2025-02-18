import React from 'react'
import { Link } from 'react-router-dom';

const Events = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 scroll-element">
      {events.map((image, index) => (
        <Link to={`/career-quest`} key={index}>
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white font-bold text-lg">{image.caption}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Events
