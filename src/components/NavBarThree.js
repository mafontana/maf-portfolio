import React, { Component } from 'react';


class NavBarThree extends Component {
    render () {
        return (
            <div className="NavBarThree">
                <div className="NavBarLinks">
                    <ul id="NavList">
                        <li id="home"><a href="#">Home</a></li>
                        <li id="about"><a href="#">About</a></li>
                        <li id="portfolio"><a href="#">Portfolio</a></li>
                        <li id="resume"><a href="#">Resume</a></li> 
                </ul>
                </div>
          </div>   
        )
    }
}

export default NavBarThree
