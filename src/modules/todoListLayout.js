function viewDetails(todo, object) { 
  if (!object.classList.contains('expanded')) {
    const expandedDetails = document.createElement('div');
    expandedDetails.className = 'expanded-details';
    expandedDetails.classList.add(todo.title.replace(/\s+/g, '-'));
    expandedDetails.innerHTML = `
    <p>${todo.description}</p>
    <button class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-edit-outline</title><path fill="#7FB77E" d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg></button>
    <button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path fill="#DF2E38" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
    `
    object.appendChild(expandedDetails)
    object.classList.add('expanded')
  } else {
    const multipleClass = '.expanded-details.' + todo.title.replace(/\s+/g, '-')
    const expandedDetails = document.querySelector(multipleClass);
    expandedDetails.remove();
    object.classList.remove('expanded');
  }
    
}

function changeStatus(todo, object, todoItem) {
  todo.completed = !todo.completed;

  if (todo.completed) {
    const completedCheck = document.createElement("div");
    completedCheck.className = "complete-check";
    object.appendChild(completedCheck);
    todoItem.classList.add("completed-task");
  } else {
    object.innerHTML = ''
    todoItem.classList.remove("completed-task")
  }
}

function todoListLayout(todo) {
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  const completed = document.createElement("div");
  completed.className = "complete";
  if (todo.completed) {
    const completedCheck = document.createElement("div");
    completedCheck.className = "complete-check";
    completed.appendChild(completedCheck);
    todoItem.classList.add("completed-task");
  } 
  
  completed.addEventListener('click', () => changeStatus(todo, completed, todoItem));

  const todoTitle = document.createElement("h4");
  todoTitle.textContent = todo.title;

  const titleDiv = document.createElement("div");
  titleDiv.className = "selectable-area";
  titleDiv.appendChild(todoTitle);
  titleDiv.addEventListener('click', () => viewDetails(todo, todoItem));

  const date = document.createElement("p");
  date.textContent = todo.dueDate;

  todoItem.appendChild(completed);
  todoItem.appendChild(titleDiv);
  todoItem.appendChild(date);

  return todoItem;
}

export default todoListLayout;
