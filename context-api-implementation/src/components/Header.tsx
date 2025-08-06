import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"
import type { ThemeContextType } from "../types"

export default function Header() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext)

  return (
    <div className="d-flex justify-content-between align-items-center my-4">
      <h1>Todo App (Context API)</h1>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={toggleTheme}>
        <i
          className={`bi bi-${
            theme === "dark" ? "sun-fill" : "moon-fill"
          }`}></i>&nbsp;
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
}
