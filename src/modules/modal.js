function formSubmit() {

}

function getProjects() {
  return JSON.parse(window.localStorage.getItem("projects"))
}

function insertProjects(projects) {
  if (projects.length > 0) {
    let dropdown = ''
    for (let p of projects) {
      dropdown = dropdown + '' + `<option value=${p.title}>${p.title}</option>`
    }
    return dropdown
  } 
}

function modal() {
  const projects = getProjects()
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal";
  modalDiv.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Add Task</h3>
        <span class="close-modal">&times;</span>
      </div>
      <form id="addBookForm">
        <div class="modal-form">
          <label for="taskTitle">Title</label>
          <input type="text" name="taskTitle" id="task-title" required />
          
          <label for="project">Project</label>
          <select name="project" id="project" required>
            ${insertProjects(projects)}
          </select>

          <label for="dueDate">Due Date</label>
          <input type="date" name="dueDate" id="due-date" required/>
          
          <label for="priority">Priority</label>
          <select name="priority" id="priority" required>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          
          <label for="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div class="modal-footer">
          <button type="submit" class="save" id="save">Save</button>
        </div>
      </form>  
    </div>
    `;

  return modalDiv;
}

export default modal;
