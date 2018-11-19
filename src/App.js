import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return (
      <div>
       {/* <div className="App">
        <header className="App-header"> */}
        <TopNav />
        <Nav />
      {/* </header>
      // </div>*/}
      </div>
    );
  }
}

export default App;
