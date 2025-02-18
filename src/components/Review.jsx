import React, { useState, useEffect } from 'react';
import './Review.css'

// Local reviews data
const reviews = [
  {
    id: 1,
    name: 'Pavel Chetvertkov',
    locay: 'Tombov, Russia',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "Aptech gives ocean-wide practical experience in informatics and programming",
  },
  {
    id: 2,
    name: 'Hassan Abbas',
    locay: 'Pakistan',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'ACCP from Aptech acquainted me with job related technology which proved helpgul in my career.',
  },
  {
    id: 3,
    name: 'LE MINH TUYEN',
    locay: 'China',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Being trained by a team of experts has helped me to grasp the latest technologies in the I.T industry and giving me the confidence to pursue my future career',
  },
  {
    id: 4,
    name: 'David Edokpayi',
    locay: 'Abuja, Nigeria',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Aptech gave me a good foundational I.T knowledge in programming, web design, scripting languages and database management',
  },
  {
    id: 5,
    name: 'Busari Idris Adeyinka',
    locay: 'Kano, Nigeria',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'The curriculum is built is such that it encapsulates the different IT Technologies - Networking, Software Engineering, Open Source technology and Database Management',
  },
];

function Review() {
  const [currentItem, setCurrentItem] = useState(0);

  const { img, name, locay, text } = reviews[currentItem];

  // Show next person
  const nextPerson = () => {
    setCurrentItem((currentItem) => {
      let newItem = currentItem + 1;
      if (newItem > reviews.length - 1) {
        newItem = 0;
      }
      return newItem;
    });
  };

  // Show previous person
  const prevPerson = () => {
    setCurrentItem((currentItem) => {
      let newItem = currentItem - 1;
      if (newItem < 0) {
        newItem = reviews.length - 1;
      }
      return newItem;
    });
  };

  // Show random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    setCurrentItem(randomNumber);
  };

  return (

    <article class="review">
      <h1 className='text-4xl flex justify-center text-[#A60000] mb-[40px] mt-[20px] scroll-element'>Our Reviews</h1>
    <div class="review-img-container">
      <img src={img} id="rev-person-img" alt={name} />
    </div>
    <h4 id="rev-author">{name}</h4>
    <p id="rev-job">{locay}</p>
    <p id="rev-info w-[80%] m-auto text-gray-300">
     {text} 
    </p>
    <div class="rev-button-container">
      <button class="rev-prev-btn px-3 py-1 rounded bg-gray-200" onClick={prevPerson}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="rev-next-btn px-3 py-1 rounded bg-gray-200" onClick={nextPerson}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    {/* <button class="rev-random-btn" onClick={randomPerson}>surprise me</button> */}
  </article>
  );
}

export default Review;
