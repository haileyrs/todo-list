function thisWeek() {
  const div = document.querySelector('.main-content');

  div.innerHTML = `
  <h2 class="page-title">This Week</h2>
  <div class="task-list"></div>
  `
}

export default thisWeek;