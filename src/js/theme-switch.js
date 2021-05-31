const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyEl.classList.add(`${Theme.LIGHT}`);

themeSwitcherEl.addEventListener('change', onThemeSwitcherChange);

function onThemeSwitcherChange(evt) {
  evt.preventDefault();
  console.log(evt.target.nodeName);

  // if (evt.target.nodeName !== 'IMG') {
  //   return;
  // }

  // const checked = evt.target.checked;
  // console.log(checked);

  // if (checked) {
  //   // bodyEl.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);

  //   localStorage.setItem(
  //     'checked',
  //     bodyEl.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`),
  //   );
  // }

  // if (!checked) {
  //   localStorage.setItem(
  //     'checked',
  //     bodyEl.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`),
  //   );
  // }
}
