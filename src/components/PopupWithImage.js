import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popup = super.focusPopup();
    this._popupTitle = this._popup.querySelector(".popup__image-text")
    this._popupBigImage = this._popup.querySelector(".popup__container-img");
  }

  open(name, link) {
    this._popupTitle.textContent = name;
    this._popupBigImage.src = link;
    this._popupBigImage.alt = name;
    super.open();
  };
}
