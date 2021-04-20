/*переменные открытие окна*/
let openButtonClick = document.querySelector(".pr-info__button");
let PopUp = document.querySelector(".popup");
/*переменные показа значений*/


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



let edit1 = document.querySelector(".pr-info__name").innerHTML;
let input1 = document.getElementById('name_form-1');
input1.setAttribute('value', edit1);

let edit2 = document.querySelector(".pr-info__discast").innerHTML;
let input2 = document.getElementById('name_form-2');
input2.setAttribute('value', edit2);

// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.getElementById("name_form-1").value;// Воспользуйтесь инструментом .querySelector()
let jobInput = document.getElementById("name_form-2").value;// Воспользуйтесь инструментом .querySelector()


let po = document.querySelector(".pr-info__name");
console.log(nameInput);

function formSubmitHandler (ev) {
  ev.preventDefault();

  let me = document.getElementById("name_form-1").value; // Получите значение полей jobInput и nameInput из свойства value
  let put = document.querySelector(".pr-info__name"); // Выберите элементы, куда должны быть вставлены значения полей
  let a = put.textContent += me;  
return a;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
let submit = document.querySelector(".button-save");
submit.addEventListener('submit', formSubmitHandler);