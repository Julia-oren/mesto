let openButton = document.querySelector('.profile__edit-button'); //Определили кнопку, которая редактирует профиль//
let popup = document.querySelector('.popup'); //Определили элемента отвечаещего за отображение попапа//
let closeButton = popup.querySelector('.popup__button-close');
let buttonSave = popup.querySelector('.popup__button-save');
let openPopup = document.querySelector('.profile__edit-button');

let togglePopup = () => {
  popup.classList.toggle('popup_opened');
 if (popup.classList.contains('popup_opened')) {
  let name = popup.querySelector('#name');
  let job = popup.querySelector('#activity');
  let nameProfile = document.querySelector('.profile__name');
  let jobProfile = document.querySelector('.profile__activity');
  name.value = nameProfile.textContent;
  job.value = jobProfile.textContent;
 }
}


//установка отслеживания действия пользователя - открытие попапа, закрытие попапа

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget){
    togglePopup();
  }
}) //закрытие попапа при клике за область контейнера с попапоп

// Находим форму в DOM
let formElement = popup.querySelector('.popup__container');


function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

// Находим поля формы в DOM
let nameInput = popup.querySelector('#name');
let jobInput = popup.querySelector('#activity');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__activity');
nameProfile.textContent = nameInput.value;
jobProfile.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
buttonSave.addEventListener('click', togglePopup);
