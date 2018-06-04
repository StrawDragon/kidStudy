import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <header className="App-footer">
        <p className="Footer-text">
          Created by <code className="Footer-created-by">StrawDragon</code>.
        </p>
      </header>
    );
  }
}

export default Footer;
