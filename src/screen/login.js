import React from "react";
import NavigationComponent from '../component/navigation';

import { Container, Form, Row, Col, Nav, Link } from 'react-bootstrap'


class LoginComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showMe: true,
      }
   }
   operation() {
      this.setState({
         showMe: !this.state.showMe
      });
   }
   render() {
      return (
         <div>

            <NavigationComponent />
            <section className="homeBanner innerBanner loginForm innerBannerImage bannerVectorImage banner">
               <Container>
                  {
                     this.state.showMe ?
                        <div div className="wrapper loginFormWrapper">
                           <h3 className="mb-4 text-center">Login</h3>
                           <Form>
                              <Row xs={2} md={4} lg={1}>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                       <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                 </Col>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicPassword">
                                       <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                 </Col>
                                 <Col className="text-center" xs={12}>
                                    <Form.Group className="form-group">
                                    <button className="btn lightGreenBtn" type="submit">Login</button>
                                    </Form.Group>
                                 </Col>
                                 <Col className="text-center" xs={12} md={12} lg={12}>
                                    <Form.Group className="form-group mb-0">
                                    <button className="links" type="button" onClick={() => this.operation()}>Create Account</button>
                                    </Form.Group>
                                 </Col>
                              </Row>
                           </Form>
                        </div> : <div className="wrapper signFormWrapper">
                           <h3 className="mb-4 text-center">Sign Up</h3>
                           <Form>
                              <Row xs={2} md={4} lg={2}>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                       <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                 </Col>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                       <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                 </Col>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                       <Form.Control type="text" placeholder="Mobile No." />
                                    </Form.Group>
                                 </Col>
                                 <Col>
                                    <Form.Group className="form-group" controlId="formBasicPassword">
                                       <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                 </Col>
                                 <Col className="text-center" xs={12} md={12} lg={12}>
                                    <Form.Group className="form-group">
                                       <button className="btn lightGreenBtn" type="submit">Sign Up</button>
                                    </Form.Group>
                                 </Col>
                                 <Col className="text-center" xs={12} md={12} lg={12}>
                                    <Form.Group className="form-group mb-0">
                                       <button className="links" type="button" onClick={() => this.operation()}>Login Account</button>
                                    </Form.Group>
                                 </Col>
                              </Row>
                           </Form>
                        </div>
                  }
               </Container>
            </section >
         </div >
      )
   }
}

export default LoginComponent;