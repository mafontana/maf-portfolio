import React, { Component } from 'react';
import './Portfolio.css'


class Portfolio extends Component {
    constructor() {
        super()
        this.state={
         isTextOverImage1Visible: false,
         isTextOverImage2Visible: false,
         isTextOverImage3Visible: false,
        }
      }





toggleProjectDisplayTile1 = () => {
    this.setState((prevState) => {
        return {isTextOverImage1Visible: !prevState.isTextOverImage1Visible}
      })
      console.log("you hovered1")
}


toggleProjectDisplayTile2 = () => {
    this.setState((prevState) => {
        return {isTextOverImage2Visible: !prevState.isTextOverImage2Visible}
      })
      console.log("you hovered2")
}

toggleProjectDisplayTile3 = () => {
    this.setState((prevState) => {
        return {isTextOverImage3Visible: !prevState.isTextOverImage3Visible}
      })
      console.log("you hovered3")
}






    render () {

let textOverImageTile1= this.state.isTextOverImage1Visible ? "textOverImage" : "noTextOverImage" 
let textOverImageTile2= this.state.isTextOverImage2Visible ? "textOverImage2" : "noTextOverImage2" 
let textOverImageTile3= this.state.isTextOverImage3Visible ? "textOverImage3" : "noTextOverImage3" 


        return (
            <div className="Portfolio">
            <img id="projects" src={require("./projects.png")}></img>
                <div className="projectBoxes">
            


                <div className="tileDisplay1" onMouseEnter={this.toggleProjectDisplayTile1} onMouseLeave={this.toggleProjectDisplayTile1} >
                    <div className={textOverImageTile1}>
                        <div className="paragraph1"> 
                        <h3>Tech Used:</h3>
                        <div className="techUsed">
                            <p>React.js</p>
                            <p>Mapbox</p>
                            <p>Node</p>
                            <p>Express</p>
                            <p>PostreSQL</p>
                            <p>Knex.js</p>
                            <p>CSS</p>
                            <p>HTML</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="tileDisplay2" onMouseEnter={this.toggleProjectDisplayTile2} onMouseLeave={this.toggleProjectDisplayTile2} >
                <div className={textOverImageTile2}>
                    <div className="paragraph2"> 
                        <h2>Tech Used:</h2>
                        <div className="techUsed">
                        <p>React Native</p>
                        <p>Mapbox</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="tileDisplay3" onMouseEnter={this.toggleProjectDisplayTile3} onMouseLeave={this.toggleProjectDisplayTile3} >
            <div className={textOverImageTile3}>
                <div className="paragraph3"> 
                    <h2>Tech Used:</h2>
                    <p>React.js</p>
                    <p>Mapbox</p>
                    <p>CSS</p>
                    <p>HTML</p>
                </div>
            </div>
        </div>

        </div>

          </div>   
        )
    }
}

export default Portfolio


//onMouseEnter={this.toggleProjectDisplay} onMouseLeave={this.toggleProjectDisplay}