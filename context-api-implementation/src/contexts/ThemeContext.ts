import React from "react"
import type { ThemeContextType } from "../types"

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
})

export default ThemeContext
