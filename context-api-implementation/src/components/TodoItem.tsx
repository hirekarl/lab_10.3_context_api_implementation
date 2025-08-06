export default function TodoItem() {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check form-check-inline">
          {/* Look into using useId for these. */}
          <input type="checkbox" id="list-item-checkbox" className="form-check-input" />
          <label htmlFor="list-item-checkbox" className="form-check-label">List Item 1</label>
        </div>
        <div className="btn-group">
          <button className="btn btn-sm btn-warning"><i className="bi bi-pencil-square"></i></button>
          <button className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button>
        </div>
      </div>
    </li>
  )
}
