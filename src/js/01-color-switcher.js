
// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду 
// змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

btnStop.setAttribute('disabled', true);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timer = null;

function onStart() {
    timer = setInterval(() => {
         document.body.style.backgroundColor = getRandomHexColor();
        },1000);
        btnStart.setAttribute('disabled', true);
        btnStop.removeAttribute('disabled');
}

function onStop() {
    clearInterval(timer);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
}


