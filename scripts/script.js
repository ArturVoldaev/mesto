import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";

const buttonEdit = document.querySelector(".user__edit");
const popupProfile = document.querySelector("#editProfile");
const buttonEditCross = document.querySelector(".popup__close");
const nameInput = document.querySelector('.form__style');
const jobInput = document.querySelector('.form__style-profession');
const fieldName = document.querySelector(".user__name");
const fieldProfession = document.querySelector(".user__profession");
const buttonEditSubmit = document.querySelector(".form");
const buttonNewCard = document.querySelector(".user__add-btn");
const popupNewCard = document.querySelector("#addButton");
const buttonNewCardCross = document.querySelector("#addButton__close");
const buttonNewCardCreate = document.querySelector("#buttonNewPlace");
const placePage = document.querySelector('.elements__place'); // место для вставки заготовок
const fieldPlace = document.getElementById("NewPlace");// поле ввода нового места
const fieldUrl = document.getElementById("NewPicture");// адрес новой картинки
const buttonSubmitCreation = document.querySelector("#create");
const inputProfile = document.getElementById("proFile");
const popupImg = document.getElementById("image");
const buttonImgCross = document.getElementById("image__close");
const formNewPlace = document.querySelector(".form_type_addPlace")
const popupAddPlace = document.querySelector(".popup_type_add-place")

const configSelectors = {
  formSelector: ".form",
  inputSelector: ".form__style",
  submitButtonSelector: ".button-save",
  inputErrorClass: ".form__style_type_error",
  errorActiveClass: ".form__style-error_active",
};

const formProfile = new FormValidator(configSelectors, inputProfile);
const formCardAdd = new FormValidator(configSelectors, buttonNewCardCreate);

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

initialCards.forEach((initialCards) => {
  const arrayCards = new Card(initialCards, '#user');
  const cardElem = arrayCards.createCard()
  openImage(cardElem)
  addCard(cardElem)
});

function closePopByMouse () {
  const popupArray = Array.from(document.querySelectorAll(".popup"));
  popupArray.forEach( elem => {
    elem.addEventListener("click", (ev) => {
      if (ev.target === ev.currentTarget) {
        closePopup(ev.target)
      }
    })
  })
}

export function closePopByButton (ev) {
  if (ev.key === "Escape") {
   closePopup(document.querySelector(".popup_non"))
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_non");
  document.addEventListener ("keydown", closePopByButton);
}

function closePopup(popup) {
  popup.classList.remove("popup_non");
  document.removeEventListener('keydown', closePopByButton);
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

function addCard (cardElem) {
  placePage.prepend(cardElem);
}

function resetForm (idForm) {
  idForm.reset()
}

export function openImage(cardElem) {
  const cardImage = cardElem.querySelector('.element__img');
  cardImage.addEventListener('click', function() {
      openPopup(popupImg);
  });
}

buttonEditSubmit.addEventListener('submit', handlFormSubmit);

buttonEdit.addEventListener("click" , openPopupProfile);

buttonImgCross.addEventListener('click', function() {
   closePopup(popupImg)
});

buttonEditCross.addEventListener("click" , function () {
  closePopup(popupProfile)
});

buttonNewCard.addEventListener("click" , function () {
  openPopup(popupNewCard)
});

buttonNewCardCross.addEventListener("click" , function() {
  closePopup(popupNewCard)
});

buttonNewCardCreate.addEventListener ("submit", function(ev) {
  ev.preventDefault()
  const object = {
    name: fieldPlace.value,
    link: fieldUrl.value,
  }
  const newCardElement = new Card( object, '#user')
  const newCard = newCardElement.createCard();
  addCard(newCard)
  resetForm(formNewPlace)
  closePopup(popupAddPlace)
  buttonSubmitCreation.disabled = true;
});

formProfile.enableValidation();
formCardAdd.enableValidation();
closePopByMouse ()
