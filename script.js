/*открытие окна*/
let openButtonClick = document.querySelector(".pr-info__button");
let PopUp = document.querySelector(".popup");
/*закрытие окна*/
let closeButtonClick = document.querySelector(".popup__close");
/*открытие окна*/
function open () {
  PopUp.classList.toggle("popup__non");
}

/*открытие окна*/
openButtonClick.addEventListener("click" , open);


/*закрытие окна*/
closeButtonClick.addEventListener("click" , open);

