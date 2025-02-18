import React, { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown(!isShown);
  }

  return (
    <div className="faq bg-gray-100 rounded-2xl shadow-lg px-6 py-2 mb-6 transition-all duration-300 w-full max-w-[100%] mx-auto">
      <div className="top flex justify-between items-center">
        <h2 className="question text-md md:text-xl font-semibold text-black">{question}</h2>
        <div
          className="icon  p-3 bg-[transparent] justify-center items-center text-center  cursor-pointer transition-transform duration-300 "
          onClick={toggle}
        >
          <i className={`fa-solid ${isShown ? 'fa-angle-up' : 'fa-angle-down'} text-red-700 text-xl transition-all duration-300`}></i>
        </div>
      </div>
      {
        isShown 
        ?
        <div className="w-[100%]">

        <hr className="bg-gray-300 h-1 my-3 rounded-lg" />
      <div className='bottom bg-white p-6 w-[100%] rounded-xl transition-all duration-500 ease-in-out'>
        <p className="answer text-lg text-gray-700">{answer}</p>
      </div>
      </div>
        :
        <>
        </>
      }
    </div>
  );
};

export default Faq;
