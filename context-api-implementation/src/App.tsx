import { useEffect, useState } from "react"
import "./App.css"

import type { Theme, Todo, TodoID } from "./types"
import ThemeContext from "./contexts/ThemeContext"
import TodoContext from "./contexts/TodoContext"

import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import FilterButtons from "./components/FilterButtons"
import TodoList from "./components/TodoList"

function App() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    document.documentElement.dataset.bsTheme = theme
  }, [theme])

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header />
          </ThemeContext.Provider>
          <hr />
          <TodoContext.Provider
            value={{
              todos,
              addTodo,
              toggleTodo,
              deleteTodo,
              editTodo,
              clearCompleted,
            }}>
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </TodoContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
