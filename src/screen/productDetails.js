import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import StarRating from 'star-rating-react';
import ReactImageZoom from 'react-image-zoom';

import NavigationComponent from '../component/navigation';
import FooterComponent from '../component/footer';
import TrendingProductComponent from "../component/trendingProduct";

// const slider1 = [1, 2, 3, 4, 5, 6];

// const props = { width: 485, height: 350, zoomWidth: 485, zoomPosition: "original", img: "https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" };
class ProductDetailsComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nav1: null,
         nav2: null,
         productSliderthumb: {
            centerMode: true,
            loop: true,
            centerPadding: "0px",
            vertical: true,
            verticalSwiping: false,
         },
         productSliderBig: {
         },
         count: 1,
         props: { width: 485, height: 350, zoomWidth: 485, zoomPosition: "original", img: "https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" },
      };
   }
   componentDidMount() {
      this.setState({
         nav1: this.slider1,
         nav2: this.slider2
      });
   }
   getCount(c) {
      const clicked = this.state.clicked
      if (c === 1) {
         this.setState({ count: this.state.count + 1, clicked: true });
      } else {
         this.setState({ count: this.state.count - 1 })
      }
   }
   render() {

      return (
         <div>
            <NavigationComponent />

            <section className="homeBanner innerBanner innerBannerImage banner">
               <Container className="textWrapper text-center">
                  <div className="text">
                     <h3 className="smallTitle text-center">Home <FontAwesomeIcon icon={faArrowRight} /> Product Detail</h3>
                     <h2 className="title text-center">Product Detail</h2>
                  </div>
               </Container>
            </section>


            <section className="productDetails pb-0">
               <Container>
                  <Row>
                     <Col lg={7}>
                        <div className="productSlider">
                           <Slider {...this.state.productSliderthumb}
                              asNavFor={this.state.nav1}
                              ref={slider => (this.slider2 = slider)}
                              slidesToShow={5}
                              swipeToSlide={true}
                              focusOnSelect={true}
                              className="productSliderthumb"
                           >
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                              <img src="https://w7.pngwing.com/pngs/285/672/png-transparent-hotel-hotel-dishes-roumo-ti-hua-food-recipe-cuisine.png" />
                           </Slider>
                           <Slider {...this.state.productSliderBig}
                              className="productSliderBig"
                              asNavFor={this.state.nav2}
                              ref={slider => (this.slider1 = slider)}
                           >
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                              <div className="bigSliderImages">
                                 <ReactImageZoom {...this.state.props} />
                              </div>
                           </Slider>

                        </div>
                     </Col>
                     <Col lg={5}>
                        <div className="text">
                           <h2 className="fw600">Fresh Strawberries</h2>
                           <StarRating
                              className="ratingStar"
                              size={5}
                              value={3}
                              onChange={function (val) { console.log(val) }}
                           />
                           <h6 className="fw600 barlow">
                              <span className="discountPrice">$30</span> <span className="price">$20</span>
                           </h6>
                           <div className="counterBtnWrappwer">
                              <div className="counterButton">
                                 <button onClick={this.getCount.bind(this, 0)}> - </button>
                                 <span className="countNumber">{this.state.count}</span>
                                 <button onClick={this.getCount.bind(this, 1)}> + </button>
                              </div>
                              <button className="btn GreenBtn">Add to cart</button>
                           </div>
                           <h5 className="fw500 jost">Overview:</h5>
                           <p>Neque porro quisquam est aui dolorem iesum ruia do it amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.</p>
                           <h5 className="fw500 jost d-flex">Share:
                              <ul className="socialIcons">
                                 <li><Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                 <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                 <li><Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                 <li><Link to="/"><FontAwesomeIcon icon={faPinterest} /></Link></li>
                                 <li><Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                              </ul>
                           </h5>
                        </div>
                     </Col>
                     <Col lg={12}>
                        <div className="tabs">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                              <Nav variant="pills" className="flex-column">
                                 <Nav.Item>
                                    <Nav.Link eventKey="first">Description</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="second">Additional Information</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="three">Reviews</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                              <Tab.Content>
                                 <Tab.Pane eventKey="first">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum pariatur sint error sapiente odit veniam accusamus doloribus quis quia ratione earum neque eius, quos beatae alias animi quas perspiciatis! Dignissimos.</p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="second">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum pariatur sint error sapiente odit veniam accusamus doloribus quis quia ratione earum neque eius, quos beatae alias animi quas perspiciatis! Dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium. Optio praesentium nostrum aut quae!</p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="three">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum pariatur sint error sapiente odit veniam accusamus doloribus quis quia ratione earum neque eius, quos beatae alias animi quas perspiciatis! Dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus autem doloremque sed ipsum cupiditate. Minima error eos saepe dolor nam.</p>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>
                     </Col>
                     <Col lg={12}>
                        <h2 className="title">Related Products</h2>
                        <div className="realatedProductsWrap">
                           <Row>
                              <TrendingProductComponent noOfCols={3} />
                           </Row>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </section>
            <FooterComponent />
         </div >
      )
   }
}

export default ProductDetailsComponent;