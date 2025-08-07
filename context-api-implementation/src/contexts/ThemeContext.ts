import { createContext } from "react"
import type { ThemeContextType } from "../types"

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: null,
})

export default ThemeContext
