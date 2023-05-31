import _ from "lodash";
import "./style.css";
import header from "./modules/header";
import sidebar from "./modules/sidebar";
import modal from "./modules/modal";
import today from "./modules/today";
import thisWeek from "./modules/thisWeek";
import important from "./modules/important";
import changeActiveClass from "./modules/changeActiveClass";
import Project from "./modules/objects/project";
import Todo from "./modules/objects/todo";
import storageAvailable from "./modules/storageAvailable";

// function component() {
//   const element = document.createElement('div');

//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

function addListeners() {
  const todayBtn = document.querySelector(".today");
  const thisWeekBtn = document.querySelector(".this-week");
  const importantBtn = document.querySelector(".important");

  todayBtn.addEventListener("click", () => {
    today();
    changeActiveClass("today");
  });
  thisWeekBtn.addEventListener("click", () => {
    thisWeek();
    changeActiveClass("this-week");
  });
  importantBtn.addEventListener("click", () => {
    important();
    changeActiveClass("important");
  });

  const projectInput = document.querySelector("#project-title");
  projectInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log(projectInput.value);
      const projects = JSON.parse(window.localStorage.getItem("projects"));
      projects.push(new Project(projectInput.value));
      window.localStorage.setItem("projects", JSON.stringify(projects));
    }
  });

  const modalItem = document.querySelector(".modal");
  const taskTitleInput = document.querySelector("#task-title");
  const projectSelect = document.querySelector("#project");
  const dueDateInput = document.querySelector("#due-date");
  const prioritySelect = document.querySelector('#priority');
  const descInput = document.querySelector("#description");

  function resetModal() {
    taskTitleInput.value = "";
    projectSelect.value = "";
    prioritySelect.value = "";
    dueDateInput.value = "";
    descInput.value = "";
    modalItem.style.display = "none";
  }

  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", () => resetModal());

  const saveTask = document.querySelector("#save");
  saveTask.addEventListener("click", (e) => {
    e.preventDefault();
    if (taskTitleInput.value && dueDateInput.value && descInput.value) {
      const todos = JSON.parse(window.localStorage.getItem("todos"));
      todos.push(new Todo(taskTitleInput.value, descInput.value, dueDateInput.value, prioritySelect.value, projectSelect.value));
      window.localStorage.setItem("todos", JSON.stringify(todos));
      resetModal();
      initializePage();
    }
  });
}
function initializePage() {
  const content = document.querySelector(".content");
  content.innerHTML = ''
  const mainContent = document.createElement("div");
  mainContent.className = "main-content";
  content.appendChild(sidebar());
  content.appendChild(header());
  content.appendChild(mainContent);
  content.appendChild(modal());

  today();

  addListeners();
};

initializePage()

