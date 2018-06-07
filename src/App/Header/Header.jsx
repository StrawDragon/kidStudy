import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="Header-navigation" >
          <div className="Navigation-title">
            Умники и Умницы
          </div>
          <ul className="Navigation-menu">
            <li className="Navigation-item">
              <a className="Navigation-link">Предметы</a>
            </li>
            <li className="Navigation-item">
              <a className="Navigation-link">Преимушества</a>
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
