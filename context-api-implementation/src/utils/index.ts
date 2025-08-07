import type { Theme, Todo, Filter } from "../types"

export const getThemeFromLocalStorage = (): Theme | null => {
  const localStorageTheme = localStorage.getItem("theme")
  if (localStorageTheme) {
    return JSON.parse(localStorageTheme)
  } else {
    return null
  }
}

export const saveThemeToLocalStorage = (theme: Theme): void => {
  localStorage.setItem("theme", JSON.stringify(theme))
}

export const getTodosFromLocalStorage = (): Todo[] | null => {
  const localStorageTodos = localStorage.getItem("todos")
  if (localStorageTodos) {
    return JSON.parse(localStorageTodos)
  } else {
    return null
  }
}

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export const getFilterFromLocalStorage = (): Filter | null => {
  const localStorageFilter = localStorage.getItem("filter")
  if (localStorageFilter) {
    return JSON.parse(localStorageFilter)
  } else {
    return null
  }
}

export const saveFilterToLocalStorage = (filter: Filter): void => {
  localStorage.setItem("filter", JSON.stringify(filter))
}
