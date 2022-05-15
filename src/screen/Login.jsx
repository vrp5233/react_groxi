import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
// import config from "../config/config";
// import { signinAPI } from "../core/services/APIservice";

import Base from "../core/Base";

const LoginComponent = () => {
  const [showMe, setshowMe] = useState(true);
  const operation = () => {
    setshowMe(!showMe);
  };

  return (
    <Base>
      <section className="homeBanner innerBanner loginForm innerBannerImage banner">
        <Container>
          {showMe ? (
            <div div className="wrapper loginFormWrapper">
              <h3 className="mb-4 text-center">Login</h3>
              <Form>
                <Row xs={1}>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      {/* <span className="formErrormsg">{formErrors.email}</span> */}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        // value={formValues.password}
                        // onChange={handleChange}
                      />
                      {/* <span className="formErrormsg">
                        {formErrors.password}
                      </span> */}
                    </Form.Group>
                  </Col>
                  <Col className="text-center" xs={12}>
                    <Form.Group className="form-group text-center mb-2">
                      <button className="btn lightGreenBtn" type="submit">
                        Login
                      </button>
                    </Form.Group>
                  </Col>
                  <Col className="text-center" xs={12} md={12} lg={12}>
                    <Form.Group className="form-group mb-0">
                      <button
                        className="links"
                        type="button"
                        onClick={() => operation()}
                      >
                        Create Account
                      </button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          ) : (
            <div className="wrapper signFormWrapper">
              <h3 className="mb-4 text-center">Sign Up</h3>
              <Form>
                <Row xs={1} sm={2}>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="userName"
                        // value={formRegValues.userName}
                        // onChange={handleRegChange}
                      />
                      <span className="formErrormsg">
                        {/* {formRegErrors.userName} */}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="useremail"
                        // value={formRegValues.useremail}
                        // onChange={handleRegChange}
                      />
                      <span className="formErrormsg">
                        {/* {formRegErrors.email} */}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Mobile No."
                        name="userMobile"
                        // value={formRegValues.userMobile}
                        // onChange={handleRegChange}
                      />
                      <span className="formErrormsg">
                        {/* {formRegErrors.userMobile} */}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="userpassword"
                        // value={formRegValues.userpassword}
                        // onChange={handleRegChange}
                      />
                      <span className="formErrormsg">
                        {/* {formRegErrors.password} */}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col className="text-center" xs={12} md={12} lg={12}>
                    <Form.Group className="form-group text-center mb-2">
                      <button className="btn lightGreenBtn" type="submit">
                        Sign Up
                      </button>
                    </Form.Group>
                  </Col>
                  <Col className="text-center" xs={12} md={12} lg={12}>
                    <Form.Group className="form-group mb-0">
                      <button
                        className="links"
                        type="button"
                        onClick={() => operation()}
                      >
                        Login Account
                      </button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          )}
        </Container>
      </section>
    </Base>
  );
};
export default LoginComponent;
