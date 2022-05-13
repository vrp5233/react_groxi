import React from 'react'
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../../screen/Homepage/HomeBanner/HomeBanner.css'
import './InnerHeader.css'

const InnerHeader = ({ title }) => {
   return (
      <section className="homeBanner innerBanner innerBannerImage banner">
         <Container className="textWrapper text-center">
            <div className="text">
               <h3 className="smallTitle text-center">
                  Home <FontAwesomeIcon icon={faArrowRight} /> {title}
               </h3>
               <h2 className="title text-center">{title}</h2>
            </div>
         </Container>
      </section>
   )
}

export default InnerHeader