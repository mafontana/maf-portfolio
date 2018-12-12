import React, { Component } from 'react';


class NavBar extends Component {
    render () {
        return (
            <div className="NavBar">
                <div className="navbar row">
                    <div className="col s3">
                        <div className="Logo">
                            <div className={this.props.logoHover ? "Mhover" : "M"} onMouseOver={this.props.handleHover}>
                                M
                            </div>
                            <div className={this.props.logoHover ? "nameHover" : "name"} onMouseOver={this.props.handleMouseLeave} >
                        eredith Fontana
                        </div>
                        </div>
                    </div>
                    <div className="col s5">
                    
                    </div>
                        
                    <div className="col s4">
                        <ul id="NavList">
                            <li id="home"><a href="#">Home</a></li>
                            <li id="about"><a href="#">About</a></li>
                            <li id="portfolio"><a href="#">Portfolio</a></li>
                            <li id="resume"><a href="#">Resume</a></li> 
                        </ul>
                    </div>
                  
                </div>
          </div>   
        )
    }
}

export default NavBar