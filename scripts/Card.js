import { openPhoto } from './index.js';

export default class Card {
  constructor(data, templateSelector, openPhoto) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPhoto = openPhoto;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return template;
  }

  generateCard() {
    this._template = this._getTemplate();
    this._cardName = this._template.querySelector('.element__title');
    this._cardPhoto = this._template.querySelector('.element__image');
    this._likeBtn = this._template.querySelector('.element__like');
    this._deleteBtn = this._template.querySelector('.element__delete');
    this._cardName.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;    
    this._setEventListeners();
    return this._template;
  }

  _likeCard() {
    this._likeBtn.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._template.remove();
  }

  _setEventListeners() {

    this._likeBtn.addEventListener('click', () => {
      this._likeCard();
    });

    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardPhoto.addEventListener('click', () => {
      openPhoto(this._link, this._name);
    })
  }
}

//export { Card, initialCards };