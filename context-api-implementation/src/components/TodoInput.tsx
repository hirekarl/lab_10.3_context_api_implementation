import { useContext, useState } from "react"
import TodoContext from "../contexts/TodoContext"
import type { TodoContextType } from "../types"

export default function TodoInput() {
  const { addTodo } = useContext<TodoContextType>(TodoContext)

  const [todoText, setTodoText] = useState<string>("")
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  function handleAddTodo(): void {
    if (todoText !== "") {
      addTodo(todoText)
      setTodoText("")
      setButtonDisabled(true)
    }
  }

  return (
    <div className="row mb-3">
      <div className="col-8">
        <input
          type="text"
          id="task-title-input"
          placeholder="What needs to be done?"
          className="form-control"
          onChange={(e) => {
            setButtonDisabled(e.target.value === "")
            setTodoText(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo()
            }
          }}
          value={todoText}
        />
      </div>
      <div className="col-4">
        <button
          className="btn btn-success w-100"
          disabled={buttonDisabled}
          onClick={handleAddTodo}>
          <i className="bi bi-plus"></i> Add Todo
        </button>
      </div>
    </div>
  )
}
