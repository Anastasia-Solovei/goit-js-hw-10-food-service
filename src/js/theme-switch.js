const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyEl.classList.add(`${Theme.LIGHT}`);

themeSwitcherEl.addEventListener('change', onThemeSwitcherChange);

populateSwitcher();

function onThemeSwitcherChange(evt) {
  const checked = evt.target.checked;

  if (checked) {
    bodyEl.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);

    localStorage.setItem('checked', checked);
  }

  if (!checked) {
    bodyEl.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);

    localStorage.removeItem('checked');
  }
}

function populateSwitcher() {
  const activeSwitcher = localStorage.getItem('checked');

  if (activeSwitcher) {
    bodyEl.classList.add(`${Theme.DARK}`);
  }
}
