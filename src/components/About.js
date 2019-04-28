import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class About extends Component {
    render () {
        return (
            <div className="about">
            <Slide left>
                <div className="headshot">
                    <img id="headshot" src={require("../Yoga_headshot.JPG")}></img>
                </div>
            </Slide>
            <Slide right>
                <div className="bio">
                    <img  id="aboutImage" src={require("../about.png")}></img>
                    <p>
                    I create beautifully designed full-stack web and mobile apps using clean code that is both readable and elegant. <br /> <br />

                    As a former scientist, I bring an analytical approach to my development process along
                    with an eye for detail. <br /> <br />


                    Coding allows me to combine the logic I have developed as a scientist 
                    with my love of art and design, which I strive to express in each of my web apps. <br /> <br />

                    Those who work with me call me humble, kind, and driven, which are values I strive to live by in everything that I do. <br /> <br />

                    I have a relentless desire to learn and am always looking for new opportunities to expand my
                    skills and advance my craft. <br /> <br />

                    How can I contribute to your next project? Lets connect! 
                    </p>
                </div>
            </Slide>
          </div>   
        )
    }
}

export default About