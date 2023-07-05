let txt = "Время идти вперёд!";

let el = document.getElementById('myt');

if (typeof el.innerText !== 'undefined') {
    el.textContent = txt;
}

function daiZharu(x){
  let a = prompt('Изменить текст кнопки:', x);
  butMakeMagic.innerText = a;
}
