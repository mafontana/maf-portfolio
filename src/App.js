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
     logoAnimation: "name"
    }
  }
  
  handleHover = () => {
    console.log("hover clicked!")
    this.setState({
      logoAnimation: "nameHover"
    })
  } 

 
  
  render() {
    return (
      <div className="App">
      <NavBar handleHover={this.handleHover} className={this.state.logoAnimation}/>
      <Header />
      <About />
      <Portfolio />
     
      </div>
    );
  }
}

export default App;
