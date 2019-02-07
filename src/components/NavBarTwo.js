import React, { Component } from 'react';
import NavBarThree from './NavBarThree';


class NavBarTwo extends Component {
    render () {
        return (
            <div className="NavBarTwo">
                
                    <img id="logo" src={require("../Resume_logo.png")}></img>
                    <NavBarThree />
          </div>   
        )
    }
}

export default NavBarTwo



