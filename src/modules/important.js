import Todo from "./objects/todos";
import todoListLayout from "./todoListLayout";
const defaultTodo1 = Todo(
  "Walk the dog",
  "Need to go at least a mile",
  "5/13/23",
  "high",
  "General",
  true
);
const defaultTodo2 = Todo(
  "Grocery shopping",
  "list is in the notes app",
  "5/15/23",
  "medium",
  "General"
);
const todoList = [defaultTodo1, defaultTodo2];

const highPriorityItems = todoList.filter((a) => (a.priority === "high"));

highPriorityItems.sort(function(a, b) {
  return a.completed - b.completed
});

function important() {
  const div = document.querySelector(".main-content");
  div.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "page-title";
  title.textContent = "Important";

  div.appendChild(title);

  const taskList = document.createElement("div");
  taskList.className = "task-list";

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