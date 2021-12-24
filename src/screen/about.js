import React from "react";
import NavigationComponent from '../component/navigation';

import { Container, Row } from 'react-bootstrap'


import TrendingProductComponent from "../component/trendingProduct";


class AboutComponent extends React.Component {
   render() {
      return (
         <div>
            <NavigationComponent />
            <section className="homeBanner">
               <img src="images/supermarket-paper-bag-full-healthy-food.png" alt="BannerImage" className="img-fluid bannerImages" />
               <Container className="textWrapper">
                  <div className="text">
                     <h1 className="title">About</h1>
                  </div>
               </Container>
            </section>

            <section className="trendingProduct pt-0">
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
         </div>
      )
   }
}

export default AboutComponent;