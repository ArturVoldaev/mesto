import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, formSubmitAll) {
    super(selectorPopup)
    this._formSubmitAll = formSubmitAll;
  }
  close() {
    this._selectorPopup.querySelector('.form').reset();
    super.close();
  }
  setEventListeners() {
    this._iputs = this._getInputValues;
    this._selectorPopup.querySelector('.form').addEventListener('submit', (evt) => {
      this._formSubmitAll(evt, this._iputs())
    });
    super.setEventListeners();
    }

 _getInputValues = () => {
    const inputForms = Array.from(this._selectorPopup.querySelectorAll('.form__style'));
    let inputField = {};
    const inputFields = inputForms.forEach((elem) => {
      inputField[elem.name] = elem.value;
    });
    return inputField;
  }
}
