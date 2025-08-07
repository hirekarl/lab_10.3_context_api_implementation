import { useEffect, useState, type ReactNode } from "react"
import type { Filter } from "../types"

import FilterContext from "./FilterContext"

import { getFilterFromLocalStorage, saveFilterToLocalStorage } from "../utils"

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>(
    getFilterFromLocalStorage() || "all"
  )

  useEffect(() => {
    saveFilterToLocalStorage(filter)
  }, [filter])

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
