import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css'
import { StickyContainer, Sticky } from 'react-sticky';


class App extends Component {
  constructor() {
    super()
    this.state={
     logoHover: false
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
      <div className="App">
      <NavBar 
        handleHover={this.handleHover} 
        logoHover={this.state.logoHover}
        handleMouseLeave={this.state.handleMouseLeave} />
      <Header />
      <About />
      <Portfolio />
     
      </div>
    );
  }
}

export default App;
