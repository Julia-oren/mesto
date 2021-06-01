export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const buttonOpenEdit = document.querySelector('.profile__edit-button'); //Определили кнопку, которая редактирует профиль//
export const buttonOpenAdd = document.querySelector('.profile__add-button');
export const popupEdit = document.querySelector('#popup_edit');
export const popupAdd = document.querySelector('#popup_add');
export const formElementEdit = popupEdit.querySelector('#container-edit');
export const popupCloseAdd = document.querySelector('#button-close_add');
export const popupCloseEdit = document.querySelector('#button-close_edit');
export const popupCloseImage = document.querySelector('#button-close_image');
export const nameInput = popupEdit.querySelector('#name');
export const jobInput = popupEdit.querySelector('#activity');
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__activity');
export const formElementAdd = document.querySelector('#container-add');
export const elementsZone = document.querySelector(".elements__zone");
export const popupOpenImage = document.querySelector('#popup_image');
export const popupBigImage = document.querySelector(".popup__big-image");
export const popupBigImageCaption = document.querySelector(".popup__big-image-caption");
export const placeTitle = formElementAdd.querySelector('#place');
export const placeLink = formElementAdd.querySelector('#url-place');
export const elementLinkImage = document.querySelector(".element__image");
