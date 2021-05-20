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

body.classList = localStorage.getItem('theme');

function changeTheme (evt) {
    if (body.classList === Theme.LIGHT) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
    }

    if (body.classList === Theme.DARK) {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
    }
}

if (body.classList.contains(theme.DARK)) {
    ckeckbox.ptop('checked', true);
}
