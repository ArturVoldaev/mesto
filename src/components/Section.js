export class Section {
  constructor ({items ,renderer},containerForCard) {
    this._items = items;
    this._renderer = renderer;
    this._containerForCard = document.querySelector(containerForCard);
  }
  renderCards() {
    this._items.forEach((elem) => {
      this._renderer(elem);
    });
  }
  addItem(card) {
    this._containerForCard.prepend(card);
  };
}
