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
  // add event listener to open modal with description and such

  const date = document.createElement("p");
  date.textContent = todo.dueDate;

  todoItem.appendChild(completed);
  todoItem.appendChild(titleDiv);
  todoItem.appendChild(date);

  return todoItem;
}

export default todoListLayout;
