import './css/styles.css';
import menuTemplate from './templates/menu.handlebars';
import refs from './js/refs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
};

getMsgFromLocalStorage();

menu.forEach(item => {
  let markup = menuTemplate(item);
  refs.menuList.innerHTML += markup;
});

refs.checkbox.addEventListener('click', () => {
  if (
    refs.body.classList.contains(Theme.LIGHT) ||
    refs.body.classList.length === 0
  ) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

function getMsgFromLocalStorage() {
  let msgFromLocalStorage = localStorage.getItem('theme');
  if (msgFromLocalStorage) {
    if (msgFromLocalStorage === 'dark-theme') {
      refs.checkbox.setAttribute('checked', true);
    }
    refs.body.className = msgFromLocalStorage;
  }
}
