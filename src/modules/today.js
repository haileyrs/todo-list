function today() {
  const div = document.querySelector('.main-content');
  
  // const div = document.createElement('div');
  // div.className = 'main-content';

  div.innerHTML = `
  <h2 class="page-title">Today</h2>
  <div class="task-list"></div>
  `
}

export default today;