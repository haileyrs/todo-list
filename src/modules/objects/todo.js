class Todo { 
  constructor(title, description, dueDate, priority, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    this.completed = false
  }

  changeStatus() {
    this.completed = !this.completed
  }

  getProject() {
    return this.project
  }

}

export default Todo;