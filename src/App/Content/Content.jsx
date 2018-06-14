import React, { Component } from 'react';
import childsStudyTwo from './childsStudy2.jpg';
import child from './child.jpg';
import Welcome from './Welcome/Welcome';
import Subjects from './Subjects/Subjects';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <Welcome />
        <Subjects />
        <img className="Content-backImage" src={childsStudyTwo} alt="childsStudyTwo" />
        <img className="Content-backImage" src={child} alt="child" />
      </div>
    );
  }
}

export default Content;
