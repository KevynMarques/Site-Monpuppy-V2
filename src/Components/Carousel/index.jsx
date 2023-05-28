import React from 'react';
import "./style.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pitbull from "../Pitbull/index"
import PA from "../PastorAlemao/index"
import York from "../Yorkshire/index"
import Spitz from "../Spitz/index"
import Golden from "../Golden/index"
import ButtonFixed from "./ButtonFixed/index"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MyCarousel = () => {
  const handleSlideChange = (event) => {
  };

  const renderCustomPrevArrow = () => (
    <button className="my-custom-prev-arrow" onClick={() => handleSlideChange('prev')}>
      {"<"}
    </button>
  );

  const renderCustomNextArrow = () => (
    <button className="my-custom-next-arrow" onClick={() => handleSlideChange('next')}>
      {">"}
    </button> 

  );

  return (
    <div>
      <div className="overlay-component">
          <ButtonFixed />
      </div>
      <AliceCarousel
        buttonsDisabled
        dotsDisabled
        items={[ 
          <Pitbull />,
          <Golden />,
          <Spitz />, 
          <PA />, 
          <York />, 
        ]}
        renderPrevButton={renderCustomPrevArrow}
        renderNextButton={renderCustomNextArrow}
        mouseDragEnabled
        swipeDelta={20}
        vertical 
        style={{ marginTop: '890px', marginLeft: '1620px' }}
      />
    </div>
  );
};

export default MyCarousel;
