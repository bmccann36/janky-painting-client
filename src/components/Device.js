import React, { Component } from 'react';
import Switch from 'react-toggle-switch'

// import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"

import './Device.css'

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: true
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };

  render() {
    return (
      <div className={"Device"}>
        <div className={"switch-container"}>
          <Switch
            onClick={this.toggleSwitch}
            on={this.state.switched}
          />
        </div>
        <div className={"item"} >
          <p> smart switch </p>
        </div>

        <div className={"item"} >
          <p> percent usage </p>
        </div>

        <div className={"item"} >
          <p> sleep schedule </p>
        </div>
      </div>
    );
  }

}

export default Device;
