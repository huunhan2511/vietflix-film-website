import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import preveArrow from "../../../svg/chevron-left-solid.svg";
import nextArrow from "../../../svg/chevron-right-solid.svg";
const CustomPreveArrow = (props) => {
  const { className, onClick } = props;
  return (
      <img className={className} onClick={onClick} src={preveArrow} />
  );
}

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
      <img className={className} onClick={onClick} src={nextArrow} />
  );
}

export default function SlideCenter({children,slidesToShow}) {
    const [settings ] = React.useState(() => {
        const initSettings = {
            className:"center",
            centerMode: true,
            slidesToShow: slidesToShow,
            infinite: true,
            centerPadding: "5%",
            slidesToScroll: 1,
            arrows:true,
            dots:false,
            prevArrow: <CustomPreveArrow />,
            nextArrow: <CustomNextArrow />,

            responsive: [
                {
                  breakpoint: 1360  ,
                  settings: {
                    slidesToShow: slidesToShow,
                    centerPadding: "0%",
                    slidesToScroll: 1,
                    
                  }
                },
                {
                  breakpoint: 1310,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots :true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,  
                    arrows:false,
                    dots :true
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
    );
}
