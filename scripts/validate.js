//(8)
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErroClass: "popup__input_state_invalid",
};

//1)
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector); //поиск всех форм
  Array.from(forms).forEach((formElement) => { //перебор форм с приводом к массиву
    setEventListeners(formElement, validationConfig); //отмена отправки формы
  });
};

//2) установка обработчиков
const setEventListeners = (formElement, config) => {  
  const inputsList = formElement.querySelectorAll(config.inputSelector); //все инпуты формы
  const submitButton = formElement.querySelector(config.submitButtonSelector); //метод менющий состояние кнопки
  const isFormValid = formElement.checkValidity(); //Проверяет значение элемента на соответствие его ограничениям

  //3)
  Array.from(inputsList).forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config); //.inputErrorClass
      toggleButtonState(submitButton, isFormValid, config); 
    });
  });

  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
}

//4) 
const checkInputValidity = (formElement, inputElement, config) => {
  
  const isInputNotValid = !inputElement.validity.valid; //переменная хранит невалидное состояние элемента
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //поиск элемента с ошибкой в инпуте которого сейчас происходит ввод
  console.log("errorElement", errorElement);
  console.log("inputElement", inputElement);
  console.log("inputElementid", `#${inputElement.id}-error`);
    if (isInputNotValid) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
}

//5) 
const showError = (errorElement, inputElement, config) => {  
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErroClass);
}

//6)
const hideError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(config.inputErroClass);
};

//7)
const toggleButtonState = (button, isActive, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  }
}

enableValidation(validationConfig);