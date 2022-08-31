import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let buttonAbout = document.querySelector('.about__button');
let textAbout = document.querySelector('.about__js');

buttonAbout.addEventListener('click', () => {
  textAbout.classList.toggle('about__js--open');

  if (textAbout.classList.contains('about__js--open')) {
    buttonAbout.textContent = 'свернуть';
  } else {
    buttonAbout.textContent = 'подробнее';
  }
})

let titleCatalog = document.querySelector('.catalog__wrapper h3');

const changeTitleName = () => {
  if (window.innerWidth < 768) {
    titleCatalog.textContent = 'Товары и услуги Smart Device';
  }
}

changeTitleName();

window.addEventListener('resize',function(){
  if (window.innerWidth < 768) {
    titleCatalog.textContent = 'Товары и услуги Smart Device';
  } else {
    titleCatalog.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
});

import IMask from 'imask';
const inputElement = document.querySelector('.feedback-form__phone input');
const popupElement = document.querySelector('.popup__phone input');

document.addEventListener('DOMContentLoaded', () => {

  const maskOptions = { 
    mask: '+{7}(000)000-00-00',
  }

  IMask(inputElement, maskOptions);
})

document.addEventListener('DOMContentLoaded', () => {

  const maskOptions = { 
    mask: '+{7}(000)000-00-00',
  }

  IMask(popupElement, maskOptions);
})

//подвал

let navButton = document.querySelector('.page-footer__nav h3');
let contactsButton = document.querySelector('.page-footer__contacts h3');

let  navList = document.querySelector('.page-footer__list');
let  contactsList = document.querySelector('.page-footer__contacts-list');

let navPlus = document.querySelector('.plus-nav');
let contactsPlus = document.querySelector('.plus-contacts');

navPlus.classList.remove('plus--nojs');
contactsPlus.classList.remove('plus--nojs');
navList.classList.remove('page-footer__list--nojs');
contactsList.classList.remove('page-footer__contacts-list--nojs');

navButton.addEventListener('click', () => {
  navList.classList.toggle('page-footer__list--opened');
  navPlus.classList.toggle('plus-nav--opened');

  if (contactsList.classList.contains('page-footer__contacts-list--opened')) {
    contactsList.classList.remove('page-footer__contacts-list--opened');
    contactsPlus.classList.remove('plus-contacts--opened');
  }
});

contactsButton.addEventListener('click', () => {
  contactsList.classList.toggle('page-footer__contacts-list--opened');
  contactsPlus.classList.toggle('plus-contacts--opened');

  if (navList.classList.contains('page-footer__list--opened')) {
    navList.classList.remove('page-footer__list--opened');
    navPlus.classList.remove('plus-nav--opened');
  }
});


//popup

let popupButton = document.querySelector('.page-header__button');
let popup = document.querySelector('.popup');

let overlay = document.querySelector('.overlay');

let closeButton = document.querySelector('.popup__close');
let nameImput = document.querySelector('.popup__name input');  
// let submitButton = document.querySelector('.popup__submit');
let body = document.querySelector('.page-body');

const openPopup = () => {
  popup.classList.add('popup--opened');
  overlay.classList.add('overlay--opened');
  body.classList.add('page-body--opened-menu');
  nameImput.focus();
};

const closePopup = () => {
  popup.classList.remove('popup--opened');
  overlay.classList.remove('overlay--opened');
  body.classList.remove('page-body--opened-menu');
}

popupButton.addEventListener('click', () => {
  openPopup();
});

closeButton.addEventListener('click', () => {
  closePopup();
});

overlay.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keydown', (e) => {

  if ( e.key === 'Escape' ) { 
    closePopup();
	}
});

import focusTrap from "focus-trap-js";
document.addEventListener('keydown', event => {
  focusTrap(event, popup);
});

const onSmallHeight = () => {
  if (window.innerHeight < 761) {
    body.classList.add('page-body--small-height');
  } else {
    body.classList.remove('page-body--small-height');
  }
};

onSmallHeight();

const changeHeight = () => {
  if (window.innerHeight < 761) {
    body.classList.add('page-body--small-height');
  } else {
    body.classList.remove('page-body--small-height');
  }
}

window.onresize = changeHeight;

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
