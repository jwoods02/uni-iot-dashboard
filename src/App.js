
import React, { Component } from 'react';
import './App.css';
import Home from './components/Homepage/Home';
import Nav from './components/Nav';
import TopNav from './components/TopNav';
import LoginForm from "./container/loginform/loginform";
import setupFirebase from "./utils/firebaseSetup";

class App extends Component {
  constructor(props) {
    super(props);
    setupFirebase();
  }
  render() {
    return (
      <div>
        <Home />
       {/* <div className="App">
        <header className="App-header"> */}
        <TopNav />
        <Nav />
      {/* </header>
      // </div>*/}
      <div className="App">
        <LoginForm />
      </div>
      </div>
    );
  }
}

export default App;
