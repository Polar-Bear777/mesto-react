import React, { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  // Переменные состояния (useState)
  // PROFILE
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // AVATAR
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // ADD_PHOTO
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // OPEN IMG CARD
  const [selectedCard, setSelectedCard] = useState(null);
  // DELETE
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  // Попап PROFILE
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Попап AVATAR
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Попап PHOTO
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // Попап DELETE
  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  // Попап ФУЛЛСКРИН (клик на карточку)
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // Закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardDelete={handleDeleteCardClick}
      />
      <Footer />

      {/* PROFILE */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="name"
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          required
        />
        <span id="name-error" className="error error_visible" />
        <input
          type="text"
          id="info"
          className="popup__input popup__input_type_info"
          name="info"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          required
        />
        <span id="info-error" className="error error_visible" />
      </PopupWithForm>

      {/* AVATAR */}
      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="url"
          className="popup__input popup__input_type_avatar-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="url-error" className="error error_visible" />
      </PopupWithForm>

      {/* ADD_PHOTO */}
      <PopupWithForm 
        name="card" 
        title="Новое место" 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="title"
          className="popup__input popup-card__input popup-card__input_type_title"
          name="name"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required
        />
        <span id="title-error" className="error error_visible" />
        <input
          type="url"
          id="link"
          className="popup__input popup-card__input popup-card__input_type_link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-error" className="error error_visible" />
      </PopupWithForm>

      {/* DELETE */}
      <PopupWithForm 
        name="delete" 
        title="Вы уверены?" 
        isOpen={isDeleteCardPopupOpen} 
        onClose={closeAllPopups}
      >
      </PopupWithForm>

      {/* POPUP OPEN IMG  */}
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />
    </div>
  );
}

export default App;
