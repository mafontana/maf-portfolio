import React, { Component } from 'react';


class NavBar extends Component {
    render () {
        return (
            <div className="NavBar">
                <div className="navbar row">
                    <div className="col s1">
                        <h2>M</h2>
                    </div>
                    <div className="col s7"></div>
                    <div className="col s4">
                        <ul id="NavList">
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Resume</li> 
                        </ul>
                    </div>
                  
                </div>
          </div>   
        )
    }
}

export default NavBar