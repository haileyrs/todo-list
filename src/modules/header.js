function header() {
  const div = document.createElement("div");
  div.className = "header";

  const title = document.createElement("h1");
  title.textContent = "ToDo List";
  div.appendChild(title);

  return div;
}

export default header;
