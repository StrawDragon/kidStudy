import React, { Component } from 'react';
import child from './child.jpg';
import Welcome from './Welcome/Welcome';
import Subjects from './Subjects/Subjects';
import Education from './Education/Education';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <Welcome />
        <Education />
        <Subjects />
        <img className="Content-backImage" src={child} alt="child" />
      </div>
    );
  }
}

export default Content;
