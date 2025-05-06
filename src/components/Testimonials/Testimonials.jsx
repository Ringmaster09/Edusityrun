import React, { useState } from 'react';
import './Testimonias.css';
import right from '../../assets/right.png';
import left from '../../assets/left.png';
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.jpeg';
import p3 from '../../assets/p3.webp';
import p4 from '../../assets/p4.webp';

const testimonialsData = [
  {
    img: p1,
    name: 'William Jackson',
    location: 'Edusity, USA',
    text: 'Choosing this college was the best decision I made. The faculty is supportive, and the modern campus facilities really enhance the learning experience. I felt welcomed from day one!'
  },
  {
    img: p2,
    name: 'Jack Orengton',
    location: 'Edusity, USA',
    text: 'I wanted a place that focused not just on academics but on building real-world skills. This college offers amazing internships, workshops, and industry exposure.'
  },
  {
    img: p3,
    name: 'Percy Katinson',
    location: 'Edusity, USA',
    text: 'From state-of-the-art labs to highly qualified professors, everything here is top-notch. I already have a clear path toward my dream career thanks to the guidance here.'
  },
  {
    img: p4,
    name: 'Emily Watson',
    location: 'Edusity, USA',
    text: 'The vibrant campus life and student clubs helped me discover my passions beyond textbooks. I’m proud to be a part of this inspiring community.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonials">
       <h1>Testimonials</h1>
  <h2>What Student says</h2>
      <img src={left} alt="Previous" className="arrow-btn back-btn" onClick={prevSlide} />
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonialsData.map((testimonial, index) => (
          <div className="slide" key={index}>
            <div className="user-info">
              <img src={testimonial.img} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <span>{testimonial.location}</span>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <img src={right} alt="Next" className="arrow-btn next-btn" onClick={nextSlide} />
    </div>
  );
};

export default Testimonials;
