// class Card {
//   constructor() {
// this._template = document.querySelector(".element__template");
// }

// _createView () {
//   this._view = this._template.content.cloneNode(true);
// }

//   render(conteiner) {
// this._createView ()
// conteiner.append(this._view)
//   }
// }

class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
  } // данные name,link, alt переданы в объект data

  _getTemplate() {
    const newElement =
      document
      .querySelector('.element__template')
      .content
      .querySelector('.element')
      .cloneNode(true);


    return newElement;
}  //метод который найдет template элемент,
//извлечет содержимое,
//найдет и  клонирует element,
//вернет клонируемый элемент


generateCard() {
  this._element = this._getTemplate(); //запись разметки
  this._element.querySelector(".element__title").textContent = this._name; // данные названия
  this._element.querySelector(".element__image").src = this._link; // данные ссылки
  this._element.querySelector(".element__image").alt = this._name; // данные для альт

  return this._element;
}

_deleteCard() {

}

_toPutLike() {

}

_handleOpenImagePopup (){

}

_handleClosePopup(){

}

}

initialCards.map((item) => {
  const card = new Card(item); //объект data передан аргументом
    const cardElement = card.generateCard();

      document.querySelector('.elements__zone').append(cardElement);
  });  //обошли массив, подготовили карточку к публикации и вернули результат, опубликовали карточку в .elements__zone







//FOrm
//создавать новые элементы списка
//отрисовываться на странице

//TodoItem
//отрисоваться на странице
//создавать новые элементы списка
//удаление из разметки

