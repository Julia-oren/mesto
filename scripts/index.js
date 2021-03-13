const openButtonEdit = document.querySelector('.profile__edit-button'); //Определили кнопку, которая редактирует профиль//
const popup = document.querySelector('.popup'); //Определили элемента отвечаещего за отображение попапа//
const buttonSave = document.querySelector('.popup__button-save');
const openButtonAdd = document.querySelector('.profile__add-button');
const openPopupEdit = document.querySelector('#popup_edit');
const openPopupAdd = document.querySelector('#popup_add');
const formElementEdit = popup.querySelector('#container-edit');

const closePopupAdd = document.querySelector('#button-close_add');
const closePopupEdit = document.querySelector('#button-close_edit');
const closePopupImage = document.querySelector('#button-close_image');
const nameInput = popup.querySelector('#name');
const jobInput = popup.querySelector('#activity');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__activity');
const formElementAdd = document.querySelector('#container-add');
const buttonCreateCard = formElementAdd.querySelector('#create'); // кнопка сохранить формы добавления
const elementTemplate = document.querySelector(".element__template");
const elementsZone = document.querySelector(".elements__zone");
const openImage = document.querySelector('.element__image');
const openPopupImage = document.querySelector('#popup_image');


const initialCards = [
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




function createCardDomNode(item) {
const newElement = elementTemplate.content.cloneNode(true);
const elementTitle = newElement.querySelector(".element__title");
const elementLinkImage = newElement.querySelector(".element__image");
const deleteButton =  newElement.querySelector(".element__delete-button");
elementTitle.textContent = item.name;
elementLinkImage.src = item.link;
elementLinkImage.alt = item.name;

elementLinkImage.addEventListener ('click', openBigImage); //открытие большой картинки
deleteButton.addEventListener ('click', deleteCard); //удаление карточки


newElement.querySelector('.element__like-button').addEventListener('click', function toPutLike (evt) {
  evt.target.classList.toggle('element__like-button_active')
}); // лайк

return newElement
}


function renderList () {
  const element= initialCards.map(createCardDomNode);
  elementsZone.append(...element);
}

function createCardNew (evt) {
  evt.preventDefault();
  const placeTitle = formElementAdd.querySelector('#place');
  const placeLink = formElementAdd.querySelector('#url-place');
  const placeNewTitle = placeTitle.value;
  const placeNewLink = placeLink.value;
  const newPlace = createCardDomNode({name: placeNewTitle, link: placeNewLink});

  elementsZone.prepend(newPlace);

  placeTitle.value = '';
  placeLink.value = '';
}

renderList();

formElementAdd.addEventListener('submit', createCardNew);

function openBigImage(evt) {
  const bigImageTarget = evt.target;
  const textBigImage = bigImageTarget.parentNode.querySelector('.element__title').textContent
  const urlBigImage = bigImageTarget.parentNode.querySelector('.element__image').src;
  const altBigImage = bigImageTarget.parentNode.querySelector('.element__image').alt;
  const popupBigimage = document.querySelector(".popup__big-image");
  const popupBigImageCaption = document.querySelector(".popup__big-image-caption");
  popupBigImageCaption.textContent=textBigImage;
  popupBigimage.src=urlBigImage;
  openPopupImage.alt=altBigImage;

  openPopup(openPopupImage);
}

function deleteCard(evt) {
  const target = evt.target;
  const currentCart = target.closest('.element');

  currentCart.remove();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
} //общая функция открытия

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} //общая функция закрытия


// Автоматическое заполнение полей при открытии формы редактирования данных
function fillindPopupEdit() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(openPopupEdit);
}


function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}

formElementEdit.addEventListener('submit', handleFormSubmit);

openButtonEdit.addEventListener('click', function (){
  fillindPopupEdit();
});

openButtonAdd.addEventListener('click', function () {
  openPopup(openPopupAdd);
});



openPopupEdit.addEventListener('click', (event) => {
  if (event.target === event.currentTarget){
    closePopup(openPopupEdit);
  }
});

openPopupAdd.addEventListener('click', (event) => {
  if (event.target === event.currentTarget){
    closePopup(openPopupAdd);
  }
});


closePopupAdd.addEventListener('click', function () {
  closePopup(openPopupAdd);
});//закрытие формы добавления

closePopupEdit.addEventListener('click', function () {
  closePopup(openPopupEdit);
}); //закрытие формы редактирования

closePopupImage.addEventListener('click', function () {
  closePopup(openPopupImage);
});

buttonSave.addEventListener('click', function () {
  closePopup(popup);
});//вызов функции при закрытии и сохранении формы редактирования данных


buttonCreateCard.addEventListener('click', function () {
  closePopup(openPopupAdd);
});


