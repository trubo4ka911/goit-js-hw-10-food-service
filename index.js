import './sass/main.scss';
import menu from './menu.json';
import template from './template/template.hbs';

const menuList = document.querySelector('.js-menu');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
checkedTheme()
themeSwitchToggle.addEventListener('change', changeTheme);

function changeTheme(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', JSON.stringify(Theme.DARK))
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
    }
}

function checkedTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'))
    if (currentTheme === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitchToggle.checked = true;
    } else {
        body.classList.add(Theme.LIGHT);
        themeSwitchToggle.checked = false;
    }
}

function addMenuItems(items) {
    const markup = items.map(item => template(item));
    menuList.insertAdjacentHTML('beforeend', markup.join(''));
}
addMenuItems(menu);