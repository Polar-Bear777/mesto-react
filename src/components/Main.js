// Блок Main
import React, { useState, useEffect } from "react";
import profileEditLogo from "./../images/edit.svg";
import profileAddLogo from "./../images/add.svg";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
        // userId = userData._id;
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      {/* Секция Profile */}
      <section className="profile">
        <img 
          src={userAvatar} 
          className="profile__avatar" 
          alt="Портрет Жак-Ив Кусто"
        />
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" onClick={onEditProfile}>
            <img src={profileEditLogo} className="profile__edit" alt="Кнопка 'Редактировать'" />
          </button>
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}>
          <img src={profileAddLogo} className="profile__add" alt="Кнопка 'Добавить'" />
        </button>
        <button
          className="profile__avatar-button"
          onClick={onEditAvatar}
          type="button"
          aria-label="Редактировать аватар профиля"
        ></button>
      </section>

      {/* Секция Elements */}
      <section className="elements">
          {cards.map((card) => {
            return (
              <Card 
                card={ card } 
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
              ></Card>
            );
          })}
      </section>
    </main>
  );
}

export default Main;
