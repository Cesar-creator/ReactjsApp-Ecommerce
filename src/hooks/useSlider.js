import { ThemeContext,useContext } from "../context/useThemeContext";

const useSlider = () => {
  const { sliderIndex, setSliderIndex} = useContext(ThemeContext);

  const handleNext = () => {
    setSliderIndex(sliderIndex + 1);
  }

  const handlePrevious = () => {
    setSliderIndex(sliderIndex - 1);
  }

  const handleHover = (index) => {
    setSliderIndex(index);
  }

  return {
    handleNext,
    handlePrevious,
    handleHover
  }

}

export default useSlider;