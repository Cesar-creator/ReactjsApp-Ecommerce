import React, { useState, useEffect } from 'react';
import { ThemeContext, useContext, SliderContext } from '../context/useThemeContext';
import useSlider from '../hooks/useSlider';
import nextIcon from '../images/icon-next.svg';
import previousIcon from '../images/icon-previous.svg';
import closeIcon from '../images/icon-close.svg';
import productImageThumnail1 from '../images/image-product-1-thumbnail.jpg';
import productImageThumnail2 from '../images/image-product-2-thumbnail.jpg';
import productImageThumnail3 from '../images/image-product-3-thumbnail.jpg';
import productImageThumnail4 from '../images/image-product-4-thumbnail.jpg';
const ModalProduct = () => {
  const { handleNext, handlePrevious, handleHover } = useSlider();
  const { setTheme, sliderdata, sliderIndex } = useContext(ThemeContext);

  return (
    <div className="modal-wrapper" >
      <div className="sliderM">
        <img src={closeIcon} alt="closeIcon" className="close-modal" onClick={() => setTheme(false)} />
        <div className="slider-upperContainer">
          <div className="slider-previous" onClick={handlePrevious}>
            <img className="nextIcon" src={previousIcon} alt="next-icon" />
          </div>
          <div className="slide-img">
            <img className="sliderImage" src={sliderdata[sliderIndex]} alt="slider-image" onClick={() => setTheme(true)} />
          </div>
          <div className="slider-next" onClick={handleNext}>
            <img className="previousIcon" src={nextIcon} alt="previous-icon" />
          </div>
        </div>
        <div className="slider-bottomContainer">
          <div className={`${sliderIndex === 0 ? "opacity" : ""}`} onMouseOver={() => handleHover(0)}>
            <img src={productImageThumnail1} />
          </div>
          <div className={`${sliderIndex === 1 ? "opacity" : ""}`} onMouseOver={() => handleHover(1)}>
            <img src={productImageThumnail2} />
          </div>
          <div className={`${sliderIndex === 2 ? "opacity" : ""}`} onMouseOver={() => handleHover(2)}>
            <img src={productImageThumnail3} />
          </div>
          <div className={`${sliderIndex === 3 ? "opacity" : ""}`} onMouseOver={() => handleHover(3)}>
            <img src={productImageThumnail4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProduct
