import * as functions from './modules/baseFunctions.js';

import './modules/slider.js';
import './modules/popup.js';
import './modules/focusInput.js';

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


