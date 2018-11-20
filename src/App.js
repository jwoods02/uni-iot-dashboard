import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Dashboard/Nav';
import TopNav from './components/Dashboard/TopNav';

class App extends Component {
  render() {
    return (
      <div>
       {/* <div className="App">
        <header className="App-header"> */}
        <TopNav />
        <Nav />
        {/* <Cards /> */}
      {/* </header>
      // </div>*/}
      </div>
    );
  }
}

export default App;
