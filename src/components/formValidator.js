export class FormValidator {
  constructor(configSelectors, element) {
    this._configSelectors = configSelectors;
    this._element = element;
  }

  _showInputError(inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._configSelectors.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._configSelectors.errorClass);
    //console.log(inputElement);
  };

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._configSelectors.inputErrorClass);
    errorElement.classList.remove(this._configSelectors.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some(function(inputElement) {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._element.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    this._inputList = Array.from(this._element.querySelectorAll(this._configSelectors.inputSelector));
    this._buttonElement = this._element.querySelector(this._configSelectors.submitButtonSelector);
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
       this._checkInputValidity(inputElement);
       this.toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
