import { createContext } from "react"
import type { Filter } from "../types"

const FilterContext = createContext<Filter>("all")

export default FilterContext
