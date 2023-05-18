import changeActiveClass from "./changeActiveClass";
import projectPage from "./projectPage";
import modal from "./modal";

// import Projects from './objects/projects';
const defaultProject = { title: "General", todos: [] };
const projects = [defaultProject];

function sidebar() {
  const div = document.createElement("div");
  div.className = "sidebar";

  div.innerHTML = `
    <h2 class="title">Home</h2>
    <div class="sub-items">
      <div class="sub-item today active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-today</title><path fill="#F7F6DC" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>
        <h4 class="today">Today</h4>
      </div>
      <div class="sub-item this-week">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-week</title><path fill="#F7F6DC" d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>
        <h4 class="this-week">This Week</h4>
      </div>
      <div class="sub-item important">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-box</title><path fill="#F7F6DC" d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z" /></svg>
        <h4 class="important">Important</h4>
      </div>
    </div>
    <h2 class="title">Projects</h2>
  `;

  div.appendChild(listProjects());

  return div;
}

function listProjects() {
  const subItems = document.createElement("div");
  subItems.className = "sub-items";
  const div = document.createElement("div");
  div.className = "sub-item add-project-btn";
  div.innerHTML = `
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-box</title><path fill="#F7F6DC" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>
      <h4 class="add-project">Add Project</h4>
    </div>
    <div class="input-area">
      <form>
        <label for="project-title">Title</label>
        <input type="text" name="project-title" id="project-title" required />
        <p>Press enter to create</p>
      </form>
    </div>
  `;

  div.addEventListener('click', async () => {
    const btn = document.querySelector('.add-project-btn');
    const inputField = document.querySelector('.input-area');
    btn.style.height = '110px';
    await new Promise(resolve => setTimeout(resolve, 700))
    inputField.style.visibility = "visible";
  })
  subItems.appendChild(div);

  if (projects.length > 0) {
    for (let i = 0; i < projects.length; i++) {
      const titleDiv = document.createElement("div");
      titleDiv.className = "sub-item";
      titleDiv.classList.add(projects[i].title.replace(/\s+/g, '-'));
      titleDiv.addEventListener('click', () => {
        changeActiveClass(String(projects[i].title.replace(/\s+/g, '-')));
        projectPage(projects[i]);
      })

      const title = document.createElement("h4");
      title.textContent = projects[i].title;

      titleDiv.appendChild(title);
      subItems.appendChild(titleDiv);
    }
  }

  return subItems;
}

export default sidebar;
