function Todo(title, description, dueDate, priority, project = "General", completed = false) {
  
  return {title, description, dueDate, priority, project, completed}
}

export default Todo;