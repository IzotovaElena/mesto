//npm run dev запуск перед изменениями
//NPM RUn build подготовливает сайт к продакшену(размещению на сервере) 

import "./pages/index.css"
import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js"
import Section from "./components/Section.js"
import PopupWithImage from "./components/PopupWithImage.js"
import PopupWithForm from "./components/PopupWithForm.js"
import UserInfo from "./components/UserInfo.js"
import {
  validationConfig,
  initialCards,
  cardListElement,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  popupEditProfile,
  popupProfileOpenBtn,
  popupCardOpenBtn,
  photoFull,
  popupAddCard,
  titleInput,
  imageInput,
  formProfile,
  formCard,
} from "./utils/constants.js";

const editFormValidation = new FormValidator(validationConfig, formProfile);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(validationConfig, formCard);
addFormValidation.enableValidation();

const profileInfo = new UserInfo({ //попап с информацией
  userNameSelector: profileName,
  userInfoSelector: profileJob
})

const openProfilePopup = () => { //попап редактирование профиля
  const data = profileInfo.getUserInfo();
  nameInput.value = data.userName;
  jobInput.value = data.userInfo;
  
  popupUserForm.open()
}  

popupProfileOpenBtn.addEventListener("click", openProfilePopup);
const popupUserForm = new PopupWithForm({
  popupSelector: popupEditProfile,
  submitProfileForm: () => {
    profileInfo.setUserInfo(nameInput, jobInput);    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupUserForm.close();
  },
});

popupUserForm.setEventListeners()

//--------------------------------------------------------------------
function openCardPopup() {  
  handleSubmitCard.open();
}
popupCardOpenBtn.addEventListener("click", openCardPopup);

const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      openPhoto.open(item)
    }
  }, ".card-template");
  const createdCardElement = card.generateCard();
  return createdCardElement;
}

const cardsList = new Section(//Карточки из массива
  { items: initialCards,
    renderer: (item) => {
      const element = createCard(item)
      cardsList.addItem(element)
    }
  }, cardListElement)
cardsList.renderItems()
//------------------------------------------------------------
const handleSubmitCard = new PopupWithForm ({
  popupSelector: popupAddCard,
  submitProfileForm: () => {
  const item = {
    name: titleInput.value,
    link: imageInput.value,
  };
  const newCard = createCard(item)  
  cardsList.addItem(newCard)
  handleSubmitCard.close();
  }
})

handleSubmitCard.setEventListeners()
//---------------------------------------------------------------------
const openPhoto = new PopupWithImage(photoFull) //попап с картинкой PopupWithImage
openPhoto.setEventListeners()

