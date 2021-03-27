const buttonOpenEdit = document.querySelector('.profile__edit-button'); //Определили кнопку, которая редактирует профиль//
const buttonSave = document.querySelector('.popup__button-save');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup_edit');
const popupAdd = document.querySelector('#popup_add');
const formElementEdit = popupEdit.querySelector('#container-edit');
const popupCloseAdd = document.querySelector('#button-close_add');
const popupCloseEdit = document.querySelector('#button-close_edit');
const popupCloseImage = document.querySelector('#button-close_image');
const nameInput = popupEdit.querySelector('#name');
const jobInput = popupEdit.querySelector('#activity');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__activity');
const formElementAdd = document.querySelector('#container-add');
const buttonCreateCard = formElementAdd.querySelector('#create'); // кнопка сохранить формы добавления
const elementTemplate = document.querySelector(".element__template");
const elementsZone = document.querySelector(".elements__zone");
const popupOpenImage = document.querySelector('#popup_image');
const popupBigImage = document.querySelector(".popup__big-image");
const popupBigImageCaption = document.querySelector(".popup__big-image-caption");



function createCardDomNode(item) {
const newElement = elementTemplate.content.cloneNode(true);
const elementTitle = newElement.querySelector(".element__title");
const elementLinkImage = newElement.querySelector(".element__image");
const buttonDelete =  newElement.querySelector(".element__delete-button");
elementTitle.textContent = item.name;
elementLinkImage.src = item.link;
elementLinkImage.alt = item.name;


buttonDelete.addEventListener ('click', deleteCard); //удаление карточки

elementLinkImage.addEventListener ('click', function () {
  popupBigImageCaption.textContent = elementTitle.textContent;
  popupBigImage.src = elementLinkImage.src;
  popupOpenImage.alt = elementTitle.textContent;

  openPopup(popupOpenImage);
});  //открытие большой картинки


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

  closePopup(popupAdd);
}

renderList();

formElementAdd.addEventListener('submit', createCardNew);



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
  openPopup(popupEdit);
}


function submitProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', submitProfileForm);


buttonOpenEdit.addEventListener('click', function (){
  fillindPopupEdit();
});

buttonOpenAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});


// закрытие попапов по Esc
document.addEventListener('keydown', (event) => closePopupEscape(event));

function closePopupEscape(event) {
  closeEscape(popupEdit);
  closeEscape(popupAdd);
  closeEscape(popupOpenImage);
};

function closeEscape (popup) {
  if (event.key === 'Escape') {
    closePopup(popup)
}
};


// закрытие по клику на оверлей

popupEdit.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget){
    closePopup(popupEdit);
  }
});

popupAdd.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget){
    closePopup(popupAdd);
  }
});

popupOpenImage.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget){
    closePopup(popupOpenImage);
  }
});



// закрытие по клику на кнопку закрытия
popupCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});//закрытие формы добавления

popupCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);
}); //закрытие формы редактирования

popupCloseImage.addEventListener('click', function () {
  closePopup(popupOpenImage);
});


