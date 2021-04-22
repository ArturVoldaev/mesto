let openButtonClick = document.querySelector(".user__edit");
let PopUp = document.querySelector(".popup");

let closeButtonClick = document.querySelector(".popup__close");

function open () {
  PopUp.classList.toggle("popup__non");
}

openButtonClick.addEventListener("click" , open);

closeButtonClick.addEventListener("click" , open);

let edit1 = document.querySelector(".user__name").innerHTML;
let input1 = document.getElementById('name_form-1');
input1.setAttribute('value', edit1);

let edit2 = document.querySelector(".user__profession").innerHTML;
let input2 = document.getElementById('name_form-2');
input2.setAttribute('value', edit2);

let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__style");
let jobInput = document.querySelector(".form__style1");

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
