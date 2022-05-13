import React from "react";
import { Row, Container, Col, ButtonGroup } from "react-bootstrap";
import Button from "../../../component/Button";
import './Welcome.css'

const HomeBanner = () => {
    return (
        <section className="homeBanner homeAboutSection banner py-0">
            <img
                src="images/flat-lay-with-paper-bag-vegetables-fruits-white.jpg"
                alt="BannerImage"
                className="img-fluid bannerImages"
            />
            <Container className="textWrapper">
                <Row className="justify-content-end">
                    <Col lg={7}>
                        <div className="textWrap">
                            <div className="text">
                                <h3 className="smallTitle">About Us</h3>
                                <h1 className="title">
                                    We Provide You The <br />Best Experience
                                </h1>
                                <p>Neque porro quisquam est aui dolorem iesum ruia dolor
                                    sit amet, consectetur, adipisci velit, sed quia non numua
                                    eius modi tempora incidunt ut labore et dolore magnam
                                    volutatem exercitationem ullam.</p>
                                <p>Quis autem vel eum iure reprehenderit aui in ea voluptae
                                    velit esse quam nihil molestiae consequatur, vel illum rui
                                    dolorem eum fugiat quo voluptas.</p>
                                <Button
                                    linkUrl="/"
                                    titleText="Read More"
                                    colorChange="lightGreenBtn" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeBanner;
