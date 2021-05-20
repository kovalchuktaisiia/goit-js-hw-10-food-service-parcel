import './sass/main.scss';
import menu from './menu.json';
import cardsTamplate from './templates/cards.hbs';


const galleryRef = document.querySelector ('.js-menu');

const cardsMarkup  = cardsTamplate (menu);

galleryRef.insertAdjacentHTML( 'beforeend', cardsMarkup);

const checkbox= document.querySelector ('.theme-switch__toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  checkbox.addEventListener ('change', changeTheme);

  if (!localStorage.theme) {
      localStorage.setItem('theme', Theme.LIGHT);
  }

