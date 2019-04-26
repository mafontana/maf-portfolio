import React, { Component } from 'react';
import './Portfolio.css'


class Portfolio extends Component {
    render () {
        return (
            <div className="Portfolio">
            <img id="projects" src={require("./projects.png")}></img>
                <div className="projectBoxes">
                    <div className="projectBox">
                        <img className="geoguidePicture" src={require("./weatherapp_screenshot.png")}></img>
                    </div>

                    <div className="projectBox">
                        <img className="geoguidePicture" src={require("./geoguide_screenshot.png")}></img>
                    </div>
                   
                    <div className="projectBox">
                        <img className="geoguidePicture" src={require("./movieapp_screenshot_1.png")}></img>
                    </div>
                
                   
                </div>
          </div>   
        )
    }
}

export default Portfolio