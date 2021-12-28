import React from "react";
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import NavigationComponent from '../component/navigation';



import TrendingProductComponent from "../component/trendingProduct";
import FooterComponent from "../component/footer";

class AboutComponent extends React.Component {
   render() {
      return (
         <div>
            <NavigationComponent />
            {/* <section className="homeBanner pt-0"> */}

            <section className="homeBanner innerBanner innerBannerImage banner">
               <Container className="textWrapper text-center">
                  <div className="text">
                     <h3 className="smallTitle text-center">Home <FontAwesomeIcon icon={faArrowRight} /> About Us</h3>
                     <h2 className="title text-center">About Us</h2>
                  </div>
               </Container>
            </section>

            <section className="trendingProduct">
               <Container>
                  <h3 className="smallTitle text-center">Most Popular</h3>
                  <h2 className="title text-center">Trending Products</h2>
                  <Row>
                     {/* {ProductList.map(user => {
                        return (
                           <Col lg={4} className="text-center">                               */}
                     <TrendingProductComponent />
                     {/* </Col>
                           )
                        })} */}
                  </Row>
               </Container>
            </section>

            <FooterComponent />
         </div>
      )
   }
}

export default AboutComponent;