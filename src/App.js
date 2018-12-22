import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">

         {/* <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" /> 
        </header> */}
        
        <AppRouter></AppRouter>
      </div>
    );
  }
}

export default App;
   