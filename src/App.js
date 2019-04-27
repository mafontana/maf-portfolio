import React, { Component } from 'react';
import Header from './components/Header';
import NavBarTwo from './components/NavBarTwo';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Tech from './components/Tech'
import Resume from './components/Resume'
// import Resume from './components/Resume';
import './App.css'
import { Document, Page } from 'react-pdf';


class App extends Component {
  constructor() {
    super()
    this.state={
     logoHover: false,
     numPages: null,
    pageNumber: 1,
    }
  }
  
  handleHover = () => {
    console.log("hover clicked!")
    this.setState({
      logoHover: true
    })
  } 

handleMouseLeave = () => {
  console.log("hover left")
  this.setState({
    logoHover: false
  })
  }
  
  render() {
    return (
      <div>
      <NavBarTwo />
      <Header />
      <About />
      <Tech />
      <Portfolio />
      <Resume />
     
      
     
      </div>
    );
  }
}

export default App;


// <NavBar 
// handleHover={this.handleHover} 
// logoHover={this.state.logoHover}
// handleMouseLeave={this.state.handleMouseLeave} />

// <Resume />

// <Document file="/Users/meredith/portfolio/portfolio/src/Resume_Final.pdf">
       
//       </Document>