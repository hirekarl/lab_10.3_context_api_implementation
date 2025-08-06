import { useContext, useId, useState } from "react"
import type { Todo, TodoContextType } from "../types"
import TodoContext from "../contexts/TodoContext"

export default function TodoItem({ id, text, completed }: Todo) {
  const htmlId = useId()
  const { toggleTodo, deleteTodo, editTodo } =
    useContext<TodoContextType>(TodoContext)

  const [editing, setEditing] = useState<boolean>(false)
  const [newText, setNewText] = useState<string>(text)

  const todoEditable = editing ? (
    <div className="form-control">
      <input
        type="text"
        id={`list-item-input-${htmlId}`}
        onChange={(e) => setNewText(e.target.value)}
        value={newText}
        onBlur={() => {
          setEditing(false)
          editTodo(id, newText)
        }}
      />
    </div>
  ) : (
    <>
      <div className="form-check form-check-inline">
        <input
          type="checkbox"
          id={`list-item-checkbox-${htmlId}`}
          className="form-check-input"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <label
          htmlFor={`list-item-checkbox-${htmlId}`}
          className="form-check-label">
          {text}
        </label>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => setEditing(true)}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </>
  )

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        {todoEditable}
      </div>
    </li>
  )
}
