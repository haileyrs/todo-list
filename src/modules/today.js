import Todo from "./objects/todo";
import todoListLayout from "./todoListLayout";

let todos = [];

function getTodos() {
  if (!window.localStorage.getItem("todos")) {
    window.localStorage.setItem("todos", JSON.stringify([]));
  }
  todos = JSON.parse(window.localStorage.getItem("todos"))
  // first - filter by date = today 
  todos.sort(function(a, b) {
    return a.completed - b.completed
  });
}

// const defaultTodo1 = new Todo(
//   "Walk the dog",
//   "Need to go at least a mile",
//   "5/13/23",
//   "high",
//   "General",
//   true
// );
// const defaultTodo2 = new Todo(
//   "Grocery shopping",
//   "list is in the notes app",
//   "5/15/23",
//   "medium",
//   "General"
// );
// const todoList = [defaultTodo1, defaultTodo2];



function today() {
  const div = document.querySelector(".main-content");
  div.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "page-title";
  title.textContent = "Today";

  div.appendChild(title);

  const taskList = document.createElement("div");
  taskList.className = "task-list";

  getTodos()

  if (todos.length > 0) {
    for (let i = 0; i < todos.length; i++) {
      taskList.appendChild(todoListLayout(todos[i]));
    }
  } else {
    const text = document.createElement("h4");
    text.textContent = "There are no tasks today.";
    taskList.appendChild(text);
  }

  div.appendChild(taskList);
}

export default today;
