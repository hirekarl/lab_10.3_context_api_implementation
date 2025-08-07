import { useContext, useMemo, type ReactNode } from "react"
import TodoItem from "./TodoItem"
import TodoContext from "../contexts/TodoContext"
import FilterContext from "../contexts/FilterContext"
import type { FilterContextType, TodoContextType, Todo } from "../types"

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext)
  const { filter } = useContext<FilterContextType>(FilterContext)

  let filteredTodos: Todo[]
  switch (true) {
    case filter === "active":
      filteredTodos = todos.filter((t) => !t.completed)
      break
    case filter === "completed":
      filteredTodos = todos.filter((t) => t.completed)
      break
    case filter === "all":
    default:
      filteredTodos = todos
      break
  }

  const filteredTodoItems: ReactNode[] = useMemo(
    () =>
      filteredTodos.map((t) => (
        <TodoItem key={t.id} id={t.id} text={t.text} completed={t.completed} />
      )),
    [filteredTodos]
  )

  const activeTodosCount: number = useMemo(
    () => todos.reduce((acc, t) => (!t.completed ? acc + 1 : acc), 0),
    [todos]
  )

  return (
    <div>
      <ul className="list-group">{filteredTodoItems}</ul>
      <hr />
      <div>
        <strong>{activeTodosCount}</strong> item
        {activeTodosCount === 0 || activeTodosCount > 1 ? "s" : ""} left
      </div>
    </div>
  )
}

export default TodoList
