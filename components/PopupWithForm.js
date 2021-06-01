// наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.


import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

  }

  setEventListeners() {
    super.setEventListeners();
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }


  _getInputValues() {
    this._formValues = {};     // создаём пустой объект
    const inputList = [...this._popupContainer.querySelectorAll('.popup__field')];
    inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });    // добавляем в этот объект значения всех полей

    return this._formValues; // возвращаем объект значений
  }

  close() {
    super.close();
    this._popupContainer.reset();
  }

}


