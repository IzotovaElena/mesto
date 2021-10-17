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
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup)
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  })
})

const formProfile = document.querySelector(".popup__form_profile");

function handleSubmitForm(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value; 
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue; 
  closePopup(popupEditProfile); 
}

formProfile.addEventListener("submit", handleSubmitForm);


//popup name="addCard"

const popupAddCard = document.querySelector(".popup_element"); 
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const popupCardCloseBtn = popupAddCard.querySelector(".popup__close_card");
const titleInput = document.querySelector(".popup__input_type_title");
const imageInput = document.querySelector(".popup__input_type_link");
const popupPhoto = document.querySelector(".popup_photo");
const photoClose = popupPhoto.querySelector(".popup__close");
const cardDeleteButtons = document.querySelectorAll(".element__delete");

// (1) Добавление элементов из имеющегося массива
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
const cardListElement = document.querySelector(".elements__list");
const cardTemplateElement = document.querySelector(".card-template");

function createCard(item) {
  const newCard = cardTemplateElement.content.cloneNode(true);
  newCard.querySelector(".element__title").textContent = item.name;
  newCard.querySelector(".element__image").src = item.link;
  newCard.querySelector(".element__image").alt = item.name;
  newCard.querySelector(".element__like").addEventListener("click", likeToggle);
  newCard.querySelector(".element__delete").addEventListener("click", deleteCard);
  newCard.querySelector(".element__image").addEventListener("click", () =>  openPhoto(item.link, item.name));  
  return newCard;
}

function renderElements(item) {
  const newCard = createCard(item);
  cardListElement.prepend(newCard);
}

initialCards.map(renderElements);

// (2) Открытие формы создания карточки
function openCardPopup () {
  openPopup(popupAddCard);
}

popupCardOpenBtn.addEventListener("click", openCardPopup);

//(4) Лайк
function likeToggle(evt) {
  evt.target.classList.toggle("element__like_active");
}

// (5) Удаление карточки
function deleteCard(evt) {
  const elementDelete = evt.target.closest(".element");
  elementDelete.remove();
}

//(3) создание новой карточки
const formCard = document.querySelector(".popup__form_card");
const cardTitle = document.querySelector(".element__title");
const cardLink = document.querySelector(".element__image");

const cardTitleValue = document.querySelector(".popup__input_type_title");
const cardImageValue = document.querySelector(".popup__input_type_link");

function handleSubmitCard(event) {
  event.preventDefault();
  
const cardTitleValue = titleInput.value;
const cardImageValue = imageInput.value; 

  renderElements({
    name: cardTitleValue,
    link: cardImageValue,
  });

  event.currentTarget.reset();
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