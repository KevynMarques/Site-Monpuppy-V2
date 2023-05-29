import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import Pitbull from "../Pitbull/index";
import Golden from "../Golden/index";
import Lulu from "../Spitz/index";
import Yorkshire from "../Yorkshire/index";
import PA from "../PastorAlemao/index";
import ButtonFixed from '../ButtonFixed';

const HorizontalCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    carouselRef.current.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.round(
        carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
      );
      setCurrentSlide(index);
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  const slides = [<Pitbull />, <Golden />, <Lulu />, <Yorkshire />, <PA />];

  const renderDots = () => {
    return slides.map((slide, index) => (
      <li
        key={index}
        className={`dot-Horizontal ${currentSlide === index ? 'active-Horizontal' : ''}`}
        onClick={() => handleDotClick(index)}
      ></li>
    ));
  };

  return (
    <div className="horizontal-carousel-container-Horizontal">
      <div className="container-buttons-Horizontal">
        <button className="scroll-button-Horizontal scroll-left-Horizontal" onClick={scrollLeft}>
          {'<'}
        </button>
        <div className="container-dots-Horizontal">
          <ul className="dots-Horizontal">{renderDots()}</ul>
        </div>
        <button className="scroll-button-Horizontal scroll-right-Horizontal" onClick={scrollRight}>
          {'>'}
        </button>
      </div>
      <div className="horizontal-carousel-Horizontal" ref={carouselRef}>
        {slides.map((slide, index) => (
          <div className="carousel-item-Horizontal" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
