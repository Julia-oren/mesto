// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

export  class UserInfo {
  constructor({name, activity}) {
    // this._name = name;
    // this._job = job;
    this._name = document.querySelector(name);
    this._activity = document.querySelector(activity);



  }

  getUserInfo() {
    // const userInfo = {}
    // userInfo.name = this._name.textContent;
    // userInfo.job = this._job.textContent;
    return {
      name: this._name.textContent,
      activity: this._activity.textContent
    }

  }

  // setUserInfo(nameInput, jobInput) {
  //   this._name.textContent = nameInput;
  //   this._job.textContent = jobInput;
  // }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._activity.textContent = data.activity;
  }


}
