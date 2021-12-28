import React from "react";
import { Link } from "react-router-dom";

import Tilt from 'react-tilt'
import { Container, ButtonGroup, Row, Col } from 'react-bootstrap'


import NavigationComponent from '../component/navigation';
import FooterComponent from '../component/footer';
import TrendingProductComponent from "../component/trendingProduct";
// import ProductList from "../component/productList";


// const ProductList = [1,2];
class HomeComponent extends React.Component {


   render() {
      return (
         <div>
            <NavigationComponent />

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

            <section className="categories">
               <Container>
                  <Row>
                     <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt className="Tilt w-100" options={{ max: 40, scale: 1, perspective: 500, }} >
                           <div className="text w-100 Tilt-inner" style={{ backgroundColor: "#91ddd8" }} >
                              <img src="images/evgitable-need.png" alt="Vegitables" />
                              <div className="textBox">
                                 <h3>Get Every  <br />Vegetable <br /> You Need</h3>
                                 <Link to="/">Shop now</Link>
                              </div>
                           </div>
                        </Tilt>
                     </Col>
                     <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt className="Tilt w-100" options={{ max: 40, scale: 1, perspective: 500, }} >
                           <div className="text w-100" style={{ backgroundColor: "#f88f1e" }}>
                              <img src="images/beverages.png" alt="Beverages" />
                              <div className="textBox">
                                 <h3>We Have Best<br /> Beverages<br /> Collection</h3>
                                 <Link to="/">Shop now</Link>
                              </div>
                           </div>
                        </Tilt>
                     </Col>
                     <Col xs={6} md={4} className="d-flex text-white">
                        <Tilt className="Tilt w-100" options={{ max: 40, scale: 1, perspective: 500, }} >
                           <div className="text w-100" style={{ backgroundColor: "#a8d723" }}>
                              <img src="images/health-products.png" alt="Health" />
                              <div className="textBox">
                                 <h3>Beauty<br /> And Health <br />Products</h3>
                                 <Link to="/">Shop now</Link>
                              </div>
                           </div>
                        </Tilt>
                     </Col>
                  </Row>
               </Container>
            </section>

            <section className="trendingProduct pt-0">
               <Container>
                  <h3 className="smallTitle text-center">Most Popular</h3>
                  <h2 className="title text-center">Trending Products</h2>
                  <Row>
                     <TrendingProductComponent />
                  </Row>
               </Container>
            </section>

            <section className="homeBanner homeAboutSection banner p-0">
               <img src="images/flat-lay-with-paper-bag-vegetables-fruits-white.jpg" alt="BannerImage" className="img-fluid bannerImages" />
               <Container className="textWrapper">
                  <Row className="justify-content-end">
                     <Col lg={7}>
                        <div className="textWrap">
                           <div className="text">
                              <h3 className="smallTitle">Welcome To Our Grocery Store</h3>
                              <h1 className="title">Shop Online For <br />Fresh Grocries</h1>
                              <h5 className="fw400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                              <ButtonGroup>
                                 <button className="btn lightGreenBtn">Shop now</button>
                                 <button className="btn GreenBtn">Read More</button>
                              </ButtonGroup>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </section>


            <section className="trendingProduct bannerVectorImage banner featuredProducts">
               <Container>
                  <h3 className="smallTitle text-center">Best Seller</h3>
                  <h2 className="title text-center mb-4">Featured Products</h2>
                  <ul className="featuredListBtn ">
                     <li><button className="text">All</button></li>
                     <li><button className="text">Food</button></li>
                     <li><button className="text">Fruits</button></li>
                     <li><button className="text">Health</button></li>
                     <li><button className="text">Meat</button></li>
                     <li><button className="text">Dairy</button></li>
                  </ul>
                  <Row>
                     <TrendingProductComponent />
                  </Row>
               </Container>
            </section>

            <FooterComponent />

         </div>
      )
   }
}

export default HomeComponent;