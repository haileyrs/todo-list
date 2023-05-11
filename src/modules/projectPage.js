function projectPage(project) {
  const div = document.querySelector('.main-content');
  div.innerHTML = '';

  const title = document.createElement('h2');
  title.classList = 'page-title'
  title.innerHTML = project.title;

  const taskList = document.createElement('div');
  taskList.classList = 'task-list';

  div.appendChild(title);
  div.appendChild(taskList);
}

export default projectPage;