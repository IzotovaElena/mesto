const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.profile__edit-button')
const popupCloseBtn = popup.querySelector('.popup__close')

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__bio')

let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");

function popupToggle() { 
  popup.classList.toggle('popup_opened')
  if (popup.classList.contains('popup_opened')) {   

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
  } 
}

popupOpenBtn.addEventListener('click', popupToggle)
popupCloseBtn.addEventListener('click', popupToggle)

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault() // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже. 

  let nameValue = nameInput.value
  let jobValue = jobInput.value // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

  profileName.textContent = nameValue
  profileJob.textContent = jobValue// Вставьте новые значения с помощью textContent
  popupToggle()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)