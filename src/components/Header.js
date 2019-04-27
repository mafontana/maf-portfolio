import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    render () {
        return (
            <div className="Header"> 
                
                    <div className="headingText"> 
                    
                        <Fade>
                            <p className="hello">Hello, I'm Meredith!</p>
                            <p className="introText">I'm a full-stack web developer in Denver, Colorado.</p>
                            <p className="introTextTwo">Grab some coffee and check out my work.</p>
                        </Fade>
                </div>
            
          </div>   
        )
    }
}

export default Header