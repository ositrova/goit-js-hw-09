import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const {
    delay: delayInput,
    step: stepInput,
    amount: amountInput,
  } = e.currentTarget.elements;

  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  if ((delay || amount) < 0) {
    e.currentTarget.reset();
    return Notify.warning('Write positive values');
  }

  for (let pos = 1; pos <= amount; pos += 1) {
    createPromise(pos, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}












// HTML містить розмітку форми, в поля якої користувач буде вводити першу 
// затримку в мілісекундах, крок збільшення затримки для кожного промісу 
// після першого і кількість промісів, яку необхідно створити.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

// Напиши скрипт, який на момент сабміту форми викликає функцію 
// createPromise(position, delay) стільки разів, скільки ввели в поле amount. 
// Під час кожного виклику передай їй номер промісу (position), що створюється, 
// і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// Доповни код функції createPromise таким чином, щоб вона повертала один 
// проміс, який виконується або відхиляється через delay часу. Значенням
//  промісу повинен бути об'єкт, в якому будуть властивості position і delay 
//  зі значеннями однойменних параметрів. Використовуй початковий код функції
//   для вибору того, що потрібно зробити з промісом - виконати або відхилити.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Бібліотека повідомлень​

// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою
//  додатковою практикою.
// Для відображення повідомлень користувачеві, замість console.log(), використовуй 
// бібліотеку notiflix.