import { createContext } from "react"
import type { TodoContextType } from "../types"

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: null,
  toggleTodo: null,
  deleteTodo: null,
  editTodo: null,
  clearCompleted: null,
})

export default TodoContext
