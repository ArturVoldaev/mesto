export class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
  }

  open() {
    this._selectorPopup.classList.add("popup_non");
    document.addEventListener ("keydown", this._handleEscClose);
  }

  close() {
    this._selectorPopup.classList.remove("popup_non");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }


  setEventListeners() {
    this._selectorPopup.querySelector(".popup__close").addEventListener('click', () => {
      this.close();
    });

    this._selectorPopup.addEventListener("click", (ev) => {
      if (ev.target === this._selectorPopup) {
        this.close()
        }
    })
  }

  focusPopup() {
    return this._selectorPopup;
  }
}
