import { useCallback, useEffect, useState, type ReactNode } from "react"
import type { Theme } from "../types"

import ThemeContext from "./ThemeContext"

import { getThemeFromLocalStorage, saveThemeToLocalStorage } from "../utils"

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    getThemeFromLocalStorage() || "dark"
  )

  const toggleTheme = useCallback((): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.bsTheme = theme
    saveThemeToLocalStorage(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
