import React from "react";
import NavigationComponent from '../component/navigation';

import { Container } from 'react-bootstrap'


class ShopComponent extends React.Component {
   render() {
      return (
         <div>
         <NavigationComponent />
         <section className="homeBanner">
            <img src="images/supermarket-paper-bag-full-healthy-food.png" alt="BannerImage" className="img-fluid bannerImages" />
            <Container className="textWrapper">
               <div className="text">
                  <h1 className="title">Shop</h1>
               </div>
            </Container>
         </section>
      </div>
      )
   }
}

export default ShopComponent;