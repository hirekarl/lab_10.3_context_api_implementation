import TodoItem from "./TodoItem"

export default function TodoList() {
  return (
    <div>
      <ul className="list-group">
        <TodoItem />
      </ul>
      <hr />
      <div>
        <strong>1</strong> item left
      </div>
    </div>
  )
}
