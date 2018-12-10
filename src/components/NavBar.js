import React, { Component } from 'react';


class NavBar extends Component {
    render () {
        return (
            <div className="NavBar">
                <div className="row">
                    <div class="col s8"></div>
                    <div class="col s4">
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