import "./index.css"
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"
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
} from "../utils/constants.js";

const editFormValidation = new FormValidator(validationConfig, formProfile);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(validationConfig, formCard);
addFormValidation.enableValidation();

const profileInfo = new UserInfo({ //попап с информацией
  userName: profileName,
  userInfo: profileJob
})

const openProfilePopup = () => { //попап редактирование профиля
  editFormValidation.toggleButtonState(false);
  const data = profileInfo.getUserInfo();
  nameInput.value = data.userNameValue;
  jobInput.value = data.userInfoValue;
  
  popupUserForm.open()
}  

popupProfileOpenBtn.addEventListener("click", openProfilePopup);
const popupUserForm = new PopupWithForm({
  popup: popupEditProfile,
  submitProfileForm: () => {
    profileInfo.setUserInfo(nameInput, jobInput);    
    popupUserForm.close();
  },
});

popupUserForm.setEventListeners()

//--------------------------------------------------------------------
function openCardPopup() {
  addFormValidation.toggleButtonState(false);
  popupNewCardForm.open();
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
const popupNewCardForm = new PopupWithForm({
  popup: popupAddCard,
  submitProfileForm: () => {
    const item = {
      name: titleInput.value,
      link: imageInput.value,
    };
    const newCard = createCard(item);
    cardsList.addNewItem(newCard);
    popupNewCardForm.close();
  },
});

popupNewCardForm.setEventListeners();
//---------------------------------------------------------------------
const openPhoto = new PopupWithImage(photoFull) //попап с картинкой PopupWithImage
openPhoto.setEventListeners()

