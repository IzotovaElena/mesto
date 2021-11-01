import Card from "./Card.js";
import FormValidator from './FormValidator.js';


//popup name="editProfile"

const popupEditProfile = document.querySelector(".popup_profile"); 
const popupProfileOpenBtn = document.querySelector(".profile__edit-button");
const popups = Array.from(document.querySelectorAll(".popup"))
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__bio");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupEscHandler); 
  document.addEventListener("click", popupOverlayHandler); 
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupEscHandler); 
  document.removeEventListener("click", popupOverlayHandler); 
}

function openProfilePopup() {
  openPopup(popupEditProfile);
  if (popupEditProfile.classList.contains("popup_opened")) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
  }  
}

popupProfileOpenBtn.addEventListener("click", openProfilePopup);

popups.forEach((popup) => { 
  popup.addEventListener("mousedown", (evt) => {    
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  })
})

const formProfile = document.querySelector(".popup__form_profile");

function submitProfileForm(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  disableSubmitButton(popupEditProfile);
  closePopup(popupEditProfile);
}

formProfile.addEventListener("submit", submitProfileForm);

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

//-----------------------popup name="addCard"---------------------------------------------

const popupAddCard = document.querySelector(".popup_element"); 
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const titleInput = document.querySelector(".popup__input_type_title");
const imageInput = document.querySelector(".popup__input_type_link");
const popupPhoto = document.querySelector(".popup_photo");
const photoClose = popupPhoto.querySelector(".popup__close");
const formCard = document.querySelector(".popup__form_card");
const cardListElement = document.querySelector(".elements__list");


function openCardPopup () {
  openPopup(popupAddCard);
}
popupCardOpenBtn.addEventListener("click", openCardPopup);


function renderElements(renderedCard) {
  const newCard = createCard(renderedCard);
  cardListElement.prepend(newCard);
}

initialCards.map(renderElements); 

function createCard(renderedCard) {
  const card = new Card(renderedCard, '.card-template');
  const createdCardElement = card.generateCard();
  return createdCardElement;
}

function handleSubmitCard(event) {
  event.preventDefault();
  const renderedCard = {
    name: titleInput.value,
    link: imageInput.value,
  };
  renderElements(renderedCard);
  event.currentTarget.reset();
  disableSubmitButton(popupAddCard);
  closePopup(popupAddCard);
}

formCard.addEventListener("submit", handleSubmitCard);


//(6) попап с картинкой
const photoFull = document.querySelector(".popup__photo");
const photoFullTitle = document.querySelector(".popup__photo-title");

const openPhoto = (link, name) => {
  photoFullTitle.textContent = name;
  photoFull.alt = name;
  photoFull.src = link;
  openPopup(popupPhoto);
}; 

function closePhoto() {
  closePopup(popupPhoto);
}

photoClose.addEventListener("click", closePhoto);

//esc
const popupEscHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);    
  }  
};

//overlay
const popupOverlayHandler = (evt) => {  
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }  
};

function disableSubmitButton(formElement) {
  const buttonElement = formElement.querySelector(".popup__submit");
  buttonElement.disabled = true;
  buttonElement.classList.add("popup__submit_invalid");
}

///validation
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__input_state_invalid",
};

const editFormValidation = new FormValidator(validationConfig, formProfile);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(validationConfig, formCard);
addFormValidation.enableValidation();


export { openPhoto };