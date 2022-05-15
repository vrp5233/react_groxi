import React from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import TrendingProductComponent from "../../../component/TrendingProduct"

const HomeBanner = () => {
    return (
        <section className="trendingProduct pt-0">
        <Container>
          <h3 className="smallTitle text-center">Most Popular</h3>
          <h2 className="title text-center">Trending Products</h2>
          <Row>
            <TrendingProductComponent noOfCols={4} />
          </Row>
        </Container>
      </section>
    );
};

export default HomeBanner;
