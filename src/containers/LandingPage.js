import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import "./LandingPage.css";

import { setColor } from '../store/color'

const image = require('../assets/toilet.jpeg')


class LandingPage extends Component {

  handleClick(event) {
    event.preventDefault();
    const newStyle = this.props.color === 'beta' ? 'alpha' : 'beta'
    this.props.setColor(newStyle)
  }

  render() {
    // console.log(this.props)
    return (
      <div className="LandingPage">
        <div className="lander">
          <h1>Janky Painting</h1>
          <img src={image} />
          <p>content pending</p>

        </div>

      </div>
    );
  }
}

const mapDispatch = { setColor }

const mapState = (state) => {
  return {
    color: state.color
  };
};

export default connect(mapState, mapDispatch)(LandingPage)

