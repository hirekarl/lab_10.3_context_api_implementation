import { useState, type ReactNode } from "react"
import type { Filter } from "../types"

import FilterContext from "./FilterContext"

export default function FilterContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [filter, setFilter] = useState<Filter>("all")

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
