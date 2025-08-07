import type { Theme, Todo, Filter } from "../types"

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

export function getTodosFromLocalStorage(): Todo[] | null {
  const localStorageTodos = localStorage.getItem("todos")
  if (localStorageTodos) {
    return JSON.parse(localStorageTodos)
  } else {
    return null
  }
}

export function saveTodosToLocalStorage(todos: Todo[]): void {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export function getFilterFromLocalStorage(): Filter | null {
  const localStorageFilter = localStorage.getItem("filter")
  if (localStorageFilter) {
    return JSON.parse(localStorageFilter)
  } else {
    return null
  }
}

export function saveFilterToLocalStorage(filter: Filter): void {
  localStorage.setItem("filter", JSON.stringify(filter))
}
