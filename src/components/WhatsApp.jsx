import React from 'react';
import './WhatsApp.css'

const WhatsAppButton = () => {
  const companyPhoneNumber = "+2349128485866";
  const chatLink = `https://wa.me/${companyPhoneNumber}`;

  return (
    <a
      href={chatLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
      aria-label="Chat on WhatsApp"
      style={{zIndex:"20"}}
    >
     <i class="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
