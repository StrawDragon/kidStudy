import React, { Component } from 'react';
import './Subjects.css';
import mathematics from './images/mathematics.png';

class Subjects extends Component {
  render() {
    return (
      <section className="Content-subjects" id="subjects">
        <h2>
           Предметы
        </h2>
        <div className="Subjects-list">
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
          <div className="Subject">
            <img className="Subject-image" src={mathematics} alt="mathematics"  />
            <h4 className="Subject-title">Математика</h4>
            <div className="Subject-text">
              На этом предмете ваш ребенок научиться считать.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subjects;
