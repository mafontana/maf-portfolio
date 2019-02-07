import React, { Component } from 'react';


class Header extends Component {
    render () {
        return (
            <div className="Header">
            
            
                <div className="intro-overlay">
                    <div className="headingText"> 
                    <div className="row">
                    
                        <div class="col s4"></div>
                        <div class="col s4">
                        <div className="introText">
                           
                            <p className="hello">Hello, I'm Meredith!</p>
                            <p className="introText">I'm a full-stack web developer in Denver, Colorado with the mind of a scientist and an eye for design.</p>
                            <p className="introTextTwo">Grab some coffee and check out my work.</p>
                        </div>
                        </div>
                        <div className="col s4"></div>
                </div>
                </div>
            </div> 
          </div>   
        )
    }
}

export default Header