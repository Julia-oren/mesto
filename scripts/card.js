
import { openPopup, closePopup, popupOpenImage, popupBigImage, popupBigImageCaption, popupCloseImage } from './index.js'


export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  }// данные name,link, alt переданы в объект data

  _getTemplate() {
    const newElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return newElement;
  } //this._cardSelector = document.querySelector(".element__template");
  //находим template элемент,
  //извлекаем содержимое, клон element и возврат клона

  generateCard() {
    this._element = this._getTemplate(); //запись разметки
    this._setEventListeners();
    this._element.querySelector(".element__title").textContent = this._name; // данные названия
    this._element.querySelector(".element__image").src = this._link; // данные ссылки
    this._element.querySelector(".element__image").alt = this._name; // данные для альт
    return this._element; //возврат элемента
  }

  _deleteCard() {
    const buttonDelete = this._element.querySelector(".element__delete-button");
    const currentCart = buttonDelete.closest('.element');
    currentCart.remove();
  }//?

  _toPutLike() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
  }; //Лайк

  _handleOpenImagePopup() {
    popupBigImageCaption.textContent = this._name;
    popupBigImage.src = this._link;
    popupBigImage.alt = this._name;

    openPopup(popupOpenImage)
  } // открытие большой картинки

  _handleCloseImagePopup() {
    popupBigImageCaption.textContent = '';
    popupBigImage.src = '';
    popupOpenImage.alt = '';

    closePopup(popupOpenImage)
  } //закрытие большой картинки

  _setEventListeners() {
    const elementImage = this._element.querySelector(".element__image");
    const likeButton = this._element.querySelector(".element__like-button");
    const buttonDelete = this._element.querySelector(".element__delete-button");
    elementImage.addEventListener('click', () => {
      this._handleOpenImagePopup();
    });//открытие попапа с картинкой
    popupCloseImage.addEventListener('click', () => {
      this._handleCloseImagePopup()
    }); //закрытие большой картинки при клике на "крест"
    likeButton.addEventListener('click', () => {
      this._toPutLike()
    }); // лайк
    buttonDelete.addEventListener('click', () => {
      this._deleteCard()
    }); // удаление
  } // приватный метод для слушателя
}

