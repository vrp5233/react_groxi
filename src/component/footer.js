import React from "react";
import NavigationComponent from '../component/navigation';

import { Container, ButtonGroup, Row, Col } from 'react-bootstrap';

import SliderComponent from "./slider";

class FooterComponent extends React.Component {
   render() {
      return (
         <div>
            <section className="testimonial">
               <Container>
                  <h3 className="smallTitle text-center">Testimonials</h3>
                  <h2 className="title text-center">What Our Customers Saying</h2>
                  <SliderComponent />
               </Container>
            </section>
         </div>
      )
   }
}
export default FooterComponent;