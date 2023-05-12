import Todo from "./objects/todos";
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

todoList.sort(function(a, b) {
  return a.completed - b.completed
});

function today() {
  const div = document.querySelector(".main-content");
  div.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "page-title";
  title.textContent = "Today";

  div.appendChild(title);

  const taskList = document.createElement("div");
  taskList.className = "task-list";

  if (todoList.length > 0) {
    for (let i = 0; i < todoList.length; i++) {
      console.log(todoList[i]);
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";

      const completed = document.createElement("div");
      if (todoList[i].completed) {
        completed.className = "complete";
        const completedCheck = document.createElement("div");
        completedCheck.className = "complete-check";
        completed.appendChild(completedCheck);
        todoItem.classList.add("completed-task");
      } else {
        completed.className = "complete";
      }

      const todoTitle = document.createElement("h4");
      todoTitle.textContent = todoList[i].title;

      const titleDiv = document.createElement("div");
      titleDiv.className = "selectable-area";
      titleDiv.appendChild(todoTitle);
      // add event listener to open modal with description and such

      const date = document.createElement("p");
      date.textContent = todoList[i].dueDate;

      todoItem.appendChild(completed);
      todoItem.appendChild(titleDiv);
      todoItem.appendChild(date);

      taskList.appendChild(todoItem);
    }
  } else {
    const text = document.createElement("h4");
    text.textContent = "There are no tasks today.";
    taskList.appendChild(text);
  }

  div.appendChild(taskList);
}

export default today;
