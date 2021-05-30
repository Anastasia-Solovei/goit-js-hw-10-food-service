import menuItemTpl from '../templates/menu-item.hbs';
import items from '../menu.json';

const menuContainer = document.querySelector('ul.js-menu');
const menuItemsMarkup = createMenuItemsMarkup(items);

menuContainer.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createMenuItemsMarkup(items) {
  return items.map(menuItemTpl).join('');
}
