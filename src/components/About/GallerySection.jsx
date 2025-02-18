import React from 'react';
import Gallery from './Gallery';
import './About.css'

const images = [
    { src:"/main-building2.jpg", alt: "Main building", caption: "Main Building" },
    { src: "/classroom1.jpg", alt: "Classrooms", caption: "Classrooms" },
    { src: "/computer-lab1.jpg", alt: "Computer lab", caption: "Computer Lab" },
    { src: "/staff-room.jpg", alt: "Staff room", caption: "Staff Room" },
    { src: "/outdoor-area3.jpg", alt: "Outdoor area", caption: "Outdoor Area" },
];

const GallerySection = () => {
    return (
        <div>
          <h1 className='gall'>Gallery</h1>
            <Gallery images={images} />
        </div>
    );
};

export default GallerySection;
