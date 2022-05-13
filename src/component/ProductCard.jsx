import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarRating from "star-rating-react";
import { Col } from "react-bootstrap";
import Button from "./Button";
const ProductCard = ({ noOfCols, product }) => {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 10) + "..." : str;
  };

  return (
    <Col lg={noOfCols} className="text-center d-flex">
      <Link to="/product-details" className="w-100 d-flex">
        <div className="trendingProductCard">
          {product.products.hot_bookmark === "Hot" ? (
            <span className="hot">{product.products.hot_bookmark}</span>
          ) : null}
          <span className="heartIcon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div className="img">
            <img
              src={
                "http://localhost/groxi-api/public/products/images/" +
                product.products.product_images.document_name
              }
              alt="Beef Steak"
            />
          </div>
          <div className="text">
            <StarRating
              className="ratingStar"
              size={5}
              value={product.products.product_rating}
              onChange={function (val) {
                console.log(val);
              }}
            />
            {/* <h4 style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{product.name}</h4> */}
            <h4>{truncate(product.products.product_name)}</h4>
            <h6>
              <span className="discountPrice">{product.priceOff}</span>
              <span className="price">{product.products.product_price}</span>
            </h6>
            {/* <button className="btn GreenBtn">Add to cart</button> */}
            <Button linkUrl="" titleText="Add to cart" colorChange="GreenBtn" />
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProductCard;
