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
            <p>Для того, чтобы Ваш ребёнок успешно адаптировался к школе, необходимо
              посещение специальных подготовительных занятий в детской группе: в первую
              очередь, это нужно для социализации малыша (особенно, если ребёнок не ходил
              в детский сад). В игре, являющейся в дошкольном возрасте ведущей деятельностью,
              формируются базовые коммуникативные и социальные навыки, помогающие в дальнейшей учёбе.</p>
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
