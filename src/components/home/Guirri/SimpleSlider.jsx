import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider initialSlide={1} {...settings}>
      <div className="bg-gray-800">
        <h3>1</h3>
      </div>
      <div className="bg-gray-800">
        <h3>2</h3>
      </div>
      <div className="bg-gray-800">
        <h3>3</h3>
      </div>
      <div className="bg-gray-800">
        <h3>4</h3>
      </div>
    </Slider>
  );
}