import _ from 'lodash';
import './style.css';
import header from './modules/header';
import sidebar from './modules/sidebar';
import modal from './modules/modal';
import today from './modules/today';
import thisWeek from './modules/thisWeek';
import important from './modules/important';
import changeActiveClass from './modules/changeActiveClass';
import Project from './modules/objects/project';
import storageAvailable from './modules/storageAvailable';

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

  const projectInput = document.querySelector('#project-title');
  projectInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log(projectInput.value);
      const projects = JSON.parse(window.localStorage.getItem("projects"));
      projects.push(new Project(projectInput.value));
      window.localStorage.setItem("projects", JSON.stringify(projects))
    }
  });

  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', () => {
    const modalItem = document.querySelector(".modal");
    const taskTitleInput = document.querySelector("#task-title");
    const projectInput = document.querySelector("#project");
    const dueDateInput = document.querySelector("#due-date");
    const descInput = document.querySelector("#description");
    taskTitleInput.value = "";
    projectInput.value = "";
    dueDateInput.value = "";
    descInput.value = "";
    modalItem.style.display = "none";
  });

  const saveTask = document.querySelector('#save');
  
  
}

const content = document.querySelector('.content');
const mainContent = document.createElement('div');
mainContent.className = 'main-content'
content.appendChild(sidebar());
content.appendChild(header());
content.appendChild(mainContent);
content.appendChild(modal());

today();

addListeners();

