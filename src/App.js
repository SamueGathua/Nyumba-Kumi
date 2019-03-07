import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPage from './components/NavbarPage'
import MultiCarouselPage from './components/MultiCarouselPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarPage/>
        <MultiCarouselPage/>
      </div>
    );
  }
}

export default App;
