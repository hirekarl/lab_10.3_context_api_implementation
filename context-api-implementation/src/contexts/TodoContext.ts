import { createContext } from "react"
import type { TodoContextType } from "../types"

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  clearCompleted: () => {},
})

export default TodoContext
