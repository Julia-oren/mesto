// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// export const popupAdd = document.querySelector('#popup_add');



export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpenedSelector = 'popup_opened';


  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close = () => {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  } // возможно стрелочная функция

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
     this.close();
    }
  }// закрытие попапа по Escape


 // закрытие по клику на оверлей и кнопку

setEventListeners() {
  const popupButtonClose = this._popup.querySelector('.popup__button-close');
  popupButtonClose.addEventListener('click',  () => {
    this.close();
    });
    this._popup.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.close();;
      }
  })
  }
}
