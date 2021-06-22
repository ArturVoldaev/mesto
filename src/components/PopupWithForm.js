import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, formSubmitAll) {
    super(selectorPopup)
    this._formSubmitAll = formSubmitAll;
    this._popup = super.focusPopup();
    this._inputSelectors = this._popup.querySelectorAll('.form__style');

  }
  close() {
    this._popup.querySelector('.form').reset();
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
    this._inputForms = Array.from(this._inputSelectors);
    this._inputField = {};
    this._inputForms.forEach((elem) => {
      this._inputField[elem.name] = elem.value;
    });
    return this._inputField;
  }
}
