import React from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <section className="homeBanner bannerVectorImage banner pt-0">
            <img src="images/supermarket-paper-bag-full-healthy-food.png" alt="BannerImage" className="img-fluid bannerImages" />
            <Container className="textWrapper">
                <div className="text">
                    <h3 className="smallTitle">Welcome To Our Grocery Store</h3>
                    <h1 className="title">Shop Online For <br />Fresh Grocries</h1>
                    <h5 className="fw400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                    <ButtonGroup>
                        <button className="btn lightGreenBtn">Shop now</button>
                        <button className="btn GreenBtn">Read More</button>
                    </ButtonGroup>
                </div>
            </Container>
        </section>
    )
}

export default HomeBanner;
