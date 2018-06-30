import React, {Component} from 'react';
import logo from '../../common/logo.jpg';

class Header extends Component{
  render(){
    return(
      <div className="App-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Welcome to My Academics </h1>
      </div>
    );
  }
}

export default Header;
