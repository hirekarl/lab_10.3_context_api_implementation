import React from "react"
import type { Filter } from "../types"

const FilterContext = React.createContext<Filter>("all")

export default FilterContext
