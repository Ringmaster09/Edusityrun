import React, { useEffect, useState } from 'react';
import './Navbar/Navbar.css';
import logo from '../assets/pen.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: '100px' }} />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
