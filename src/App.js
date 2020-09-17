import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './screen/components/header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default withRouter(connect(mapStateToProps)(App));
