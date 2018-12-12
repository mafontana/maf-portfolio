import React, { Component } from 'react';


class NavBar extends Component {
    render () {
        return (
            <div className="NavBar">
                <div className="navbar row">
                    <div className="col s1">
                        <div className="Logo">
                            <div className="M">
                                M
                            </div>
                            <div className="name">
                                eredith Fontana
                            </div>
                        </div>
                    </div>
                    <div className="col s7"></div>
                    <div className="col s4">
                        <ul id="NavList">
                            
                                <li id="home">Home</li>
                           
                            <li id="about">About</li>

                            <li id="portfolio">Portfolio</li>

                            <li id="resume">Resume</li> 
                        </ul>
                    </div>
                  
                </div>
          </div>   
        )
    }
}

export default NavBar