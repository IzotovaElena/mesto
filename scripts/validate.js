//5)
const showError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

//6)
const hideError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(config.inputErrorClass);
};

//(8)
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__input_state_invalid",
};

//1)
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector); //поиск всех форм
  Array.from(forms).forEach((formElement) => {
    //перебор форм с приводом к массиву
    setEventListeners(formElement, validationConfig); //отмена отправки формы
  });  
};

//4)
const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid; //переменная хранит невалидное состояние элемента
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //поиск элемента с ошибкой в инпуте которого сейчас происходит ввод
  
  if (isInputNotValid) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
};

//7)
const toggleButtonState = (button, isActive, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }
};


//2) установка обработчиков
const setEventListeners = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector); //все инпуты формы
  const submitButton = formElement.querySelector(config.submitButtonSelector); //метод менющий состояние кнопки
  const isFormValid = formElement.checkValidity();
  toggleButtonState(submitButton, isFormValid, config);
  //3)
  Array.from(inputsList).forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      const isFormValid = formElement.checkValidity(); //Проверяет значение элемента на соответствие его ограничениям
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(submitButton, isFormValid, config);      
    });
  });
};

enableValidation(validationConfig);
