import { openPopup } from "./script.js";
import { openImage } from "./script.js";
import { closePopByButton } from "./script.js";
const imgCard = document.querySelector(".popup__container-img");
const textCard = document.querySelector(".popup__image-text");
const popupImg = document.getElementById("image");


/*
function openPopup(popup) {
  popup.classList.add("popup_non");
  document.addEventListener ("keydown", closePopByButton);
}

function openImage(cardElem) {
  const cardImage = cardElem.querySelector('.element__img');
  cardImage.addEventListener('click', function() {
      openPopup(popupImg);
  });
}

function closePopByButton (ev) {
  if (ev.key === "Escape") {
   closePopup(document.querySelector(".popup_non"))
  }
}
*/
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
    imgCard.src =  this._link;
    textCard.textContent = this._name;
    imgCard.alt = this._name;
    const cardElem = this._place
    openImage(cardElem)
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
