import React from "react";
import Navbar from "./nav";
import SocialIcons from "./socialMediaIcons"

const Footer = () => {
    return <>
        <div className="footer-section-holder">
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container-left">
                    <div className="logo">LOGO</div>
                    <SocialIcons/>
                </div>
                <div className="footer-container-right">
                    <ul>Home
                        <li>sign in</li>
                    </ul>
                    <ul>Contact</ul>
                    <ul>Collections
                        <li>collection 1</li>
                        <li>collection 2</li>
                        <li>collection 3</li>
                        <li>collection 4</li>
                    </ul>
                    <ul>Pricing
                        <li>Essential</li>
                        <li>Professional</li>
                        <li>Entreprise</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </>

}

export default Footer