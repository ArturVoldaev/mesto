let openButtonClick = document.querySelector(".user__edit");
let PopUp = document.querySelector(".popup");

let closeButtonClick = document.querySelector(".popup__close");

function open () {
  PopUp.classList.toggle("popup__non");
}

openButtonClick.addEventListener("click" , open);

closeButtonClick.addEventListener("click" , open);

let edit1 = document.querySelector(".user__name").innerHTML;
let input1 = document.getElementById('name__form');
input1.setAttribute('value', edit1);

let edit2 = document.querySelector(".user__profession").innerHTML;
let input2 = document.getElementById('profession__form');
input2.setAttribute('value', edit2);

let formElement = document.querySelector(".form");
let nameInput = document.getElementById('name__form');
let jobInput = document.getElementById('profession__form');

let po = document.querySelector(".user__name");
let op = document.querySelector(".user__profession");

/*console.log(jobInput.value);*/

function formSubmitHandler (ev) {
  ev.preventDefault();
  po.textContent = nameInput.value;
  op.textContent = jobInput.value;
  open ()
}

let submit = document.querySelector(".popup__window");
submit.addEventListener('submit', formSubmitHandler);
