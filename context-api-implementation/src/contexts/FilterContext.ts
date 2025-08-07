import { createContext } from "react"
import type { FilterContextType } from "../types"

const FilterContext = createContext<FilterContextType>({
  filter: "all",
  setFilter: null,
})

export default FilterContext
