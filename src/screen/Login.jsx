import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import config from "../config/config";
import { signinAPI } from "../core/services/APIservice";

import Base from "../core/Base";

const LoginComponent = () => {
  const [showMe, setshowMe] = useState(true);
  const operation = () => {
    setshowMe(!showMe);
  };
  const initialValues = { email: "", password: "" };
  const initialRegValues = { useremail: "", userpassword: "", userName: "", userMobile: "", };
  const [formValues, setFormValues] = useState(initialValues);
  const [formRegValues, setRegFormValues] = useState(initialRegValues);

  const [formErrors, setFormErrors] = useState({});
  const [formRegErrors, setRegFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegFormValues({ ...formRegValues, [name]: value });
    console.log(formRegValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegFormErrors(validate(formRegValues));
    setRegister(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {
    if (Object.keys(formRegErrors).length === 0 && register) {
      console.log(formRegValues);
    }
  }, [formRegErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.userMobile) {
      errors.userMobile = "Mobile No. is required!";
    }
    if (!values.userName) {
      errors.userName = "Name is required!";
    }
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <Base>
      <section className="homeBanner innerBanner loginForm innerBannerImage banner">
        <Container>
          {showMe ? (
            <div div className="wrapper loginFormWrapper">
              <h3 className="mb-4 text-center">Login</h3>
              <Form onSubmit={handleSubmit}>
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
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <span className="formErrormsg">{formErrors.email}</span>
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
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      <span className="formErrormsg">{formErrors.password}</span>
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
              <Form onSubmit={handleRegister}>
                <Row xs={1} sm={2}>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control type="text" placeholder="Name"
                        name="userName"
                        value={formRegValues.userName}
                        onChange={handleRegChange} />
                      <span className="formErrormsg">{formRegErrors.userName}</span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control type="email" placeholder="Enter email"
                        name="useremail"
                        value={formRegValues.useremail}
                        onChange={handleRegChange} />
                      <span className="formErrormsg">{formRegErrors.email}</span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Control type="text" placeholder="Mobile No."
                        name="userMobile"
                        value={formRegValues.userMobile}
                        onChange={handleRegChange} />
                      <span className="formErrormsg">{formRegErrors.userMobile}</span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="password" placeholder="Password"
                        name="userpassword"
                        value={formRegValues.userpassword}
                        onChange={handleRegChange} />
                      <span className="formErrormsg">{formRegErrors.password}</span>
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
// class LoginComponent extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     showMe: true,
//   };
// }
// operation() {
//   this.setState({
//     showMe: !this.state.showMe,
//   });
// }
// }

export default LoginComponent;
