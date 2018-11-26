import React, { Component } from 'react';
import '../../App.css';
import Image from '../../Assets/dww.jpg';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div id="homeWrapper">
        <section className="homeRow">
          <img src={Image} alt="Data Works Wales logo"/>
        </section>
        <section className="homeRow">
          <Link to="/login"><button className="btn btn-success">Community Login</button></Link>
          <button className="btn btn-danger">Teaching Portal</button>
        </section>
      </div>
    )
  }
}

export default Home;
