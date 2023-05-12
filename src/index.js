import _ from 'lodash';
import './style.css';
import header from './modules/header';
import sidebar from './modules/sidebar';
import today from './modules/today';
import thisWeek from './modules/thisWeek';
import important from './modules/important';
import changeActiveClass from './modules/changeActiveClass';

// function component() {
//   const element = document.createElement('div');

//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

function addListeners() {
  const todayBtn = document.querySelector('.today');
  const thisWeekBtn = document.querySelector('.this-week');
  const importantBtn = document.querySelector('.important');

  todayBtn.addEventListener('click', () => {
    today();
    changeActiveClass('today')
  });
  thisWeekBtn.addEventListener('click', () => {
    thisWeek();
    changeActiveClass('this-week');
  });
  importantBtn.addEventListener('click', () => {
    important();
    changeActiveClass('important');
  });
}

const content = document.querySelector('.content');
const mainContent = document.createElement('div');
mainContent.className = 'main-content'
content.appendChild(sidebar());
content.appendChild(header());
content.appendChild(mainContent);

today();

addListeners();
