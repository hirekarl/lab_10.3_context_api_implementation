import { useEffect, useState, type ReactNode } from "react"
import type { Theme } from "../types"

import ThemeContext from "./ThemeContext"

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("dark")

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    document.documentElement.dataset.bsTheme = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
