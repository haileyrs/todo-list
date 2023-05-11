function changeActiveClass(newPage) {
  const subItems = document.querySelectorAll('.sub-item');
  for (let item of subItems) {
    item.classList.remove('active');
  }

  const newItem = document.querySelector('.' + newPage);
  newItem.classList.add('active');
}

export default changeActiveClass;