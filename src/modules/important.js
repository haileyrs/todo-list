function important() {
  const div = document.createElement('div');
  div.className = 'main-content';

  div.innerHTML = `
  <h2 class="page-title">Important</h2>
  <div class="task-list"></div>
  `

  return div
}

export default important;