import { Section } from '../components/Section.js'
import { Card } from '../components/Card.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'
import { formCofiguration, FormValidator } from '../components/FormValidator.js'
import { initialCards,
  buttonOpenEdit,
  buttonOpenAdd,
  popupEdit,
  popupAdd,
  nameInput,
  jobInput,
  placeTitle,
  placeLink
 } from '../utils/constants.js'

//


const validateFormEdit = new FormValidator(formCofiguration, popupEdit); //popupEdit
const validateFormAdd = new FormValidator(formCofiguration, popupAdd); //popupAdd
const popupWithImage = new PopupWithImage('#popup_image'); // попап с большой картинкой popupOpenImage '#popup_image'
validateFormAdd.enableValidation()
validateFormEdit.enableValidation()


//функция для открытия полного изображения
function openImage(name, link) {
  popupWithImage.openPopup(name, link);
}
popupWithImage.setEventListeners();

//добавление карточек
function createCard(item) {
  const card = new Card({ name: item.name, link: item.link }, '.element__template', openImage);
  const cardElement = card.generateCard();
  return cardElement;
};

// создание карт из массива
const cardList = new Section({
  data: initialCards,
  renderer: (data) => {
       cardList.addItem(createCard(data)); // Вставим разметку на страницу
    }
}, '.elements__zone');


const popupWithFormAdd = new PopupWithForm({
    popupSelector: '#popup_add',
    handleFormSubmit: () => {
      const element = createCard({
        name: placeTitle.value,
        link: placeLink.value
      });
      cardList.addItem(element);
    }
  });// добавление новой карточки
  cardList.renderCard();





//клик формы добавления карточки
 buttonOpenAdd.addEventListener('click', function () {
  popupWithFormAdd.openPopup();
  validateFormAdd.reset()
  placeTitle.value = '';
  placeLink.value = '';
});

popupWithFormAdd.setEventListeners();


const userInfo = new UserInfo({
  name: '.profile__name',
  activity: '.profile__activity',
});

const popupWithFormEdit = new PopupWithForm({
  popupSelector: '#popup_edit',
  handleFormSubmit: (formValues) => {
    userInfo.setUserInfo({name: formValues.name, activity:formValues.activity});
    popupWithFormEdit.close();
  }
});

//клик формы редактирования
buttonOpenEdit.addEventListener('click', function () {
  popupWithFormEdit.openPopup();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().activity;
  validateFormEdit.reset()
 });

 popupWithFormEdit.setEventListeners();
