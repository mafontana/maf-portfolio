import React, { Component } from 'react';


class Portfolio extends Component {
    render () {
        return (
            <div className="Portfolio">
            <img id="projects" src={require("../projects.png")}></img>
                <div className="projectBoxes">
                    <div className="projectBox"></div>
                    <div className="projectBox"></div>
                    <div className="projectBox"></div>
                    <div className="projectBox"></div>
                   
                </div>
          </div>   
        )
    }
}

export default Portfolio