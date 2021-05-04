let openButtonClick = document.querySelector(".user__edit");
let PopUp = document.querySelector(".popup");
let closeButtonClick = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.getElementById('name__form');
let jobInput = document.getElementById('profession__form');
let po = document.querySelector(".user__name");
let op = document.querySelector(".user__profession");
let submit = document.querySelector(".form");
let addButon = document.querySelector(".user__add-btn");
let PopUpAddButon = document.querySelector("#addButton");
let CloseAddButton = document.querySelector("#addButton__close");
let createButton = document.querySelector("#create");



function open () {
  nameInput.value = po.textContent;
  jobInput.value = op.textContent;
  PopUp.classList.toggle("popup_non");
}

function close () {
  PopUp.classList.remove("popup_non");
}


function formSubmitHandler (ev) {
  ev.preventDefault();
  po.textContent = nameInput.value;
  op.textContent = jobInput.value;
  close ()
}

submit.addEventListener('submit', formSubmitHandler);
openButtonClick.addEventListener("click" , open);
closeButtonClick.addEventListener("click" , close);
addButon.addEventListener("click" , openAddButton);
CloseAddButton.addEventListener("click" , closeAddButton);

// вывод массива
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

function openAddButton () {
  PopUpAddButon.classList.toggle("popup_non");
}
function closeAddButton () {
  PopUpAddButon.classList.remove("popup_non");
}

const placeTemplate = document.querySelector("#user"); // наша заготовка
const OnPage = document.querySelector('.elements__place'); // место для вставки заготовок
const deleteButton = document.querySelector('.element__trash');// выберем кнопку удаления
const inputPlace = document.getElementById("NewPlace");// поле ввода нового места
const inputUrl = document.getElementById("NewPicture");// адрес новой картинки
const closeImg = document.getElementById("image__close");// кнопка закрыть в попапе с картинкой.
const popUpImg = document.querySelector("#image");

closeImg.addEventListener("click", closepopUpImg);
function closepopUpImg () {
  popUpImg.classList.remove("popup_non");
}

function render (place, card) {
  const userElement = placeTemplate.content.querySelector('.element').cloneNode(true);
  const placeCard = userElement.querySelector('.element__name');
  const placeImg = userElement.querySelector('.element__img');
  const remove = userElement.querySelector('.element__trash');

  placeCard.textContent = place;
  placeImg.src = card;

  remove.addEventListener("click", function(evt){
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

  OnPage.prepend(userElement);
}

createButton.addEventListener ("click", function(ev) {
  ev.preventDefault();
  render (inputPlace.value, inputUrl.value)
  closeAddButton()
});

initialCards.forEach(function (initialCards) {
  render (initialCards.name, initialCards.link );
});

function showImg (argText, argImg) {
  popUpImg.classList.toggle("popup_non");
  const textTake = document.querySelector(".popup__image-text");
  const imgTake = document.querySelector(".popup__container-img");
  textTake.textContent = argText;
  imgTake.src = argImg;
}





