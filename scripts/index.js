//popup name="editProfile"

const popupEditProfile = document.querySelector(".popup_profile");
const popupProfileOpenBtn = document.querySelector('.profile__edit-button')
const popupProfileCloseBtn = popupEditProfile.querySelector(".popup__close_profile");
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector(".profile__bio");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
}

function profileToggle() { 
  togglePopup(popupEditProfile);
  if (popupEditProfile.classList.contains('popup_opened')) {   

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
  } 
}
popupProfileOpenBtn.addEventListener("click", profileToggle);
popupProfileCloseBtn.addEventListener("click", profileToggle);

const formProfile = document.querySelector(".popup__form_profile");

function formSubmitHandler (evt) {
  evt.preventDefault() 

  let nameValue = nameInput.value
  let jobValue = jobInput.value // Получите значение полей из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = nameValue
  profileJob.textContent = jobValue// Вставьте новые значения с помощью textContent
  profileToggle()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', formSubmitHandler)


//popup name="addCard"

const popupAddCard = document.querySelector(".popup_element");
const popupCardOpenBtn = document.querySelector(".profile__add-button");
const popupCardCloseBtn = popupAddCard.querySelector(".popup__close_card");
const titleInput = document.querySelector(".popup__input_type_title");
const imageInput = document.querySelector(".popup__input_type_link");
const popupPhoto = document.querySelector(".popup_photo");
const photoClose = popupPhoto.querySelector(".popup__close"); 

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
  newCard.querySelector(".element__image").addEventListener("click", openPhoto);
  return newCard;
}

function renderElements(item) {
  
  const newCard = createCard(item);
  cardListElement.prepend(newCard); 
}

initialCards.map(renderElements);

// (2) Открытие формы создания карточки
function cardToggle() {
  togglePopup(popupAddCard);  
}

popupCardOpenBtn.addEventListener("click", cardToggle);
popupCardCloseBtn.addEventListener("click", cardToggle);

//(4) Лайк
function likeToggle(evt) {
  evt.target.classList.toggle("element__like_active"); 
}


// (5) Удаление карточки
const cardDeleteButtons = document.querySelectorAll(".element__delete");
cardDeleteButtons.forEach(function (button) {
  button.addEventListener("click", deleteCard);
});
function deleteCard(evt) {
  const elementDelete = evt.target.closest(".element");
  elementDelete.remove();
}

//(3) создание новой карточки

const formCard = document.querySelector(".popup__form_card");
const cardTitle = document.querySelector(".element__title");
const cardLink = document.querySelector(".element__image");

function cardSubmitHandler(event) {
  event.preventDefault(); 

  const cardTitleValue = event.currentTarget.querySelector(".popup__input_type_title").value;
  const cardImageValue = event.currentTarget.querySelector(".popup__input_type_link").value;

  renderElements({
    name: cardTitleValue,
    link: cardImageValue,
  });
  
  event.currentTarget.reset();
  cardToggle();   
}

formCard.addEventListener("submit", cardSubmitHandler);


//(6) попап с картинкой

const photoFull = document.querySelector(".popup__photo");
const photoFullTitle = document.querySelector(".popup__photo-title");

function openPhoto(event) {
  const link = event.target.currentSrc;
  const title = event.currentTarget.nextElementSibling.innerText;
  const alt = event.currentTarget.nextElementSibling.innerText;
  
  photoFull.src = link; 
  photoFullTitle.innerText = title;
  photoFullTitle.innerText = alt;
  
  togglePopup(popupPhoto);  
}

function closePhoto() {
  togglePopup(popupPhoto);
}

photoClose.addEventListener("click", closePhoto);
