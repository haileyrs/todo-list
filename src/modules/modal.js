function modal() {
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal";
  modalDiv.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Add Task</h3>
        <span class="close">&times;</span>
      </div>
      <form id="addBookForm">
        <div class="modal-form">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" required />
          <label for="project">Project</label>

          <input type="text" name="author" id="author" required />

          <label for="dueDate">Due Date</label>
          <input type="text" name="dueDate" id="dueDate" required/>
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
