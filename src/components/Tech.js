import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'


class Tech extends Component {
    render () {
        return (
            <div className="Tech">
            <img id="skills" src={require("../skills.png")}></img>
            <div className="techBackground">
            <img className="techIcon" src={require("../html_icon.png")}></img>
            <img id="techIconCSS" src={require("../css_icon.png")}></img>
            <img className="techIcon" src={require("../javascript_icon.png")}></img>
            <img className="techIcon" src={require("../react_icon3.png")}></img>
            <img className="techIcon" src={require("../angular_icon.png")}></img>
            <img className="techIcon" src={require("../vue_icon.png")}></img>
            <img className="techIcon" src={require("../node_icon.png")}></img>
            <img className="techIcon" src={require("../psql_icon.png")}></img>
            <img className="techIcon" src={require("../mongodb_icon.png")}></img>
            <img className="techIcon" src={require("../graphql_icon.png")}></img>
            </div>
          </div>   
        )
    }
}

export default Tech