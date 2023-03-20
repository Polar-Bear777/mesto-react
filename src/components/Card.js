import React from "react";

function Card({card, onCardClick, onCardDelete}) {
    // Обработчик клика
    function handleCardClick() {
        onCardClick(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
      }

    return (
        <article key={card._id} className="elements__item">
            <img 
                className="elements__image"
                src={card.link}
                alt={card.name}
                onClick={handleCardClick}
            />
            <button 
                className="elements__delete" 
                type="button"
                onClick={handleDeleteClick}
                aria-label="Удалить карточку"
            ></button>
            <div className="elements__container">
                <h2 className="elements__title">{card.name}</h2>
                <button className="elements__like" type="button"></button>
            </div>
            <span className="elements__like-number">{card.likes.length}</span>
        </article>
    )
}

export default Card;
