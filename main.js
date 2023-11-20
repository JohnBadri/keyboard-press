import './style.css';
import { doKeyDown } from './key-down.js';

const main = document.querySelector('#app');

function createH1(setText) {
  const h1 = document.createElement('h1');
  h1.textContent = setText;
  return h1;
}

function createParentDiv() {
  const div = document.createElement('div');

  div.appendChild(createChildDiv('event.key'));
  div.appendChild(createChildDiv('event.keyCode'));
  div.appendChild(createChildDiv('event.code'));

  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.gap = '40px';

  return div;
}

function createChildDiv(title) {
  const div = document.createElement('div');
  const divTitle = document.createElement('div');
  const divKey = document.createElement('div');

  div.appendChild(divTitle);
  div.appendChild(divKey);

  divTitle.classList.add('h3');
  divKey.classList.add('button');

  divTitle.textContent = title;
  divKey.textContent = 'Press A Key!';

  return div;
}

main.appendChild(createH1('Keypress Down Event Listener'));
main.appendChild(createParentDiv());

document.addEventListener('keydown', (event) => {
  doKeyDown(event);
});
