import type { Dispatch, SetStateAction } from "react"

export type TodoID = string | number

export interface Todo {
  id: TodoID
  text: string
  completed: boolean
}

export interface TodoContextType {
  todos: Todo[]
  addTodo: ((text: string) => void) | null
  toggleTodo: ((id: TodoID) => void) | null
  deleteTodo: ((id: TodoID) => void) | null
  editTodo: ((id: TodoID, newText: string) => void) | null
  clearCompleted: (() => void) | null
}

export type Theme = "light" | "dark"

export interface ThemeContextType {
  theme: Theme
  toggleTheme: (() => void) | null
}

export type Filter = "all" | "active" | "completed"

export interface FilterContextType {
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>> | null
}

export type BootstrapIconLabel = "sun" | "moon" | "plus" | "trash" | "pencil"

export type BootstrapIconClass =
  | "bi bi-sun-fill"
  | "bi bi-moon-fill"
  | "bi bi-plus"
  | "bi bi-trash"
  | "bi bi-pencil-square"

export type BootstrapColor = "primary" | "success" | "warning" | "dark"
