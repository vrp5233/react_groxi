import React from "react";
import NavigationComponent from '../component/navigation';
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class HomeComponent extends React.Component {
   render() {
      return (
         <div>
            <NavigationComponent />
            <Container>
               <Row>
                  <Col xs={2} md={4} lg={6}><img src="images/supermarket-paper-bag-full-healthy-food.png" alt="" className="img-fluid" /></Col>
                  <Col xs={2} md={4} lg={6}><img src="images/supermarket-paper-bag-full-healthy-food.png" alt="" className="img-fluid" /></Col>
               </Row>
            </Container>
         </div>
      )
   }
}

export default HomeComponent;