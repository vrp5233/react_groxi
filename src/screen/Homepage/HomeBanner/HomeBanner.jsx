import React from 'react';
import { Link } from "react-router-dom";
import { ButtonGroup, Container } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <section className="homeBanner bannerVectorImage banner py-0">
            <img src="images/supermarket-paper-bag-full-healthy-food.png" alt="BannerImage" className="img-fluid bannerImages" />
            <Container className="textWrapper">
                <div className="text">
                    <h3 className="smallTitle">Welcome To Our Grocery Store</h3>
                    <h1 className="title">Shop Online For <br />Fresh Grocries</h1>
                    <h5 className="fw400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                    <ButtonGroup>
                        <Link to="/shop" className="btn lightGreenBtn">Shop now</Link>
                        <Link to="" className="btn GreenBtn">Read More</Link>
                    </ButtonGroup>
                </div>
            </Container>
        </section>
    )
}

export default HomeBanner;
