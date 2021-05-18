import { Card } from './card.js'
import { initialCards } from './initial-cards.js'
import { formCofiguration, FormValidator } from './formValidator.js'
const buttonOpenEdit = document.querySelector('.profile__edit-button'); //Определили кнопку, которая редактирует профиль//
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup_edit');
const popupAdd = document.querySelector('#popup_add');
const formElementEdit = popupEdit.querySelector('#container-edit');
const popupCloseAdd = document.querySelector('#button-close_add');
const popupCloseEdit = document.querySelector('#button-close_edit');
export const popupCloseImage = document.querySelector('#button-close_image');
const nameInput = popupEdit.querySelector('#name');
const jobInput = popupEdit.querySelector('#activity');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__activity');
const formElementAdd = document.querySelector('#container-add');
const elementsZone = document.querySelector(".elements__zone");
export const popupOpenImage = document.querySelector('#popup_image');
export const popupBigImage = document.querySelector(".popup__big-image");
export const popupBigImageCaption = document.querySelector(".popup__big-image-caption");
const placeTitle = formElementAdd.querySelector('#place');
const placeLink = formElementAdd.querySelector('#url-place');
export const elementLinkImage = document.querySelector(".element__image");
const validateFormEdit = new FormValidator(formCofiguration, popupEdit);
const validateFormAdd = new FormValidator(formCofiguration, popupAdd);



initialCards.forEach((item) => {
  const card = new Card(item, '.element__template'); //объект data передан аргументом
  const cardElement = card.generateCard();
  elementsZone.append(cardElement); //Добавляем в DOM
});  //обошли массив, подготовили карточку к публикации и вернули результат, опубликовали карточку в .elements__zone



function handleCreateCard(evt) {
  evt.preventDefault();

  const placeNewTitle = placeTitle.value;
  const placeNewLink = placeLink.value;
  const newPlace = { name: placeNewTitle, link: placeNewLink };
  const card = new Card(newPlace, '.element__template');

  elementsZone.prepend(card.generateCard()); //отображение карточек
  placeTitle.value = '';
  placeLink.value = '';

  closePopup(popupAdd);
}


formElementAdd.addEventListener('submit', handleCreateCard);


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('mousedown', closePopupOverley)

} //общая функция открытия

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('mousedown', closePopupOverley)
} //общая функция закрытия


// Автоматическое заполнение полей при открытии формы редактирования данных
function fillInputsEdit() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
}


function submitProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', submitProfileForm);


buttonOpenEdit.addEventListener('click', function () {
  validateFormEdit.reset()
  fillInputsEdit();

});

buttonOpenAdd.addEventListener('click', function () {
  validateFormAdd.reset()
  openPopup(popupAdd);
  placeTitle.value = '';
  placeLink.value = '';

});


// закрытие попапа по Escape
function closePopupEscape(event) {
  if (event.key === 'Escape') {
    const visiblePopup = document.querySelector('.popup_opened');
    closePopup(visiblePopup);
  }
}


// закрытие по клику на оверлей

function closePopupOverley(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
};


// закрытие по клику на кнопку закрытия
popupCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);

});//закрытие формы добавления

popupCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);

}); //закрытие формы редактирования

validateFormAdd.enableValidation()
validateFormEdit.enableValidation()
