import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-4 footer-logo">
                            {/* <img className="logo" src="" alt="" />  */}
                            ★Clͥasͣsͫic Culture★
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-white">Brand</h5>
                            <ul className="list-unstyled text-white">
                                <li><a to="#">About</a> </li>
                                    <li><a to="#">Services</a></li>
                                    <li><a to="#">Features</a></li>
                                    <li><a to="#">Pricing</a></li>
                               
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-white">Brand</h5>
                            <ul className="list-unstyled text-white">
                                <li><a to="#">More</a> </li>
                                    <li><a to="#">Services</a></li>
                                    <li><a to="#">Features</a></li>
                                    <li><a to="#">Pricing</a></li>
                               
                            </ul >
                            {/* className="list-unstyled" */}
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-white">Brand</h5>
                            <ul className="text-white">
                                <li><a to="#">Pages</a>  </li>
                                    <li><a to="#">Services</a></li>
                                    <li><a to="#">Features</a></li>
                                    <li><a to="#">Pricing</a></li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  footer-logo">
                            @itz_shivii_0001
                            <br />
                            India
                        </div>
                        <div className="col-md-6">
                            <div className="social-icons">
                            <a to="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a to="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a to="#"><FontAwesomeIcon icon={faInstagram} /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
      
}