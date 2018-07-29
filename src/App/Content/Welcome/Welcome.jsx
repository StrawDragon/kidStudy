import React, { Component } from 'react';
import './Welcome.css';
import cartoonChildrenSittingAtSchool from './cartoonChildrenSittingAtSchool.png';

class Welcome extends Component {
  render() {
    return (
      <section className="Content-welcome" id="home">
        <div className="Welcome-left">
          <img className="Welcome-banner" src={cartoonChildrenSittingAtSchool} alt="child" />
        </div>
        <div className="Welcome-right">
          <h1 className="Welcome-title">Мамы и Папы!</h1>
          <div className="Welcome-text">
            <p>Сегодня ни для кого не секрет, что в школу дети идут уже
                с определенным запасом знаний, а если речь идет о зачислении
                в престижное учебное заведение, то запас этот должен быть
                более чем существенным. Сформировать таковой с домашних
                условиях довольно проблематично, потому помочь в этом готов
                наш детский центр по подготовки к школе.</p>
          </div>
          <span className="Welcome-subscribe" role="button">
            Записаться >>>
          </span>
        </div>
      </section>
    );
  }
}

export default Welcome;
