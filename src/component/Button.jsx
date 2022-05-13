// import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/style.css";
import './Button.css'




// className={`btn ${colorChange}`}
const Button = ({ linkUrl, titleText, colorChange }) => {

   return (
         <Link
            to={linkUrl}
            className={`btn ${colorChange}`}
         >
            {titleText}
         </Link>
   );
};

export default Button;
