import React from "react"
import type { TodoContextType } from "../types"

const TodoContext = React.createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  clearCompleted: () => {},
})

export default TodoContext
