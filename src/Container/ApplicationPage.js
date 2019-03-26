import React, { Component } from 'react';
import './ApplicationPage.css';
import Std_Application from '../Component/Std_Application/Std_Application';

class ApplicationPage extends Component {
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
      <Std_Application />
    </div>
    );
  }
};

export default ApplicationPage;