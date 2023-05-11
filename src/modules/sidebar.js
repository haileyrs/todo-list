import Projects from './objects/projects';

function sidebar() {
  const div = document.createElement("div");
  div.className = "sidebar";

  div.innerHTML = `
    <h2 class="title">Home</h2>
    <div class="sub-items">
      <div class="sub-item today active">
        <h4 class="today">Today</h4>
      </div>
      <div class="sub-item this-week">
        <h4 class="this-week">This Week</h4>
      </div>
      <div class="sub-item important">
        <h4 class="important">Important</h4>
      </div>
    </div>
    <h2 class="title">Projects</h2>
  `

  div.appendChild(listProjects())
  // addListeners()

  return div;
}

function listProjects() {
  const subItems = document.createElement('div');
  subItems.className = 'sub-items';
  if (Projects.length === 3) {
    for (let i = 0; i < Projects.length; i++) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'sub-item' + Projects[i].id
      const title = document.createElement('h4');
      title.textContent = Projects[i].title;

      titleDiv.appendChild(title);
      subItems.appendChild(titleDiv);
    }

  } else {
    const div = document.createElement('div');
    div.className = 'sub-item add-project';
    div.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-box</title><path fill="#F7F6DC" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>
      <h4 class="add-project">Add Project</h4>
    `
    subItems.appendChild(div);
  }

  return subItems;
}


export default sidebar;
