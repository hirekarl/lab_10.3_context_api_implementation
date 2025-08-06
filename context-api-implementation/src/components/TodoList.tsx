import Todo from "./Todo"

export default function TodoList() {
  return (
    <div>
      <ul className="list-group">
        <Todo />
      </ul>
      <hr />
      <div>
        <strong>1</strong> item left
      </div>
    </div>
  )
}
