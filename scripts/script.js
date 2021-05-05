const buttonEdit = document.querySelector(".user__edit");
const popupProfile = document.querySelector("#editProfile");
const buttonEditCross = document.querySelector(".popup__close");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector('.form__style');
const jobInput = document.querySelector('.form__style-profession');
const fieldName = document.querySelector(".user__name");
const fieldProfession = document.querySelector(".user__profession");
const buttonEditSubmit = document.querySelector(".form");
const buttonNewCard = document.querySelector(".user__add-btn");
const popupNewCard = document.querySelector("#addButton");
const buttonNewCardCross = document.querySelector("#addButton__close");
const buttonNewCardCreate = document.querySelector("#buttonNewPlace");
const placeTemplate = document.querySelector("#user"); // наша заготовка
const placePage = document.querySelector('.elements__place'); // место для вставки заготовок
const fieldPlace = document.getElementById("NewPlace");// поле ввода нового места
const fieldUrl = document.getElementById("NewPicture");// адрес новой картинки
const buttonImgCross = document.getElementById("image__close");// кнопка закрыть в попапе с картинкой.
const popupImg = document.querySelector("#image");

function openPopup(popup) {
  popup.classList.add("popup_non");
}

function closePopup(popup) {
  popup.classList.remove("popup_non");
}

function openPopupProfile () {
  nameInput.value = fieldName.textContent;
  jobInput.value = fieldProfession.textContent;
  openPopup(popupProfile)
}

function handlFormSubmit (ev) {
  ev.preventDefault();
  fieldName.textContent = nameInput.value;
  fieldProfession.textContent = jobInput.value;
  closePopup(popupProfile)
}

function render (place, card) {
  const userElement = placeTemplate.content.querySelector('.element').cloneNode(true);
  const placeCard = userElement.querySelector('.element__name');
  const placeImg = userElement.querySelector('.element__img');
  const trashButton = userElement.querySelector('.element__trash');

  placeCard.textContent = place;
  placeImg.src = card;
  placeImg.alt = "Изображение знатного места"

  trashButton.addEventListener("click", function(evt){
    evt.preventDefault();
    userElement.closest(".element").remove()
  });

  userElement.querySelector('.element__like').addEventListener('click', function (evt) {
    const like = evt.target;
    like.classList.toggle("element__like_active");
  });

  placeImg.addEventListener("click" ,function ( ){
    showImg(place, card)
  });

  createCard(placePage, userElement);
}

function createCard (cardContainer, nameClone) {
  cardContainer.prepend(nameClone);
}

function showImg (argText, argImg) {
  openPopup(popupImg);
  const textCard = document.querySelector(".popup__image-text");
  const imgCard = document.querySelector(".popup__container-img");
  textCard.textContent = argText;
  imgCard.src = argImg;
}

function resetForm (idForm) {
  idForm.reset()
}

buttonEditSubmit.addEventListener('submit', handlFormSubmit);

buttonEdit.addEventListener("click" , openPopupProfile);

buttonEditCross.addEventListener("click" , function () {
  closePopup(popupProfile)
});

buttonNewCard.addEventListener("click" , function () {
  openPopup(popupNewCard)
});

buttonNewCardCross.addEventListener("click" , function() {
  closePopup(popupNewCard)
});

buttonImgCross.addEventListener("click", function () {
  closePopup(popupImg)
});

buttonNewCardCreate.addEventListener ("submit", function(ev) {
  ev.preventDefault()
  render (fieldPlace.value, fieldUrl.value)
  closePopup (popupNewCard)
  resetForm (buttonNewCardCreate)
});
