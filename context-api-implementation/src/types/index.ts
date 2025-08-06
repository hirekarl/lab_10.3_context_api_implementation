export type TodoID = string | number

export interface Todo {
  id: TodoID
  text: string
  completed: boolean
}

export interface TodoContextType {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: TodoID) => void
  deleteTodo: (id: TodoID) => void
  editTodo: (id: TodoID, newText: string) => void
  clearCompleted: () => void
}

export type Theme = "light" | "dark"

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export type Filter = "all" | "active" | "completed"
