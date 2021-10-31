import { openPhoto } from './index.js';

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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

export { Card, initialCards };