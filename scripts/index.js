const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.profile__edit-button')
const popupSaveBtn = popup.querySelector('.popup__submit')
const popupCloseBtn = popup.querySelector('.popup__close')

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__bio')

function popupToggle() { 
  popup.classList.toggle('popup_opened')
  if (popup.classList.contains('popup_opened')) {
    let nameInput = document.querySelector('.popup__input-name')// Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__input-job')// Воспользуйтесь инструментом .querySelector()

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
  } 
}

popupOpenBtn.addEventListener('click', popupToggle)
popupCloseBtn.addEventListener('click', popupToggle)

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = document.querySelector('.popup__input-name')// Воспользуйтесь инструментом .querySelector()
// let jobInput = document.querySelector('popup__input-job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault() // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже. 



  // Находим поля формы в DOM
  let nameInput = document.querySelector('.popup__input-name')// Воспользуйтесь инструментом .querySelector()
  let jobInput = document.querySelector('.popup__input-job')// Воспользуйтесь инструментом .querySelector()
 
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