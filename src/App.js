import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/loginform/loginform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm/>
      </div>
    );
  }
}

export default App;
