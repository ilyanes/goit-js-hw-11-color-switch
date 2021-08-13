//  ====== 1 version ====
// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const refs = {
//   body: document.body,
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
// };

// refs.startBtn.addEventListener("click", onStartBtn);
// refs.stopBtn.addEventListener("click", onStopBtn);

// function onStartBtn(e) {
//   console.log(e);
//   refs.startBtn.disabled = true;
//   id = setInterval((e) => {
//     let i = randomIntegerFromInterval(0, colors.length - 1);
//     console.log(i);
//     refs.body.style.background = colors[i];
//   }, 1000);
// }

// function onStopBtn(e) {
//   console.log(e);
//   refs.startBtn.disabled = false;
//   clearInterval(id);
// }

// =====  2 version ====

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  let color = `rgb(${randomIntegerFromInterval(
    0,
    255
  )},${randomIntegerFromInterval(0, 255)},${randomIntegerFromInterval(
    0,
    255
  )})`;
  return color;
};

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStartBtn);
refs.stopBtn.addEventListener("click", onStopBtn);

function onStartBtn(e) {
  console.log(e);
  refs.startBtn.disabled = true;
  id = setInterval((e) => {
    refs.body.style.background = randomColor();
  }, 1000);
}

function onStopBtn(e) {
  console.log(e);
  refs.startBtn.disabled = false;
  clearInterval(id);
}
