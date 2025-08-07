import { useState, type ReactNode } from "react"
import type { Todo, TodoID } from "../types"

import TodoContext from "./TodoContext"

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string): void => {
    const id: TodoID = window.crypto.randomUUID()
    const completed: boolean = false

    const newTodo: Todo = {
      id,
      text,
      completed,
    }
    setTodos((prevTodos) => [newTodo, ...prevTodos])
  }

  const getTodoById = (id: TodoID): Todo | null => {
    const todo = todos.find((t) => t.id === id)
    if (todo) {
      return todo
    }
    return null
  }

  const toggleTodo = (id: TodoID): void => {
    const todo = getTodoById(id)

    if (todo) {
      const todoIndex = todos.indexOf(todo)
      const newTodo = {
        ...todo,
        completed: !todo.completed,
      }
      setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1, newTodo))
    }
  }

  const deleteTodo = (id: TodoID): void => {
    const todo = getTodoById(id)

    if (todo) {
      const todoIndex = todos.indexOf(todo)
      setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1))
    }
  }

  const editTodo = (id: TodoID, newText: string): void => {
    const todo = getTodoById(id)

    if (todo) {
      const todoIndex = todos.indexOf(todo)
      const newTodo = {
        ...todo,
        text: newText,
      }
      setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1, newTodo))
    }
  }

  const clearCompleted = (): void => {
    setTodos((prevTodos) => prevTodos.filter((t) => !t.completed))
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}>
      {children}
    </TodoContext.Provider>
  )
}
