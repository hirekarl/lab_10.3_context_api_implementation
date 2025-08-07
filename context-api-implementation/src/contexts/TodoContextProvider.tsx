import { useCallback, useEffect, useState, type ReactNode } from "react"
import type { Todo, TodoID } from "../types"

import { getTodosFromLocalStorage, saveTodosToLocalStorage } from "../utils"

import TodoContext from "./TodoContext"

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [todos, setTodos] = useState<Todo[]>(getTodosFromLocalStorage() || [])

  useEffect(() => {
    saveTodosToLocalStorage(todos)
  }, [todos])

  const addTodo = useCallback((text: string): void => {
    const id: TodoID = window.crypto.randomUUID()
    const completed: boolean = false

    const newTodo: Todo = {
      id,
      text,
      completed,
    }
    setTodos((prevTodos) => [newTodo, ...prevTodos])
  }, [])

  const getTodoById = useCallback(
    (id: TodoID): Todo | null => {
      const todo = todos.find((t) => t.id === id)
      if (todo) {
        return todo
      }
      return null
    },
    [todos]
  )

  const toggleTodo = useCallback(
    (id: TodoID): void => {
      const todo = getTodoById(id)

      if (todo) {
        const todoIndex = todos.indexOf(todo)
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        }
        setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1, newTodo))
      }
    },
    [getTodoById, todos]
  )

  const deleteTodo = useCallback(
    (id: TodoID): void => {
      const todo = getTodoById(id)

      if (todo) {
        const todoIndex = todos.indexOf(todo)
        setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1))
      }
    },
    [getTodoById, todos]
  )

  const editTodo = useCallback(
    (id: TodoID, newText: string): void => {
      const todo = getTodoById(id)

      if (todo) {
        const todoIndex = todos.indexOf(todo)
        const newTodo = {
          ...todo,
          text: newText,
        }
        setTodos((prevTodos) => prevTodos.toSpliced(todoIndex, 1, newTodo))
      }
    },
    [getTodoById, todos]
  )

  const clearCompleted = useCallback((): void => {
    setTodos((prevTodos) => prevTodos.filter((t) => !t.completed))
  }, [])

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
