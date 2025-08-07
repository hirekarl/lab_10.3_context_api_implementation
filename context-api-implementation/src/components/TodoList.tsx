import { useContext, useMemo, type ReactNode } from "react"
import TodoItem from "./TodoItem"
import TodoContext from "../contexts/TodoContext"
import FilterContext from "../contexts/FilterContext"
import type { FilterContextType, TodoContextType, Todo } from "../types"

const TodoList = () => {
  const { todos, clearCompleted } = useContext<TodoContextType>(TodoContext)
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
    <>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-sm btn-danger w-100"
          onClick={() => {
            if (clearCompleted) clearCompleted()
          }}>
          Clear completed todos
        </button>
      </div>
      <div>
        <ul className="list-group">
          {filteredTodoItems.length > 0 ? (
            filteredTodoItems
          ) : (
            <p className="text-center mt-3">
              <em>No {filter !== "all" ? filter : null} todos yet.</em>
            </p>
          )}
        </ul>
        <hr />
        <div>
          <strong>{activeTodosCount}</strong> item
          {activeTodosCount === 0 || activeTodosCount > 1 ? "s" : null} left
        </div>
      </div>
    </>
  )
}

export default TodoList
