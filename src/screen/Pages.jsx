import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Base from "../core/Base";
import InnerHeader from "../component/InnerHeader/InnerHeader";

const PagesComponent = () => {
  return (
    <Base>
      <InnerHeader title="Pages" />
    </Base>
  );
};

export default PagesComponent;
