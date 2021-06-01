const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'checked';

bodyEl.classList.add(
  localStorage.getItem(STORAGE_KEY) === null
    ? Theme.LIGHT
    : localStorage.getItem(STORAGE_KEY),
);

if (bodyEl.classList.value === Theme.DARK) {
  themeSwitcherEl.checked = true;
}

function onThemeSwitcherChange(evt) {
  if (evt.target.checked) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.DARK);

    return;
  }

  bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}

themeSwitcherEl.addEventListener('change', onThemeSwitcherChange);
