import { openPopup } from "./script.js";



export class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _render() {
    const newCard = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
  }

  _openPopup() {
    const imgCard = document.querySelector(".popup__container-img");
    const textCard = document.querySelector(".popup__image-text");
    const placeBigImage = document.querySelector(".popup_type_big-img");
    imgCard.src =  this._link;
    textCard.textContent = this._name;
    imgCard.alt = this._name;
    /*const cardElem = this._place
    openImage(cardElem)*/
    openPopup(placeBigImage)
  }

  _likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._place.remove();
  }

  _listeners() {
    this._place.querySelector('.element__img').addEventListener('click', () => {
        this._openPopup();
    });

    this._place.querySelector('.element__like').addEventListener('click', (evt) => {
        this._likeCard(evt);
    });

    this._place.querySelector('.element__trash').addEventListener('click', () => {

        this._deleteCard();
    });
  }

  createCard() {
    this._place = this._render();
    this._listeners();
    this._place.querySelector('.element__img').src = this._link;
    this._place.querySelector('.element__name').textContent = this._name;
    this._place.querySelector('.element__img').alt = this._name;
    return this._place;
  }
}
