import React from 'react'
import Events from './Events'
import './About.css'

const events = [
  {src:"/cq1.jpg",alt:"Aptech Career Quest",caption:"Aptech Career Quest"},
]

const EventsSection = () => {
  return (
    <div>
      <h1 className='gall scroll-element'>Events</h1>
      <Events events={events} />
    </div>
  )
}

export default EventsSection
