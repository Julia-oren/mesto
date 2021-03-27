// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const formCofiguration = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_invalid',
  inputErrorClass: 'popup__filed_input-error',
  errorClass: 'popup__input-error_visible'
};




//Навешивание слушателей для полей формы
const setInputListeners = (form, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(form.inputSelector));
  const buttonElement = formElement.querySelector(form.submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(form, formElement, inputElement);  //проверка валидностей полей
      toggleButtonState(form, inputList, buttonElement)
    }); //переключение состояния конопки (вкл/выкл)

    toggleButtonState(form, inputList, buttonElement);
  }
  );
}

//Функция выключения кнопки
const toggleButtonState = (form, inputList, buttonElement) => {
  if (hasInvalidInput(inputList) || checkFilledAllInputs(inputList)) {
    buttonElement.classList.add(form.inactiveButtonClass); //добавление стиля не активной кнопки
    buttonElement.setAttribute('disable', true); //отключение кнопки
  } else {
    buttonElement.classList.remove(form.inactiveButtonClass);//удаление стиля не активной кнопки
    buttonElement.removeAttribute('disable'); //включение кнопки
  }
};


//функция проверки заполнения всех форм
const checkFilledAllInputs = (inputList) => {
  return !inputList.some(inputElement =>
    inputElement.value.length > 0);
};



//функция если не валидный инпут
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};



// Функция, которая добавляет класс с ошибкой
const showInputError = (form, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(form.inputErrorClass);//показ  ошибки
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(form.errorClass);//показ красной линии
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (form, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(form.inputErrorClass);//удаление  ошибки
  errorElement.classList.remove(form.errorClass);//удаление красной линии
};

//функция проверки поля на валидацию
const checkInput = (form, formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError(form, formElement, inputElement); // отображать красную линию и не выводить ошибку
  } else {
    showInputError(form, formElement, inputElement); //  отображать красную линию и  выводить ошибку
  }
};

const enableValidation = (form) => {
  const formList = Array.from(document.querySelectorAll(form.formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (event) => { event.preventDefault(); });

    setInputListeners(form, formElement);
  });//Навешивание слушателей для полей формы
}


enableValidation(formCofiguration);



