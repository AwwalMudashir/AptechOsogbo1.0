import React from 'react';
import { useParams } from 'react-router-dom';
import './About.css'

const placeDetails = {
  1: {
    name: 'Main Building',
    description: 'The main building with state-of-the-art classrooms, labs, and student facilities.',
    images: ['/main-building1.jpg', '/main-building2.jpg', '/main-building3.jpg'],
  },
  2: {
    name: 'Classrooms',
    description: 'Our well-equipped classrooms offers a ventilated learning space with vast resources.',
    images: ['/classroom1.jpg', '/classroom2.jpg', '/classroom3.jpg'],
  },
  3: {
    name: 'Computer Lab',
    description: 'A tech-equipped lab with modern computers and software for student use.',
    images: ['/computer-lab1.jpg', '/computer-lab2.jpg', '/computer-lab3.jpg'],
  },
  4: {
    name: 'Staff Room',
    description: 'The free resourceful space where our staff reside when they are not having classes.',
    images: ['/staff-room.jpg'],
  },
  5: {
    name: 'Outdoor Area',
    description: 'The External Space for our tech facility',
    images: ['/outdoor-area1.jpg', '/outdoor-area2.jpg', '/outdoor-area3.jpg'],
  },

};

const PlaceDetails = () => {
  const { placeId } = useParams();
  const place = placeDetails[placeId];

  if (!place){
    return <p>Place not found</p>;
  } 

  return (
    <div className="pt-[120px] p-6 bg-white min-h-screen scroll-element">
      <h2 className="text-4xl font-bold text-[#A60000] mb-4">{place.name}</h2>
      <p className="text-lg text-gray-500 mb-8">{place.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {place.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${place.name} ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
        
      </div>
    </div>
  );
};

export default PlaceDetails;
