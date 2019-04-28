import React, { Component } from 'react';
import About from './About';
import Header from './Header'
import Tech from './Tech'
import Portfolio from './Portfolio/Portfolio'
import Resume from './Resume'
import Footer from './Footer'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollUpButton from "react-scroll-up-button";



class NavBarThree extends Component {
    render () {
        return (
            <div>
            <div className="navbarLinks">
               <div className="navbarLink"> <a href='#section1'> Home </a></div>
               <div className="navbarLink"> <a href='#section2'> About </a></div>
               <div className="navbarLink"><a href='#section3'> Skills </a></div>
               <div className="navbarLink"><a href='#section4'> Projects </a></div>
               <div className="navbarLink"><a href='#section5'> Experience </a></div>
               <div className="navbarLink"><a href='#section6'> Contact </a></div>
            </div>
            <ScrollableAnchor id={'section1'}>
            <div> <Header /> </div>
          </ScrollableAnchor>
            <ScrollableAnchor id={'section2'}>
              <div> <About /> </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'section3'}>
            <div> <Tech /> </div>
          </ScrollableAnchor>
           
          <ScrollableAnchor id={'section4'}>
          <div> <Portfolio/> </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'section5'}>
        <div> <Resume /> </div>
      </ScrollableAnchor>
      <ScrollUpButton />

      <ScrollableAnchor id={'section6'}>
      <div> <Footer /> </div>
    </ScrollableAnchor>
    <ScrollUpButton />





          </div>






        )
    }
}

export default NavBarThree


// <div className="NavBarThree">
// <div className="NavBarLinks">
//     <ul id="NavList">
//         <li id="home"><a href="#">Home</a></li>
//         <li id="about"><a href="#">About</a></li>
//         <li id="portfolio"><a href="#">Portfolio</a></li>
//         <li id="resume"><a href="#">Resume</a></li> 
// </ul>
// </div>
// </div>  