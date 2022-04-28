import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";


const CustomPreveArrow = (props) => {
    const { className, onClick,style } = props;
    return (
        <img src="/svg/prev-arrow.svg" ></img>
    );
}

const CustomNextArrow = (props) => {
    const { className, onClick,style } = props;
    return (
        <img src="/svg/next-arrow.svg" ></img>
    );
}

export default function Slide({ children, speed=800, autoplay=false, className = '', slideToShow, infinite=true, dots=true, arrows=false}) {
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
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: className.includes('background-image') ? 1 : slideToShow,
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
