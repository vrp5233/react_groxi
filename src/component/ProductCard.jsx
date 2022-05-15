import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import StarRating from 'star-rating-react';
import { Col } from 'react-bootstrap'
const ProductCard = ({ noOfCols, product, img }) => {
    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 10) + "..." : str;
    }
    return (
        <Col lg={noOfCols} className="text-center d-flex">
            <Link to="/product-details" className="w-100 d-flex">
                <div className="trendingProductCard">
                    {product.hot_bookmark === 'Hot' ? <span className="hot">{product.hot_bookmark}</span> : null}
                    <span className="heartIcon"><FontAwesomeIcon icon={faHeart} /></span>
                    <div className="img">
                        <img src={img} alt="Beef Steak" />
                    </div>
                    <div className="text">
                        <StarRating
                            className="ratingStar"
                            size={5}
                            value={parseInt(product.product_rating)}
                            onChange={function (val) { console.log(val) }}
                        />
                        {/* <h4 style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{product.name}</h4> */}
                        <h4>{truncate(product.product_name)}</h4>
                        <h6><span className="discountPrice">20</span> <span className="price">{product.product_price}</span></h6>
                        <button className="btn GreenBtn">Add to cart</button>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default ProductCard;
