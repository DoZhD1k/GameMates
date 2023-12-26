// // Получаем элемент текста и кнопку
// const movingText = document.getElementById("movingText");
// const toggleBtn = document.getElementById("toggleBtn");

// let isPaused = false;
// let currentX = 0;
// let currentY = 0;

// // Функция для генерации случайных координат
// function setRandomCoordinates() {
//   if (!isPaused) {
//     const x = Math.random() * 1 - 1;
//     const y = Math.random() * 1 - 1;
//     movingText.style.setProperty("--x", x);
//     movingText.style.setProperty("--y", y);
//     currentX = x;
//     currentY = y;
//   }
// }

// // Вызываем функцию для установки случайных координат при загрузке страницы
// setRandomCoordinates();

// // Добавляем обработчик события для генерации новых координат при каждой итерации анимации
// movingText.addEventListener("animationiteration", setRandomCoordinates);

// // Обработчик события при нажатии на кнопку Play/Pause
// toggleBtn.addEventListener("click", function () {
//   if (isPaused) {
//     movingText.style.animationPlayState = "running"; // Если была пауза, запускаем анимацию
//     isPaused = false; // Обновляем состояние
//     movingText.style.setProperty("--x", currentX);
//     movingText.style.setProperty("--y", currentY);
//   } else {
//     movingText.style.animationPlayState = "paused"; // Если анимация запущена, ставим на паузу
//     isPaused = true; // Обновляем состояние
//   }
// });

// Получаем элемент текста и кнопку
const movingText = document.getElementById("movingText");
const toggleBtn = document.getElementById("toggleBtn");

let isPaused = false;
let currentX = 0;
let currentY = 0;

// Функция для генерации случайных координат
function setRandomCoordinates() {
  if (!isPaused) {
    const x = Math.random() * 1 - 1;
    const y = Math.random() * 1 - 1;
    movingText.style.setProperty("--x", x);
    movingText.style.setProperty("--y", y);
    currentX = x;
    currentY = y;
  }
}

function setCenterCoordinates() {
  const x = 0; // Центр экрана (горизонтальная координата)
  const y = 0; // Центр экрана (вертикальная координата)
  movingText.style.setProperty("--x", x);
  movingText.style.setProperty("--y", y);
  currentX = x;
  currentY = y;
}

// Вызываем функцию для установки случайных координат при загрузке страницы
// setRandomCoordinates();
setCenterCoordinates();

// Добавляем обработчик события для генерации новых координат при каждой итерации анимации
movingText.addEventListener("animationiteration", setRandomCoordinates);

// Обработчик события при нажатии на кнопку Play/Pause
toggleBtn.addEventListener("click", function () {
  if (isPaused) {
    movingText.style.animationPlayState = "running"; // Если была пауза, запускаем анимацию
    isPaused = false; // Обновляем состояние
    movingText.style.setProperty("--x", currentX);
    movingText.style.setProperty("--y", currentY);
  } else {
    movingText.style.animationPlayState = "paused"; // Если анимация запущена, ставим на паузу
    isPaused = true; // Обновляем состояние
  }
});

// // Получаем элемент текста и кнопку
// const movingText = document.getElementById("movingText");
// const toggleBtn = document.getElementById("playPauseBtn");
// const newText = docdocument.getElementById("pauseText"); // Новый текст

// let isPaused = false;
// let currentX = 0;
// let currentY = 0;

// // Функция для генерации случайных координат
// function setRandomCoordinates() {
//   if (!isPaused) {
//     const x = Math.random() * 1 - 1;
//     const y = Math.random() * 1 - 1;
//     movingText.style.setProperty("--x", x);
//     movingText.style.setProperty("--y", y);
//     currentX = x;
//     currentY = y;
//   }
// }

// function setCenterCoordinates() {
//   const x = 0; // Центр экрана (горизонтальная координата)
//   const y = 0; // Центр экрана (вертикальная координата)
//   movingText.style.setProperty("--x", x);
//   movingText.style.setProperty("--y", y);
//   currentX = x;
//   currentY = y;
// }

// // Вызываем функцию для установки случайных координат при загрузке страницы
// // setRandomCoordinates();
// setCenterCoordinates();

// // Добавляем обработчик события для генерации новых координат при каждой итерации анимации
// movingText.addEventListener("animationiteration", setRandomCoordinates);

// // Обработчик события при нажатии на кнопку Play/Pause
// toggleBtn.addEventListener("click", function () {
//   if (!isPaused) {
//     // Если анимация не запущена, выводим текст
//     newText.classList.add("show-text");
//   } else {
//     movingText.style.animationPlayState = "paused"; // Если анимация запущена, ставим на паузу
//     isPaused = true; // Обновляем состояние

//     newText.classList.remove("show-text");
//   }
// });
