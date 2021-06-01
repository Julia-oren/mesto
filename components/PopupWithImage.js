// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.


import { Popup } from './Popup.js'


export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector)
    this._popupBigImageCaption = this._popup.querySelector('.popup__big-image-caption');
    this._popupBigImage = this._popup.querySelector('.popup__big-image');
  }

  openPopup (name, link) {
    super.openPopup();
    this._popupBigImageCaption.textContent = name;
    this._popupBigImage.src = link;
    this._popupBigImage.alt = name;
  }

}
