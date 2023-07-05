let txt = "Время идти вперёд!";

let el = document.getElementById('myt');

if (typeof el.innerText !== 'undefined') {
    el.textContent = txt;
}

function daiZharu(x){
  let textToButton = prompt('Изменить текст кнопки:', x);
  butMakeMagic.textContent = textToButton;
}
