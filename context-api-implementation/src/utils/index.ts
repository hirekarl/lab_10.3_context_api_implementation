import type { Theme } from "../types"

export function getThemeFromLocalStorage(): Theme | null {
  const localStorageTheme = localStorage.getItem("theme")
  if (localStorageTheme) {
    return JSON.parse(localStorageTheme)
  } else {
    return null
  }
}

export function saveThemeToLocalStorage(theme: Theme): void {
  localStorage.setItem("theme", JSON.stringify(theme))
}
