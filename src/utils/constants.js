export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__input_state_invalid",
}
export const initialCards = [
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

export const cardListElement = document.querySelector(".elements__list");

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__bio");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");
export const popupProfileOpenBtn = document.querySelector(".profile__edit-button")
export const popupEditProfile = document.querySelector(".popup_profile");//.popup_profile
export const photoFull = document.querySelector(".popup_photo");
export const popupAddCard = document.querySelector(".popup_element");
export const titleInput = document.querySelector(".popup__input_type_title");
export const imageInput = document.querySelector(".popup__input_type_link");
export const popupCardOpenBtn = document.querySelector(".profile__add-button");
export const formProfile = document.querySelector(".popup__form_profile");
export const formCard = document.querySelector(".popup__form_card");
