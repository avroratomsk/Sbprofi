import * as functions from './modules/baseFunctions.js';

import './modules/slider.js';
import './modules/popup.js';
import './modules/focusInput.js';
import './modules/stickyMenu.js';

functions.isWebp();


const burgerBtn = document.querySelector('.burger');

burgerBtn?.addEventListener('click', () => {
  document.querySelector('.nav').classList.add('active');
})

const closeBtn = document.querySelector('.close');

closeBtn?.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('active');
})

const yearCopyright = document.getElementById('year');
const currentYear = new Date().getFullYear()

yearCopyright.innerText = currentYear.toString();

// Проверяем, установлены ли куки
if (!document.cookie.split("; ").find(row => row.startsWith("cookie_consent="))) {
  // Если куки не установлены, показываем уведомление
  document.getElementById("cookie-notice").style.display = "block";
}

// Обработчик для кнопки согласия
document.getElementById("accept-cookies").addEventListener("click", function() {
  console.log("click");
  // Устанавливаем куки на 1 год
  document.cookie = "cookie_consent=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
  // Скрываем уведомление
  document.getElementById("cookie-notice").style.display = "none";
});


