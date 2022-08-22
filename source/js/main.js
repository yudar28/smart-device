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

window.addEventListener('resize',function(){
  if (window.innerWidth < 768) {
    titleCatalog.textContent = 'Товары и услуги Smart Device';
  } else {
    titleCatalog.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
});

import IMask from 'imask';
const inputElement = document.querySelector('.feedback-form__phone input');

document.addEventListener('DOMContentLoaded', () => {

  const maskOptions = { 
    mask: '+{7}(000)000-00-00'
  }
  IMask(inputElement, maskOptions);

})


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
