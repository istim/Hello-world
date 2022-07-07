var txt = "Время идти вперёд!";

var el = document.getElementById('myt');

if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = txt;
} else {
    // Нормальные браузеры
    el.textContent = txt;
}