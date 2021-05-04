export const formCofiguration = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_invalid',
  inputErrorClass: 'popup__filed_input-error',
  errorClass: 'popup__input-error_visible'
};

export class FormValidator {
  constructor(formCofiguration, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(formCofiguration.inputSelector));
    this._buttonElement = this._formElement.querySelector(formCofiguration.submitButtonSelector);
    this._inactiveButtonClass = formCofiguration.inactiveButtonClass;
    this._inputErrorClass = formCofiguration.inputErrorClass;
    this._errorClass = formCofiguration.errorClass;
  }

  // Навешивание слушателей для полей формы
  _setInputListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInput(inputElement);  //проверка валидностей полей
        this._toggleButtonState()
      }); //переключение состояния конопки (вкл/выкл)
    });
  }

  //Функция выключения кнопки
  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList) || this._checkFilledAllInputs(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass); //добавление стиля не активной кнопки
      this._buttonElement.setAttribute('disable', true); //отключение кнопки
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);//удаление стиля не активной кнопки
      this._buttonElement.removeAttribute('disable'); //включение кнопки
    }
  };


  //функция проверки заполнения всех форм
  _checkFilledAllInputs(inputList) {
    return !inputList.some(inputElement =>
      inputElement.value.length > 0);
  };



  //функция если не валидный инпут
  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  };

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);//показ  ошибки
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);//показ красной линии
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);//удаление  ошибки
    errorElement.classList.remove(this._errorClass);//удаление красной линии
  };

  //функция проверки поля на валидацию
  _checkInput = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement); // отображать красную линию и не выводить ошибку
    } else {
      this._showInputError(inputElement, inputElement.validationMessage); //  отображать красную линию и  выводить ошибку
    }
  };



  enableValidation() {
    this._setInputListeners(this._formElement);
    this._toggleButtonState(this._inputList, this._buttonElement)
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
      this._toggleButtonState(this._inputList, this._buttonElement)
    })
  }

}
