export class UserInfo {
  constructor({ name, profession }) {
      this._name = document.querySelector(name);
      this._profession = document.querySelector(profession);
  }
  getUserInfo() {
    const name = this._name.textContent;
    const profession = this._profession.textContent;
    const objectUser = { name: name, profession: profession };
    return objectUser;
}
  setUserInfo(objectUser) {
    const nameInput = objectUser.name;
    const professionInput = objectUser.profession;
    this._name.textContent = nameInput;
    this._profession.textContent = professionInput;
  }
}
