import React, { useState } from "react";
import StarRating from 'star-rating-react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

const sliders = [1, 2, 3, 4, 5, 6];
const sliderTesti = {
   dots: false,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 15000,
   infinite: true,
   margin: 30,
   loop: true,
   arrows: false,
   responsive: [
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
}
const SliderComponent = () => {
   return (
      <div id="testiSlider" className="testiSlider">
         <Slider {...sliderTesti}>
            {sliders.map((user, u) => {
               return (
                  <div className="box" key={u}>
                     <p>”Quisquam est, qui dolorem ipsum quia dolor sit
                        consectetur adipisci velit sed quia non numqua
                        eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem repudia
                        sint et molestiae”</p>
                     <StarRating
                        className="ratingStar"
                        size={5}
                        value={2}
                        // onChange={function (val) { console.log(val) }}
                     />
                     <h6>Alina Parker <span>Ceo, GTD</span></h6>
                  </div>
               )
            })}

         </Slider>
      </div>
   )
}

export default SliderComponent;