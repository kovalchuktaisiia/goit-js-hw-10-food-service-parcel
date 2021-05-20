import './sass/main.scss';
import menu from './menu.json';
import cardsTamplate from './templates/cards.hbs';


const menuRef = document.querySelector ('.menu js-menu');
const cardsMarkup  = cardsTamplate (menu);

 menuRef.insertAdjacentHTML('beforeend', cardsMarkup);