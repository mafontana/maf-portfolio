import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
    render () {
        return (
            <div className="Header">
            
            
                <div className="intro-overlay">
                    <div className="row">
                        <div class="col s3"></div>
                        <div class="col s5">
                            <h3 class="italic">Hello, I'm Meredith!</h3>
                            <h1>Welcome to my web
                            development portfolio.</h1>
                            <h4>Grab some coffee and check out some of my work.</h4>
                        </div>
                        <div className="col s3"></div>
                </div>
            </div> 
          </div>   
        )
    }
}

export default Header