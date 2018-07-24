import React, { Component } from 'react';
import './Education.css';
import mathematics from './images/mathematics.png';

class Education extends Component {
  render() {
    return (
      <section className="Content-education" id="education">
        <h2>
           Как проходит обучение
        </h2>
        <div className="Education-list">
          <div className="Article">
            <div className="Article-left">
              <img className="Article-image" src={mathematics} alt="mathematics"  />
            </div>
            <div className="Article-right">
              <h4 className="Article-title">Опытные преподаватели</h4>
              <div className="Article-text">
                На этом предмете ваш ребенок научиться считать.
              </div>
             </div>
          </div>
          <div className="Article Article-revert">
            <div className="Article-left">
              <h4 className="Article-title">Математика</h4>
              <div className="Article-text">
                На этом предмете ваш ребенок научиться считать.
              </div>
            </div>
            <div className="Article-right">
              <img className="Article-image" src={mathematics} alt="mathematics"  />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
