import { useState } from "react";
import Slider from "react-slick";
import "./slider.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const images = [
  require("../assets/slider_image1.jpg"),
  require("../assets/slider_image2.jpg"),
  require("../assets/slider_image3.jpg"),
  require("../assets/slider_image4.jpg"),
  require("../assets/slider_image5.jpg"),
];
const carouselHeader = [
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
];

const carouselText = [
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

const SliderComp = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    SliderendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <>
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={index}
              >
                <img src={img} alt="" />
              </div>
              <h2
                className={
                  index === slideIndex ? " slide-active" : "slide hidden"
                }
              >
                {carouselHeader[index]}
              </h2>
              <p
                // style={{ height: "100px !important" }}
                className={
                  index === slideIndex ? " slide-active" : "slide hidden"
                }
              >
                {carouselText[index]}
              </p>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
