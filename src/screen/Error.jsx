import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import NavigationComponent from "../component/Navigation/Navigation";

const ErrorComponent = () => {
  return (
    <>
      <NavigationComponent />
      <section className="homeBanner innerBanner innerBannerImage banner">
        <Container className="textWrapper text-center">
          <div className="text">
            <h2 className="title text-center">404</h2>
            <h3 className="smallTitle text-center">
              We Could Not Find Page You’re Looking
            </h3>
            <p>The link you’re trying to access is probably broken, or the page has been removed.</p>
            <Link to="/" className="btn GreenBtn">Back to home</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
export default ErrorComponent;
