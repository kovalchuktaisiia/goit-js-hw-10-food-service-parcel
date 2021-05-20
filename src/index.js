import './sass/main.scss';
import menu from './menu.json';
import cards from '../templates/cards.hbs';


const menuRef = document.querySelector ('.menu js-menu');

 menuRef.insertAdjacentHTML('beforeend', cardsMarkup);