import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import preveArrow from "../../svg/chevron-left-solid.svg";
import nextArrow from "../../svg/chevron-right-solid.svg";
const CustomPreveArrow = (props) => {
  const { className, onClick } = props;
  return (
      <img className={className} onClick={onClick} src={preveArrow} alt='background'/>
  );
}

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
      <img className={className} onClick={onClick} src={nextArrow} alt='background'/>
  );
}

export default function Slide({ children, speed=800, autoplay=false, className = '', slideToShow, infinite=true, dots=true, arrows=true}) {
    const [settings ] = React.useState(() => {
        const initSettings = {
            infinite: infinite,
            speed: speed,
            slidesToShow: slideToShow,
            slidesToScroll: 1,
            autoplay: autoplay,
            adaptiveHeight:false,
            className: className,
            dots: dots,
            arrows:arrows,
            prevArrow: <CustomPreveArrow />,
            nextArrow: <CustomNextArrow />,
            responsive: [
                {
                  breakpoint: 1360,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : slideToShow,
                    arrows:true
                  }
                },
                {
                  breakpoint: 1310,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : 3,
                    slidesToScroll: className.includes('background-image') ? 1 : 3,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : 3,
                    slidesToScroll: className.includes('background-image') ? 1 : 3,
                    arrows:false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : 2,
                    slidesToScroll: className.includes('background-image') ? 1 : 2,
                    arrows:false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : 1,
                    slidesToScroll: className.includes('background-image') ? 1 : 1,
                    arrows:false,
                    dots:false
                  }
                }
            ]
        };
        
        return initSettings;
    });
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}
