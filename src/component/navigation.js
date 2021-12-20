import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class NavigationComponent extends React.Component{
   render (){
      return (
         <header>
            <div className="container">
               <div className="logo">
                  <img src="images/logo.png" alt="" />
               </div>
               <nav>
                  <ul>
                     <li><FontAwesomeIcon icon="{faCoffee}" /></li>
                     <li>Home</li>
                     <li>About</li>
                     <li>Shop</li>
                     <li>Pages</li>
                     <li>Blog</li>
                     <li>Contact</li>
                  </ul>
               </nav>
            </div>
         </header>
      )
   }
}
export default NavigationComponent;