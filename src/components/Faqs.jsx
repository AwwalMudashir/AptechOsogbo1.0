import React from 'react'
import fqs from './faqs.json'
import Faq from './Faq'
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import './component.css'

const Faqs = () => {
  const faqs = fqs.map((que,index)=>(
    <Faq key={index} question={que.question} answer={que.answer} />
  ))

  return (
    <div className='faqs bg-[#efedea] px-[40px]  py-20'>
      <h1 className='text-4xl md:text-6xl text-[#A60000] mb-12 text-center'>FAQ's</h1>

      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className="left w-[50%]">
          {faqs}
        </div>
        <div className="right w-[50%]">
        <div className="flex flex-col qa items-center justify-end bg-gray-100 p-6 h-[90vh] rounded-2xl shadow-lg w-[100%] mx-auto">
      {/* Illustration */}
      {/* <motion.img 
        src="https://illustrations.popsy.co/white/question-mark.svg" 
        alt="Ask a question" 
        className="w-28 h-28 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      /> */}

      {/* Input Field */}
      <div className="w-full flex items-center bg-white align-bottom bottom-0  rounded-full shadow-md p-3">
        <input
          type="text"
          placeholder="Type your question..."
          className="flex-grow text-black px-3 focus:outline-none text-lg"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <motion.button
         
          className="bg-[#FFB900] hover:bg-[#A60000] text-white p-3 rounded-full transition-all duration-300"
          whileTap={{ scale: 0.9 }}
        >
          <Send size={20} />
        </motion.button>
      </div>
    </div>
        </div>

      </div>
    </div>
  )
}

export default Faqs
