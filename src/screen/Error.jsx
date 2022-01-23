import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";


class ErrorComponent extends React.Component {
  render() {
    return (
      <Base>
        <h1>Page not found</h1>
      </Base>
    );
  }
}
export default ErrorComponent;
