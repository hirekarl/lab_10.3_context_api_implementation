import { useContext } from "react"
import type { ThemeContextType } from "../types"

import ThemeContext from "../contexts/ThemeContext"
import {
  THEME_TOGGLE_BUTTON_COLOR,
  BOOTSTRAP_ICON,
  THEME_TOGGLE_BUTTON_TEXT,
} from "../constants"

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext)
  return (
    <button
      type="button"
      className={`btn btn-outline-${
        theme === "dark"
          ? THEME_TOGGLE_BUTTON_COLOR.dark
          : THEME_TOGGLE_BUTTON_COLOR.light
      }`}
      onClick={() => {
        if (toggleTheme) toggleTheme()
      }}>
      <i
        className={
          theme === "dark" ? BOOTSTRAP_ICON.sun : BOOTSTRAP_ICON.moon
        }></i>
      &nbsp;
      {theme === "dark"
        ? THEME_TOGGLE_BUTTON_TEXT.light
        : THEME_TOGGLE_BUTTON_TEXT.dark}
      &nbsp;Mode
    </button>
  )
}

export default ToggleThemeButton
