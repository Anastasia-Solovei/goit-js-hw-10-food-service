const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyEl.classList.add(
  localStorage.getItem('checked') === null
    ? Theme.LIGHT
    : localStorage.getItem('checked'),
);

if (bodyEl.classList.value === Theme.DARK) {
  themeSwitcherEl.checked = true;
}

function onThemeSwitcherChange(evt) {
  if (evt.target.checked) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('checked', Theme.DARK);

    return;
  }

  bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('checked', Theme.LIGHT);
}

themeSwitcherEl.addEventListener('change', onThemeSwitcherChange);
