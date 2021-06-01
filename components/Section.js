
export class Section {
  constructor({ data, renderer}, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

renderCard () {
// Переберем массив _initialArray с начальными сообщениями
this._initialArray.forEach(item => {
  this._renderer(item);
});
} // перебираем массив и вызываем для каждого элемента массива метод addItem

addItem(element) {
  this._container.prepend(element)
} // принимает параметр element и вставляет его в контейнер методом prepend

}
