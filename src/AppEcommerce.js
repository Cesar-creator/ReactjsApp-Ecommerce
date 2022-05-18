import React, {useState} from 'react'

// Images

import nextIcon from './images/icon-next.svg';
import previousIcon from './images/icon-previous.svg';
import productImageThumnail1 from './images/image-product-1-thumbnail.jpg';
import productImageThumnail2 from './images/image-product-2-thumbnail.jpg';
import productImageThumnail3 from './images/image-product-3-thumbnail.jpg';
import productImageThumnail4 from './images/image-product-4-thumbnail.jpg';
import chartIcon2 from './images/icon-cart-2.svg';

// components or context

import { Header } from './components/Header';
import useSlider from './hooks/useSlider';
import { ThemeContext, useContext } from "./context/useThemeContext";
import ModalProduct from './components/ModalProduct';


export const AppEcommerce = () => {

    const { sliderIndex, sliderdata, theme, setTheme, itemNumber, setItemNumber } = useContext(ThemeContext)
    const { handleNext, handlePrevious, handleHover } = useSlider();
    const [state,setState] = useState(0);
    console.log(theme)

    return (
        <div className="app__container">
            <Header />
            {theme && <ModalProduct />}
            <div className="app__sectionContent">
                <div className="app__sectionLeft">
                    <div className="slider-upperContainer">
                        <div className="slider-previous" >
                            <img src={previousIcon} alt="next-icon" onClick={handlePrevious} />
                        </div>
                        <div className="slide-img">
                            <img className="sliderImage" src={sliderdata[sliderIndex]} alt="slider-image" onClick={() => setTheme(true)} />
                        </div>
                        <div className="slider-next" >
                            <img src={nextIcon} alt="previous-icon" onClick={handleNext} />
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

                <div className="product-detail">
                    <div>
                        <h3 className="company-name">SNEAKER COMPANY</h3>
                        <h3 className="product-name">Fall Limited Edition Sneakers</h3>
                        <p className="product-info">
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.
                        </p>
                    </div>
                    <div className="price">
                        <div className="price-info">
                            <h3 >$125.00</h3>
                            <h4 className="discount">50%</h4>
                        </div>
                        <h4 className="old-price">$250.00</h4>
                    </div>
                    <div className="detail-bottom">
                        <div className="cart-container">
                            <button onClick={() => setState(() => {
                                if (state <= 0) {
                                    return 0
                                } else {
                                    return state - 1;
                                }
                            })}>-</button>
                            <p>{state}</p>
                            <button onClick={() => setState(state + 1)}>+</button>
                        </div>
                        <button className="add-cart" onClick={() => setItemNumber(itemNumber + state)}><img src={chartIcon2} alt="chat" /> Add to cart </button>
                    </div>
                </div>
                <div className={theme ? "app__overlay" : "hidden"}></div>

            </div>

            <hr />
        </div>
    )
}
