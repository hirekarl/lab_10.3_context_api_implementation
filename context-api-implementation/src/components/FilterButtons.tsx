export default function FilterButtons() {
  return (
    <div className="d-flex justify-content-around">
      <div
        className="btn-group mb-3 w-100"
        role="group"
        aria-label="Filter todos.">
        <input
          type="radio"
          name="filters"
          className="btn-check"
          id="all-filter-radio"
        />
        <label className="btn btn-primary" htmlFor="all-filter-radio">
          All
        </label>

        <input
          type="radio"
          name="filters"
          className="btn-check"
          id="active-filter-radio"
        />
        <label className="btn btn-primary" htmlFor="active-filter-radio">
          Active
        </label>

        <input
          type="radio"
          name="filters"
          className="btn-check"
          id="completed-filter-radio"
        />
        <label className="btn btn-primary" htmlFor="completed-filter-radio">
          Completed
        </label>
      </div>
    </div>
  )
}
