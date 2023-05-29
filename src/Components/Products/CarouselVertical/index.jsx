import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const VerticalCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollUp = () => {
    carouselRef.current.scrollTop -= 0.95 * window.innerHeight;
  };

  const scrollDown = () => {
    carouselRef.current.scrollTop += 0.95 * window.innerHeight;
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    carouselRef.current.scrollTop = index * (0.95 * window.innerHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = carouselRef.current.scrollTop;
      const index = Math.round(offset / (0.95 * window.innerHeight));
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

  const renderDots = () => {
    return [0, 1, 2].map((index) => (
      <li
        key={index}
        className={`dot ${currentSlide === index ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
      ></li>
    ));
  };

  return (
    <div className="vertical-carousel-container">
      <div className="Container-buttons">
        <button className="scroll-button scroll-up" onClick={scrollUp}>
          {"^"}
        </button>
        <div className="Container-dots">
          <ul className="dots">{renderDots()}</ul>
        </div>
        <button className="scroll-button scroll-down" onClick={scrollDown}>
          {"⌄"}
        </button>
      </div>
      <div className="vertical-carousel" ref={carouselRef}>
        <div className="carousel-item">
          <h2>Slide 1</h2>
          <p>Conteúdo do Slide 1</p>
        </div>
        <div className="carousel-item">
          <h2>Slide 2</h2>
          <p>Conteúdo do Slide 2</p>
        </div>
        <div className="carousel-item">
          <h2>Slide 3</h2>
          <p>Conteúdo do Slide 3</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
