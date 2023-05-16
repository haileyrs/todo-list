import modal from "./modal";

function header() {
  const div = document.createElement("div");
  div.className = "header";

  const title = document.createElement("h1");
  title.textContent = "ToDo List";
  div.appendChild(title);

  const btn = document.createElement('button');
  btn.className = "add-task-btn";
  btn.textContent = "+ Add Task";
  btn.addEventListener('click', () => modal());

  div.appendChild(btn);

  return div;
}

export default header;
