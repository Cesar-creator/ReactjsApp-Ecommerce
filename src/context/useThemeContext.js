import { createContext, useState, useContext, useEffect } from "react";

import productImage1 from '../images/image-product-1.jpg';
import productImage2 from '../images/image-product-2.jpg';
import productImage3 from '../images/image-product-3.jpg';
import productImage4 from '../images/image-product-4.jpg';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(false);
  const [sideBarTheme, setSideBarTheme] = useState(false);
  const [itemNumber, setItemNumber] = useState(0);

  // Context for Slider

  const [sliderIndex, setSliderIndex] = useState(0);

  const sliderdata = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
  ];

  const showSlides = () => {
    if (sliderIndex > 3) { setSliderIndex(0) }
    if (sliderIndex < 0) { setSliderIndex(3) }
  };

  useEffect(() => {
    showSlides();
  }, [sliderIndex]);

  const data = {
    theme,
    setTheme,
    sideBarTheme,
    setSideBarTheme,
    sliderdata,
    sliderIndex,
    setSliderIndex,
    itemNumber,
    setItemNumber
  };


  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeContextProvider,
  useContext
}
