import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Form, Row, Col, Nav } from 'react-bootstrap'

import NavigationComponent from '../component/navigation';
import FooterComponent from '../component/footer';

// const slider1 = [1, 2, 3, 4, 5, 6];

class ProductDetailsComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nav1: null,
         nav2: null,
         productSliderthumb: {
            centerMode: true,
            loop: false,
            centerPadding: "0px",
            vertical: true,
            verticalSwiping: true,
            // beforeChange: function (currentSlide, nextSlide) {
            //    console.log("before change", currentSlide, nextSlide);
            // },
            // afterChange: function (currentSlide) {
            //    console.log("after change", currentSlide);
            // }
         },
         productSliderBig: {
         }
      };
   }
   componentDidMount() {
      this.setState({
         nav1: this.slider1,
         nav2: this.slider2
      });
   }
   render() {
      return (
         <div>
            <NavigationComponent />
            <section className="homeBanner innerBanner innerBannerImage banner">
               <Container className="textWrapper text-center">
                  <div className="text">
                     <h3 className="smallTitle text-center">Home <FontAwesomeIcon icon={faArrowRight} /> About Us</h3>
                     <h2 className="title text-center">About Us</h2>
                  </div>
               </Container>
            </section>

            <section className="productDetails">
               <Container>
                  <Row>
                     <Col>
                        <div className="productSlider">
                           <Slider {...this.state.productSliderthumb}
                              asNavFor={this.state.nav1}
                              ref={slider => (this.slider2 = slider)}
                              slidesToShow={5}
                              swipeToSlide={true}
                              focusOnSelect={true}
                              className="productSliderthumb"
                           >
                              <img src="https://picsum.photos/id/1/100/100" />
                              <img src="https://picsum.photos/id/2/100/100" />
                              <img src="https://picsum.photos/id/3/100/100" />
                              <img src="https://picsum.photos/id/4/100/100" />
                              <img src="https://picsum.photos/id/5/100/100" />
                              <img src="https://picsum.photos/id/6/100/100" />
                           </Slider>
                           <Slider {...this.state.productSliderBig}
                              className="productSliderBig"
                              asNavFor={this.state.nav2}
                              ref={slider => (this.slider1 = slider)}
                           >
                              <div>
                                 <img src="https://picsum.photos/id/1/200/400" className="img-fluid w-100" />
                              </div>
                              <div>
                                 <img src="https://picsum.photos/id/2/200/400" className="img-fluid w-100" />
                              </div>
                              <div>
                                 <img src="https://picsum.photos/id/3/200/400" className="img-fluid w-100" />
                              </div>
                              <div>
                                 <img src="https://picsum.photos/id/4/200/400" className="img-fluid w-100" />
                              </div>
                              <div>
                                 <img src="https://picsum.photos/id/5/200/400" className="img-fluid w-100" />
                              </div>
                              <div>
                                 <img src="https://picsum.photos/id/6/200/400" className="img-fluid w-100" />
                              </div>
                           </Slider>

                        </div>
                     </Col>
                     <Col></Col>
                  </Row>
               </Container>
            </section>
            <FooterComponent />
         </div >
      )
   }
}

export default ProductDetailsComponent;