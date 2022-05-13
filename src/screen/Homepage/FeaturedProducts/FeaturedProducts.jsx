import React from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
// import TrendingProductComponent from "../../../component/TrendingProduct";
import "./FeaturedProducts.css";

const HomeBanner = () => {
    return (
        <section className="trendingProduct bannerVectorImage banner featuredProducts">
            <Container>
                <h3 className="smallTitle text-center">Best Seller</h3>
                <h2 className="title text-center mb-4">Featured Products</h2>
                <ul className="featuredListBtn ">
                    <li>
                        <button className="text">All</button>
                    </li>
                    <li>
                        <button className="text">Food</button>
                    </li>
                    <li>
                        <button className="text">Fruits</button>
                    </li>
                    <li>
                        <button className="text">Health</button>
                    </li>
                    <li>
                        <button className="text">Meat</button>
                    </li>
                    <li>
                        <button className="text">Dairy</button>
                    </li>
                </ul>
                <Row>
                    {/* <TrendingProductComponent noOfCols={4} /> */}
                </Row>
            </Container>
        </section>
    );
};

export default HomeBanner;
