import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { Auth } from "aws-amplify";

import { signOut, setAuthenticated } from './store/auth'

import './App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticating: true
    };
  }
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.props.setAuthenticated(true)
      }
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    this.setState({ isAuthenticating: false });
  }
  handleLogout = async event => {
    this.props.signOut()
    this.props.history.push("/login");
  }

  handleHouse = event => {
    // console.log(this.props)
    this.props.history.push("/house");
  }

  render() {
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">City</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/house">House</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.props.isAuthenticated
                ?
                <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

const mapDispatch = { signOut, setAuthenticated }

const mapState = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default withRouter(connect(mapState, mapDispatch)(App))

