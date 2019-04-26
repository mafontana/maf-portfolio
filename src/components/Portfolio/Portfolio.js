import React, { Component } from 'react';
import './Portfolio.css'


class Portfolio extends Component {
    render () {
        return (
            <div className="Portfolio">
            <img id="projects" src={require("./projects.png")}></img>
                <div className="projectBoxes">
                    <div className="projectBox">
                        <img id="geoguidePicture" src={require("./weatherapp_screenshot.png")}></img>
                    </div>

                    <div className="projectBox">
                        <img id="geoguidePicture" src={require("./geoguide_screenshot_5.png")}></img>
                    </div>
                   
                    <div className="projectBox"></div>
                
                   
                </div>
          </div>   
        )
    }
}

export default Portfolio