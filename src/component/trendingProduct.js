import React from "react";

import ProductList from './productList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import StarRating from 'star-rating-react';
import { Container, ButtonGroup, Row, Col } from 'react-bootstrap'
class TrendingProductComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: ProductList
      }
      console.log(ProductList);
   }
   render() {
      console.log("in")
      console.log(this.state.items);
      return (
         <>
         
            {this.state.items.map((product, i) => {
               return (

                  <Col lg={4} className="text-center" key={i}>
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
                           <h4>{product.name}</h4>
                           <h6><span className="discountPrice">{product.priceOff}</span> <span className="price">{product.price}</span></h6>
                           <button className="btn GreenBtn">Add to cart</button>
                        </div>
                     </div>
                  </Col>
               )
            })}
         </>
      )
   }
}
export default TrendingProductComponent;


