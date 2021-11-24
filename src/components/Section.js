export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      //this.addItem(element);
    });
  }

  addItem(element) {
    this._container.append(element);
    //document.querySelector(this._containerSelector).prepend(element);
  }

  addNewItem(element) {
    this._container.prepend(element);    
  }
}