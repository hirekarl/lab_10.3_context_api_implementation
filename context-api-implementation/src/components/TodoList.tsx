import { useContext } from "react"
import TodoItem from "./TodoItem"
import TodoContext from "../contexts/TodoContext"

export default function TodoList() {
  const { todos } = useContext(TodoContext)

  const todoItems = todos.map((t) => (
    <TodoItem key={t.id} id={t.id} text={t.text} completed={t.completed} />
  ))

  return (
    <div>
      <ul className="list-group">{todoItems}</ul>
      <hr />
      <div>
        <strong>1</strong> item left
      </div>
    </div>
  )
}
