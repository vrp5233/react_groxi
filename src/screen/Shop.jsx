import React from "react";
import { Container } from "react-bootstrap";
import Base from "../core/Base";
const ShopComponent = () => {
  return (
    <Base>
      <section className="homeBanner">
        <img
          src="images/supermarket-paper-bag-full-healthy-food.png"
          alt="BannerImage"
          className="img-fluid bannerImages"
        />
        <Container className="textWrapper">
          <div className="text">
            <h1 className="title">Shop</h1>
          </div>
        </Container>
      </section>
    </Base>
  );
};

export default ShopComponent;
