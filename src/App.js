import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './App.css'
import { StickyContainer, Sticky } from 'react-sticky';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Header />
     
      </div>
    );
  }
}

export default App;
