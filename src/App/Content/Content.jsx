import React, { Component } from 'react';
import childsStudy from './childsStudy.jpg';
import childsStudyTwo from './childsStudy2.jpg';
import child from './child.jpg';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <h1 className="Content-title">Приходите обучаться в школу Эллины Лидс</h1>
        <img className="Content-backImage" src={childsStudy} alt="childsStudy" />
        <img className="Content-backImage" src={childsStudyTwo} alt="childsStudyTwo" />
        <img className="Content-backImage" src={child} alt="child" />
      </div>
    );
  }
}

export default Content;
