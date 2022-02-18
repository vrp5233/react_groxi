import React from "react";

import { Container, ButtonGroup, Row, Col } from 'react-bootstrap';

import SliderComponent from "./Slider";

const FooterComponent = () => {
   return (
      <>
         <section className="testimonial">
            <Container>
               <h3 className="smallTitle text-center">Testimonials</h3>
               <h2 className="title text-center">What Our Customers Saying</h2>
               <SliderComponent />
            </Container>
         </section>
      </>
   )
}
export default FooterComponent;