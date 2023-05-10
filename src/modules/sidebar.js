function sidebar() {
  const div = document.createElement("div");
  div.className = "sidebar";

  const title = document.createElement("h2");
  title.textContent = "Projects";
  div.appendChild(title);

  return div;
}

export default sidebar;
