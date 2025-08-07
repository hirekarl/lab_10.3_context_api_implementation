import { useContext } from "react"

import type { Filter, FilterContextType } from "../types"

import FilterContext from "../contexts/FilterContext"

export default function FilterButtons() {
  const { filter, setFilter } = useContext<FilterContextType>(FilterContext)

  function handleFilterChange(newFilter: Filter): void {
    if (setFilter) {
      setFilter(newFilter)
    }
  }

  return (
    <div className="d-flex justify-content-around">
      <div
        className="btn-group w-100"
        role="group"
        aria-label="Filter todos.">
        <button
          type="button"
          className={`btn btn-primary ${filter === "all" ? "active" : ""}`}
          value="all"
          onClick={() => handleFilterChange("all")}>
          All
        </button>

        <button
          type="button"
          className={`btn btn-primary ${filter === "active" ? "active" : ""}`}
          value="active"
          onClick={() => handleFilterChange("active")}>
          Active
        </button>

        <button
          type="button"
          className={`btn btn-primary ${
            filter === "completed" ? "active" : ""
          }`}
          value="completed"
          onClick={() => handleFilterChange("completed")}>
          Completed
        </button>
      </div>
    </div>
  )
}
