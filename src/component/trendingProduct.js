import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import StarRating from 'star-rating-react';
class TrendingProductComponent extends React.Component {
   render() {
      return (
         <div className="trendingProductCard">
            <span className="hot">Hot</span>
            <span className="heartIcon"><FontAwesomeIcon icon={faHeart} /></span>
            <div className="img">
               <img src="images/Beef-Steak.png" alt="Beef Steak" />
            </div>
            <div className="text">
               <StarRating
               className="ratingStar"
                  size={5}
                  value={2}
                  onChange={function (val) { console.log(val) }}
               />
               <h4>Beef Steak</h4>
               <h6><span className="discountPrice">$15</span> <span className="price">$15</span></h6>
               <button className="btn GreenBtn">Add to cart</button>
            </div>
         </div>
      )
   }
}
export default TrendingProductComponent;