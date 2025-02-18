import React from 'react';
import './About.css'

const winners = [
  {
    name:"Ridwan Adeagbo",
    sname:"Ridwan",
    award: "50% Scholarship",
    message: "on our Career Quest program for any of the linked Universities with Aptech.",
    images: ["/cq-winner-2024.jpg"],
    imgSrc:"/ridwan.png"
  },
  {
    name:"Hikmat Raji",
    sname:"Hikmat",
    award: "50% Scholarship",
    message: "on her Aptech fees, setting the path down for her completion of her course",
    images: ['/cq7.jpg','cq8.jpg'],
    imgSrc:"/hikmat.png"
  },
  {
    name:"Ibraheem Fatiu Oyebayo",
    sname:"Ibraheem Fatiu",
    award: "50% Scholarship",
    message: "on our Career Quest program for any of the linked Universities with Aptech.",
    images: ["/cq-winner-2023-2.jpg","/cq-winner-2023.jpg"],
    imgSrc:"/cq-winner-2023-1.jpg"
  },
]

const ScholarshipWinnerSection = () => {
  return (
    <section className="p-4 scroll-element">
      <h2 className="text-6xl font-bold text-[#A60000] mt-8 mb-8">Our Winners</h2>
      {winners.map((win)=>(
      <div className="container mx-auto mb-[50px]">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={win.imgSrc}
            alt="Winner"
            className="w-32 h-32 rounded-full border-4 border-red-800 mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-3xl font-bold text-red-800 mb-2">
              Congratulations,  {win.name}!
            </h2>
            <p className="text-gray-700 mb-4">
              {win.sname} was awarded a{' '}
              <span className="font-bold text-red-800">{win.award}</span>{' '}
              {win.message}
            </p>
            <p className="text-gray-700">
              At <strong>Aptech</strong>, we are proud to empower
              learners with opportunities to achieve their dreams in tech.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-red-800 mb-6 w-mom">
          Winning Moments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {win.images.map((w)=>(
              <img
              src={w}
              alt="Winning Moment"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
      ))}         
        </div>
      </div>
    </div>
      ))}

    </section>
  );
};

export default ScholarshipWinnerSection;
