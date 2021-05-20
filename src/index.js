import './sass/main.scss';
import menu from './menu.json';
import cardsTamplate from './templates/cards.hbs';


const galleryRef = document.querySelector ('.menu js-menu');

const cardsMarkup  = cardsTamplate (menu);

galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);