
export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._formElement = formElement;
    this._submitButton = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
    this._inputsList = formElement.querySelectorAll(
      validationConfig.inputSelector
    );
  }

  _showError(errorElement, inputElement) {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideError(errorElement, inputElement) {
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    if (isInputNotValid) {
      this._showError(errorElement, inputElement);
    } else {
      this._hideError(errorElement, inputElement);
    }
  };

  _toggleButtonState = (isActive) => {
    if (isActive) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  };

  _setEventListeners = () => {
    const isFormValid = this._formElement.checkValidity();
    this._toggleButtonState(isFormValid);

    Array.from(this._inputsList).forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        const isFormValid = this._formElement.checkValidity();
        this._checkInputValidity(inputElement);
        this._toggleButtonState(isFormValid);
      });
    });    
  };

  enableValidation() {
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

//export { FormValidator, validationConfig };