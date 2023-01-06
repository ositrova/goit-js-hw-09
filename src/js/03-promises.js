import { Notify } from 'notiflix/build/notiflix-notify-aio';

  const submitBtn = document.querySelector('button');
  const delayInput = document.querySelector('[name="delay"]');
  const stepInput = document.querySelector('[name="step"]');
  const amountInput = document.querySelector('[name="amount"]');

const formData = {
  delay: 0,
  step: 0,
  amount: 0,
}

const takingInputInfo = (e) => { formData[e.target.name] = Number(e.target.value); }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`Fulfilled promise ${position} in ${delay}ms`)) 
      } else {
        reject(Notify.failure(`Fulfilled promise ${position} in ${delay}ms`)) 
      }
    }, delay )
  })
}

delayInput.addEventListener('input', takingInputInfo);

stepInput.addEventListener('input', takingInputInfo);

amountInput.addEventListener('input', takingInputInfo);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  for (let i = 1; i <= formData.amount; i += 1) {
    createPromise(i, formData.delay)
    .then(value => {})
    .catch(error => {}); 
  
    formData.delay += formData.step;
  }  
})












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