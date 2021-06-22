export class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _render() {
    const newCard = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._place.remove();
  }

  _listeners() {
    this._place.querySelector('.element__like').addEventListener('click', (evt) => {
        this._likeCard(evt);
    });

    this._place.querySelector('.element__trash').addEventListener('click', () => {
        this._deleteCard();
    });
    this._place.querySelector('.element__img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
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
