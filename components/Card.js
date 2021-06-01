
import {
  popupOpenImage,
  popupBigImage,
  popupBigImageCaption,
  popupCloseImage } from '../utils/constants.js'

  // import { openPopup, closePopup } from '../pages/index.js'



export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.remove()
     this._element = null;
  }//?

  _toPutLike() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
  }; //Лайк



  _setEventListeners() {
    const elementImage = this._element.querySelector(".element__image");
    const likeButton = this._element.querySelector(".element__like-button");
    const buttonDelete = this._element.querySelector(".element__delete-button");



    elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });//открытие попапа с картинкой использование PopupWithImage.open


    likeButton.addEventListener('click', () => {
      this._toPutLike()
    }); // лайк
    buttonDelete.addEventListener('click', () => {
      this._deleteCard()
    }); // удаление
  } // приватный метод для слушателя
}

