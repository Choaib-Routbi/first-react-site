import React, { useState } from "react";
import Navbar from './nav'
import './App.css'
import SocialIcons from "./socialMediaIcons";
import NavPhoneVersion from "./navPhoneVersion"

const Home = () => {
    const [showNavPhoneVersion, setshowNavPhoneVersion] = useState(true)
    const toggleNav = () =>{ 
        setshowNavPhoneVersion(prev => !prev)
    }
return <>
    <div className="home-section-holder">
    <div className="home-section">
        {showNavPhoneVersion && <NavPhoneVersion/>}
        <Navbar ontoggle={toggleNav}/>
        <h1 className="home-title rubik-mono-one-regular">big title here</h1>
        <p className="home-subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe eligendi, facilis nesciunt <br/> dignissimos dolor similique cum </p>
        <button className="home-btn">sign in now</button>
        <p className="home-tags">#technology <span>  </span> #creativity <span>  </span> #webDeveloppement</p>
        <SocialIcons/>
        
    </div> 
    </div>


</>

}

export default Home