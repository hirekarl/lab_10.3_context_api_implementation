export default function TodoInput() {
  return (
    <div className="row mb-3">
      <div className="col-8">
        <input
          type="text"
          id="task-title-input"
          placeholder="What needs to be done?"
          className="form-control"
        />
      </div>
      <div className="col-4">
        <button className="btn btn-primary w-100">
          <i className="bi bi-plus"></i> Add Todo
        </button>
      </div>
    </div>
  )
}
