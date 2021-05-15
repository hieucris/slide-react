import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./style.css";

SlideList.propTypes = {
  slideList: PropTypes.array,
};

SlideList.defaultProps = {
  slideList: [],
};

function SlideList(props) {
  const { slideList } = props;
  const [current, setCurrent] = useState(0);
  const length = slideList.length;

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slideList) || slideList.length <= 0) {
    return null;
  }
  return (
    <section className="wrapper">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlider} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlider} />
      {slideList.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img className="img_slider" src={slide.images} alt="" />
          )}
        </div>
      ))}
    </section>
  );
}

export default SlideList;
