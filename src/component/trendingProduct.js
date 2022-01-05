import React from "react";
import { Link } from "react-router-dom";

import ProductList from './productList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import StarRating from 'star-rating-react';
import { Col } from 'react-bootstrap'

// const currentURL = window.location.href;
class TrendingProductComponent extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         items: ProductList
      }

   }
   truncate(str) {
      return str.length > 10 ? str.substring(0, 10) + "..." : str;
   }

   render() {
      const currentURL = window.location.pathname;
      console.log(currentURL)
      return (
         <>

            {this.state.items.map((product, i) => {
               return (

                  <Col lg={currentURL === "/productDetails" ? 3 : 4} className="text-center d-flex" key={i}>
                     <Link to="/productDetails" className="w-100 d-flex">
                        <div className="trendingProductCard">
                           {product.tag === 'Hot' ? <span className="hot">{product.tag}</span> : null}
                           <span className="heartIcon"><FontAwesomeIcon icon={faHeart} /></span>
                           <div className="img">
                              <img src={product.image} alt="Beef Steak" />
                           </div>
                           <div className="text">
                              <StarRating
                                 className="ratingStar"
                                 size={5}
                                 value={product.rating}
                                 onChange={function (val) { console.log(val) }}
                              />
                              {/* <h4 style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{product.name}</h4> */}
                              <h4>{this.truncate(product.name)}</h4>
                              <h6><span className="discountPrice">{product.priceOff}</span> <span className="price">{product.price}</span></h6>
                              <button className="btn GreenBtn">Add to cart</button>
                           </div>
                        </div>
                     </Link>
                  </Col>
               )
            })}
         </>
      )
   }
}
export default TrendingProductComponent;


