import React, { Component } from 'react';
import './App.css';
import StdRegister from './std_register/std_register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div className="App">
      <div className="header">
        <span className="logo"><img src="https://ok6static.oktacdn.com/bc/image/fileStoreRecord?id=fs034r0xi5BuXeUMR2p7" alt="description of image"></img></span>
      </div>
      <StdRegister />
    </div>
    );
  }
};

export default App;