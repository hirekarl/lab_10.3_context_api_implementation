import "./App.css"

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className="d-flex justify-content-between align-items-center my-4">
            <h1>Todo App (Context API)</h1>
            <button type="button" className="btn btn-outline-light">
              <i className="bi bi-sun-fill"></i> Light Mode
            </button>
          </div>
          <hr />
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
              <button className="btn btn-primary w-100"><i className="bi bi-plus"></i> Add Todo</button>
            </div>
          </div>
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
              <label
                className="btn btn-primary"
                htmlFor="all-filter-radio">
                All
              </label>

              <input
                type="radio"
                name="filters"
                className="btn-check"
                id="active-filter-radio"
              />
              <label
                className="btn btn-primary"
                htmlFor="active-filter-radio">
                Active
              </label>

              <input
                type="radio"
                name="filters"
                className="btn-check"
                id="completed-filter-radio"
              />
              <label
                className="btn btn-primary"
                htmlFor="completed-filter-radio">
                Completed
              </label>
            </div>
          </div>

          <div>
            <ul className="list-group">
              <li className="list-group-item">List Item 1</li>
              <li className="list-group-item">List Item 2</li>
              <li className="list-group-item">List Item 3</li>
            </ul>
            <hr />
            <div>
              <strong>1</strong> item left
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
