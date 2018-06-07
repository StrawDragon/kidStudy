import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Content-welcome">
        <h1 className="Welcome-title">Детский центр развития "Умники и Умницы"</h1>
        <div className="Welcome-text">
          <p>Для того, чтобы Ваш ребёнок успешно адаптировался к школе, необходимо
            посещение специальных подготовительных занятий в детской группе: в первую
            очередь, это нужно для социализации малыша (особенно, если ребёнок не ходил
            в детский сад). В игре, являющейся в дошкольном возрасте ведущей деятельностью,
            формируются базовые коммуникативные и социальные навыки, помогающие в дальнейшей учёбе.</p>
        </div>
      </div>
    );
  }
}

export default Welcome;
