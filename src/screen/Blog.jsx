import React from "react";

import { Container } from "react-bootstrap";
import Base from "../core/Base";

class BlogComponent extends React.Component {
  render() {
    return (
      <Base>
        <section className="homeBanner">
          <img
            src="images/supermarket-paper-bag-full-healthy-food.png"
            alt="BannerImage"
            className="img-fluid bannerImages"
          />
          <Container className="textWrapper">
            <div className="text">
              <h1 className="title">Blog</h1>
            </div>
          </Container>
        </section>
      </Base>
    );
  }
}

export default BlogComponent;
