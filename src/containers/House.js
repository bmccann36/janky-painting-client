import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './House.css'
import "./LandingPage.css";
import Device from '../components/Device';

// import { setColor } from '../store/color'

class House extends Component {
  constructor() {
    super()
  }



  render() {
    const thingList = [1, 2, 3, 4, 5]
    const things = thingList.map(thing => {
      return (<div className="item"> <p>{thing}</p> </div>)
    })
    // console.log(this.props)
    return (
      <div className="House">
        <Device />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

// after
export default withRouter(connect(mapState)(House))
