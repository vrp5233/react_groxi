import React from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Base from "../core/Base";

class BlogComponent extends React.Component {
  render() {
    return (
      <Base>
        <section className="homeBanner innerBanner innerBannerImage banner">
          <Container className="textWrapper text-center">
            <div className="text">
              <h3 className="smallTitle text-center">
                Home <FontAwesomeIcon icon={faArrowRight} /> Blog
              </h3>
              <h2 className="title text-center">Blog</h2>
            </div>
          </Container>
        </section>
      </Base>
    );
  }
}

export default BlogComponent;
