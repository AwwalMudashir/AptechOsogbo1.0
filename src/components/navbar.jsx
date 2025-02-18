import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';
import './component.css';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true); // State to control navbar background

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Initialize the active item based on the current URL path
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    setActiveItem(currentPath);

    // Check if the current path should have a dynamic transparent background
    const pagesWithTransparentBackground = ['home', 'about','AI-DataScience']; // Add paths for transparent background

    const handleScroll = () => {
      if (pagesWithTransparentBackground.includes(currentPath)) {
        // Change to white when scrolled
        setIsTransparent(window.scrollY === 0);
      } else {
        // For other pages, make it always non-transparent
        setIsTransparent(false);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);

    // Run initially to set the correct state
    handleScroll();

    // Cleanup listener on unmount or path change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Runs whenever the URL changes

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item === 'home' ? '' : item}`);
  };

  return (
    <div>
      <nav
        className={`nav w-[100%] pl-[3%] pr-[3%] ${
          isTransparent ? 'bg-transparent' : 'bg-white'
        }  ${isTransparent ? '' : 'shadow-custom'} transition-colors duration-300 ease-in-out pt-[6px] pb-[6px] flex items-center justify-between`}
      >
        <img className='w-40' onClick={()=>navigate('/')} src={assets.AptechLogo} alt="Aptech Logo" />

        <ul
  className={`nav-lists ${
    isOpen ? 'open' : ''
  } flex flex-col gap-4 lg:gap-12 text-xl lg:flex-row transition-all duration-300 ease-in-out lg:opacity-100 lg:max-h-none lg:flex lg:relative lg:justify-center`}
>
          <li
            className={`nav-item ${
              activeItem === 'home' ? 'border-b-[3px] border-[#FFB900]' : ''
            } ${isTransparent ? 'text-white' : 'text-black'}`}
            onClick={() => handleItemClick('home')}
          >
            Home
          </li>
          <li
            className={`nav-item ${
              activeItem === 'courses' ? 'border-b-[3px] border-[#FFB900]' : ''
            } ${isTransparent ? 'text-white' : 'text-black'}`}
            onClick={() => handleItemClick('courses')}
          >
            Courses
          </li>
          <li
            className={`nav-item ${
              activeItem === 'about' ? 'border-b-[3px] border-[#FFB900]' : ''
            } ${isTransparent ? 'text-white' : 'text-black'} `}
            onClick={() => handleItemClick('about')}
          >
            About
          </li>
          <li
            className={`nav-item ${
              activeItem === 'contact' ? 'border-b-[3px] border-[#FFB900]' : ''
            } ${isTransparent ? 'text-white' : 'text-black'}`}
            onClick={() => handleItemClick('contact')}
          >
            Contact
          </li>
        </ul>



        <div
            className='bar-t cursor-pointer lg:hidden'
            onClick={toggleMenu}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
