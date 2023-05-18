function formSubmit() {

}

function modal() {
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

          <input type="text" name="project" id="project" required />

          <label for="dueDate">Due Date</label>
          <input type="text" name="dueDate" id="due-date" required/>
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
