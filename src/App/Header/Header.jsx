import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="Header-navigation" >
          <div className="Navigation-title">
            Подготовка к школе
          </div>
          <ul className="Navigation-menu">
            <li className="Navigation-item">
              <a className="Navigation-link">Как проходит обучение</a>
            </li>
            <li className="Navigation-item">
              <a className="Navigation-link">Предметы</a>
            </li>
            <li className="Navigation-item">
              <a className="Navigation-link">Контакты</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
