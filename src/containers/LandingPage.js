import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import "./LandingPage.css";

import { setColor } from '../store/color'

class LandingPage extends Component {
  constructor() {
    super()
  }

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
          <h1>Landing Page</h1>
          <p>content pending</p>
          <div className={this.props.color}>
            <p> alpha content </p>
          </div>
        </div>
        <Button
          block
          bsSize="large"
          type="submit"
          onClick={this.handleClick.bind(this)}
        > change color
        </Button>
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

