import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Tilt from "react-tilt";
// import "../../../assets/css/style.css";
// import Button from "../../../component/Button";
import "./Categories.css";
// import "../../../component/Button.css";

const Categories = () => {
    return (
        <section className="categories">
            <Container>
                <Row>
                    <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt
                            className="Tilt w-100"
                            options={{ max: 40, scale: 1, perspective: 500 }}
                        >
                            <div
                                className="text w-100 Tilt-inner"
                                style={{ backgroundColor: "#91ddd8" }}
                            >
                                <img src="images/evgitable-need.png" alt="Vegitables" />
                                <div className="textBox">
                                    <h3>
                                        Get Every <br />
                                        Vegetable <br /> You Need
                                    </h3>
                                    <Link to="/">Shop now</Link>
                                </div>
                            </div>
                        </Tilt>
                    </Col>
                    <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt
                            className="Tilt w-100"
                            options={{ max: 40, scale: 1, perspective: 500 }}
                        >
                            <div
                                className="text w-100"
                                style={{ backgroundColor: "#f88f1e" }}
                            >
                                <img src="images/beverages.png" alt="Beverages" />
                                <div className="textBox">
                                    <h3>
                                        We Have Best
                                        <br /> Beverages
                                        <br /> Collection
                                    </h3>
                                    <Link to="/">Shop now</Link>
                                </div>
                            </div>
                        </Tilt>
                    </Col>
                    <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt
                            className="Tilt w-100"
                            options={{ max: 40, scale: 1, perspective: 500 }}
                        >
                            <div
                                className="text w-100"
                                style={{ backgroundColor: "#a8d723" }}
                            >
                                <img src="images/health-products.png" alt="Health" />
                                <div className="textBox">
                                    <h3>
                                        Beauty
                                        <br /> And Health <br />
                                        Products
                                    </h3>
                                    <Link to="/">Shop now</Link>
                                </div>
                            </div>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Categories;
