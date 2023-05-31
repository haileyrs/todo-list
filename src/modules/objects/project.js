class Project {
  constructor(title) {
    this.title = title
    this.todos = []
  }

  addTodo(todos) {
    this.todo = todos
  }

  getTodos() {
    const todos = JSON.parse(window.localStorage.getItem("todos"));
    const projectTodos = todos.map(x => x.project === this.title)
    return projectTodos
  }
}

export default Project;