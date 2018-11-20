import React, { Component } from 'react';
import '../App.css';
import Image from '../Photos/dww.jpg';

class Home extends Component {
  render() {
    return(
      <div id="homeWrapper">
        <section className="homeRow">
          <img src={Image} alt="Data Works Wales logo"/>
        </section>
        <section className="homeRow">
          <button className="btn btn-success">Community Login</button>
          <button className="btn btn-danger">Teaching Portal</button>
        </section>
      </div>
    )
  }
}

export default Home;
