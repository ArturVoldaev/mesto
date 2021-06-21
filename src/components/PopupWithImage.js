import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }
  open(newCard) {
    const imgCard = this._selectorPopup.querySelector(".popup__container-img");
    const textCard = this._selectorPopup.querySelector(".popup__image-text");
    const imgBigCard = newCard.querySelector(".element__img");
    const imgBigTitle = newCard.querySelector(".element__name");

    imgCard.src = imgBigCard.src;
    imgCard.alt= imgBigTitle.textContent;
    textCard.textContent = imgBigTitle.textContent;
    super.open();
  };
}
