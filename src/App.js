import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css'
import { StickyContainer, Sticky } from 'react-sticky';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <About />
      <Portfolio />
     
      </div>
    );
  }
}

export default App;
