import React, { Component } from 'react';
import './Banner.css';
import studyIcon from './StudyIcon.svg';

class Banner extends Component {
  render() {
    return (
      <div className="App-banner">
        <h1 className="Banner-header">Мамы и Папы!</h1>
        <p className="Banner-good">Психологический центр "Хороший день" ведет запись</p>
        <h2 className="Banner-kids">ДЕТЕЙ 2-12 ЛЕТ</h2>
        <h3>Комплексная подготовка к школе для детей 4, 5, 6 лет</h3>
        <p>(чтение, письмо, развитие речи, математика,
            окружающий мир и даже английский язык)</p>
        <h2><italic>Обучение в школе без проблем</italic></h2>
        <h3>Группа "Вместе с мамой" для малышей от 2 лет</h3>
        <h3>Уроки творчества и английский язык</h3>
        <h3>Скорочтение для учеников 1-4 классов</h3>
        <h3>Запись каждую субботу августа</h3>
        <h2>В 11 ЧАСОВ</h2>
        <h2>Тел. 8-953-333-44-42</h2>
        <h3>ул.Ленина, 73 (здание "Росбанка", около аптеки №1), кабинет 40</h3>
        <section>
          <img src={studyIcon}/>
          <p><italic>Ваш ребенок будет лучшим!</italic></p>
        </section>
      </div>
    );
  }
}

export default Banner;
