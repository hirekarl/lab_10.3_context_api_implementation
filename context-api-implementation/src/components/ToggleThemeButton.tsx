import { useContext } from "react"
import type { ThemeContextType } from "../types"

import ThemeContext from "../contexts/ThemeContext"

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext)
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={toggleTheme}>
      <i className={`bi bi-${theme === "dark" ? "sun-fill" : "moon-fill"}`}></i>
      &nbsp;
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  )
}
