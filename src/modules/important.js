import Todo from "./objects/todo";
import todoListLayout from "./todoListLayout";

let todos = [];
let highPriorityItems = [];

function getTodos() {
  if (!window.localStorage.getItem("todos")) {
    window.localStorage.setItem("todos", JSON.stringify([]));
  }
  todos = JSON.parse(window.localStorage.getItem("todos"));
  highPriorityItems = todos.filter((a) => a.priority === "high");

  highPriorityItems.sort(function (a, b) {
    return a.completed - b.completed;
  });
}

function important() {
  const div = document.querySelector(".main-content");
  div.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "page-title";
  title.textContent = "Important";

  div.appendChild(title);

  const taskList = document.createElement("div");
  taskList.className = "task-list";

  getTodos();

  if (highPriorityItems.length > 0) {
    for (let i = 0; i < highPriorityItems.length; i++) {
      taskList.appendChild(todoListLayout(highPriorityItems[i]));
    }
  } else {
    const text = document.createElement("h4");
    text.textContent = "There are no high priority tasks right now.";
    taskList.appendChild(text);
  }

  div.appendChild(taskList);
}

export default important;
