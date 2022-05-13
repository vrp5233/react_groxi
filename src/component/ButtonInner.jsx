import React from 'react';
import { Link } from "react-router-dom";


const ButtonInner = ({ linkUrl, titleText, colorChange }) => {
  return (
    <Link to={linkUrl} className={`btn ${colorChange}`} >
      {titleText}
    </Link>
  );
};

export default ButtonInner;
