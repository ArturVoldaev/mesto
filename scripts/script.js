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
let PopUpAddButon = document.querySelector(".popup-add");
let CloseAddButton = document.querySelector(".popup-add__close");
let createButton = document.querySelector("#create");




function open () {
  nameInput.value = po.textContent;
  jobInput.value = op.textContent;
  PopUp.classList.toggle("popup_non");
}

function close () {
  PopUp.classList.remove("popup_non");
}
/*let edit1 = document.querySelector(".user__name");*/
/*let input1 = document.getElementById('name__form');*/
/*let edit2 = document.querySelector(".user__profession");*/
/*let input2 = document.getElementById('profession__form');*/

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


function closeAddButton () {
  PopUpAddButon.classList.remove("popup-add_non");
}
function openAddButton () {
  PopUpAddButon.classList.toggle("popup-add_non");
}

const placeTemplate = document.querySelector("#user"); // наша заготовка
const OnPage = document.querySelector('.elements__place'); // место для вставки заготовок
const deleteButton = document.querySelector('.element__trash');// выберем кнопку удаления
const inputPlace = document.getElementById("NewPlace");// поле ввода нового места
const inputUrl = document.getElementById("NewPicture");// адрес новой картинки






function re (place, card) {
const userElement = placeTemplate.content.querySelector('.element').cloneNode(true);// создаем клона
userElement.querySelector('.element__name').textContent = place; // присваеваем значение name
userElement.querySelector('.element__img').src = card;
const remove = userElement.querySelector('.element__trash');// выберем кнопку удаления

remove.addEventListener("click", function(evt){
  evt.preventDefault();
  userElement.closest(".element").remove()
});

OnPage.append(userElement);//добовляем на страницу
}

createButton.addEventListener ("click", function(ev) {
  ev.preventDefault();
  re (inputPlace.value, inputUrl.value)
  closeAddButton()
});

initialCards.forEach(function (initialCards) {
  re (initialCards.name, initialCards.link );
});





 /* const userElement = placeTemplate.content.querySelector('.element').cloneNode(true);// создаем клона
  userElement.querySelector('.element__name').textContent = initialCards.name; // присваеваем значение name
  userElement.querySelector('.element__img').src = initialCards.link;//присваеваем значение link;
  OnPage.append(userElement);*/

/*createButton.addEventListener ("click", function(evt){
  evt.preventDefault();
  const userElement = placeTemplate.content.querySelector('.element').cloneNode(true);// создаем клона
  userElement.querySelector('.element__name').textContent = inputPlace.value ; // присваеваем значение name
  userElement.querySelector('.element__img').src = inputUrl.value;
  OnPage.append(userElement);//добовляем на страницу
  closeAddButton ()
})*/



//userElement.querySelector('.element__name').textContent = initialCards.name; // присваеваем значение name
//userElement.querySelector('.element__img').src = initialCards.link;//присваеваем значение link



